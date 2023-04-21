using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System;
using System.IO;

namespace dnd_weekend_project
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string envFilePath = Path.Combine(Directory.GetCurrentDirectory(), ".env");
            if (File.Exists(envFilePath))
            {
                foreach (var line in File.ReadAllLines(envFilePath))
                {
                    string[] parts = line.Split(new[] { '=' }, 2, StringSplitOptions.RemoveEmptyEntries);
                    if (parts.Length == 2)
                    {
                        Environment.SetEnvironmentVariable(parts[0], parts[1]);
                    }
                }
            }

            // Use the environment variables in your application
            string apiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY");

            Console.WriteLine($"API key: {apiKey}");
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}