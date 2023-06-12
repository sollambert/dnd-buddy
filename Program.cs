namespace dnd_buddy
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

            // var builder = WebApplication.CreateBuilder(args);
            // builder.Services.AddControllersWithViews();
            // var app = builder.Build();
            // // app.UseHttpsRedirection();
            // app.UseStaticFiles();
            // app.UseRouting();
            // app.MapControllerRoute(
            //     name: "default",
            //     pattern: "{controller}/{action=Index}/{id?}");
            // app.MapFallbackToFile("index.html");

            IHost app = CreateHostBuilder(args).Build();
            app.Run();
        }
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}