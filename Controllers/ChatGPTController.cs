using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

using dnd_buddy.Models;

namespace dnd_buddy.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatGPTController : ControllerBase
    {
        // Create httpClient for requests to ChatGPT
        static HttpClient httpClient = new HttpClient();

        // Create db context
        private readonly ApplicationContext _context;
        public ChatGPTController(ApplicationContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> SendPrompt([FromBody] ChatGPTRequest request)
        {
            string apiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY");
            string apiUrl = "https://api.openai.com/v1/chat/completions";

            // Define messages array that will go into request body
            var messages = new[]
                {
                    new {   role = "system", content = "You are a DND dungeon master."},
                    new {   role = "user",  content = request.Prompt}
                };

            // Create request body
            var requestBody = new
            {
                model = "gpt-3.5-turbo",
                messages
            };

            // Serialize request body into JSON to prepare sending to ChatGPT
            string requestBodyJson = JsonConvert.SerializeObject(requestBody);

            // Create an instance of HttpClient and set the authorization header
            httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);

            // Make a POST request to the API endpoint with the request body
            StringContent content = new StringContent(requestBodyJson, Encoding.UTF8, "application/json");
            HttpResponseMessage response = await httpClient.PostAsync(apiUrl, content);
            string responseContent = await response.Content.ReadAsStringAsync();

            // Read the response content as a string
            ChatGPTResponse deserialized = JsonConvert.DeserializeObject<ChatGPTResponse>(responseContent);
            deserialized.request = request;

            // Print the response content to the console
            Console.WriteLine(deserialized.ToString());

            // Add request and deserialized response to context and save changes
            _context.Add(request);
            _context.Add(deserialized);
            _context.SaveChanges();

            // Return choice object from deserialized ChatGPT response
            return CreatedAtAction(nameof(GetResponseChoicesById), deserialized.choices);
        }

        [HttpGet("request")]
        public IEnumerable<ChatGPTRequest> GetRequests()
        {
            // Return all requests in DB
            return _context.ChatGPTRequests;
        }

        [HttpGet("request/{id}")]
        public ChatGPTRequest GetRequestById(int id)
        {
            // Return request associated with given ID
            return _context.ChatGPTRequests.Find(id);
        }

        [HttpGet("response")]
        public IEnumerable<ChatGPTResponse> GetResponses()
        {
            // Return responses from database after attaching choices and messages
            return _context.ChatGPTResponses
            .Include(response => response.request)
            .Include(response => response.choices)
            .ThenInclude(choice => choice.message)
            .AsSplitQuery();
        }

        [HttpGet("response/messages")]
        public async Task<IEnumerable<ChatGPTResponse.Message>> GetMessages()
        {
            // Get responses from database and attach choices and messages
            List<ChatGPTResponse> responses = await _context.ChatGPTResponses
            .Include(prop => prop.choices)
            .ThenInclude(prop => prop.message)
            .AsSplitQuery()
            .ToListAsync();

            // Drill into responses to get only messages and store them into the messages list
            List<ChatGPTResponse.Message> messages = new List<ChatGPTResponse.Message>();
            responses.ForEach(response =>
            {
                response.choices.ForEach(choice =>
                {
                    messages.Add(choice.message);
                });
            });
            // Return messages list
            return messages;
        }

        [HttpGet("response/choice/{id}")]
        public async Task<ChatGPTResponse.Choice> GetResponseChoicesById(int id)
        {
            // Get responses from database and attach choices and messages
            List<ChatGPTResponse> responses = await _context.ChatGPTResponses
            .Include(response => response.choices)
            .ThenInclude(choice => choice.message)
            .AsSplitQuery()
            .ToListAsync();

            // Drill into choices and return the message associated to given choice ID
            ChatGPTResponse.Choice choiceById = null;
            responses.ForEach(response => response.choices.ForEach(choice =>
            {
                if (choice.Id == id)
                {
                    choiceById = choice;
                }
            }));
            return choiceById;
        }

        [HttpGet("response/{id}")]
        public async Task<ChatGPTResponse> GetResponseById(int id)
        {
            List<ChatGPTResponse> responses = await _context.ChatGPTResponses
                .Include(prop => prop.choices)
                .Include(prop => prop.request).ToListAsync();
            // Return response associated with given ID
            return responses.Find(response => response.Id == id);
        }
    }
}