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
            string apiUrl = "https://www.dnd5eapi.co/api/" + path;

            // Create an instance of HttpClient and set the authorization header
            httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Accept", "application/json");

            // Parse HTTP response from API
            HttpResponseMessage response = await httpClient.GetAsync(apiUrl);
            string responseContent = await response.Content.ReadAsStringAsync();

            // Return string from HTTP response
            return Ok(responseContent);
        }
    }
}