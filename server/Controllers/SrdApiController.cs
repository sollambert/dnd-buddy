using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace dnd_weekend_project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SrdApiController : ControllerBase
    {
        // Create httpClient for requests to DnD SRD Api
        static HttpClient httpClient = new HttpClient();

        [HttpGet("{*path}")]
        public async Task<IActionResult> GetAttribute(string path)
        {
            //URL for querying DND Api
            string apiUrl = "https://www.dnd5eapi.co/api/" + path;                                  ;
            Console.WriteLine(apiUrl);
            // Create an instance of HttpClient and set the authorization header
            httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Accept", "application/json");

            HttpResponseMessage response = await httpClient.GetAsync(apiUrl);
            string responseContent = await response.Content.ReadAsStringAsync();
            // var dictionary = new Dictionary<string, string>();
            // return JsonConvert.DeserializeObject<Object>(responseContent);

        //     // Read the response content as a string
        //     dynamic deserialized = JsonConvert.DeserializeObject<JObject>(responseContent);

        // // Serialize the object with custom settings
        // var serializerSettings = new JsonSerializerSettings
        // {
        //     NullValueHandling = NullValueHandling.Ignore,
        //     Formatting = Formatting.None
        // };
        // string json = JsonConvert.SerializeObject(deserialized, serializerSettings);
        //     // Print the response content to the console
        //     Console.WriteLine(json);

            // Return object from deserialized response
            return Ok(responseContent);
        }
    }
}