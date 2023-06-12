using Microsoft.EntityFrameworkCore;
using dnd_buddy.Models;

namespace dnd_buddy
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            // see if we have an environment variable
            string DATABASE_URL = Environment.GetEnvironmentVariable("DATABASE_URL_STR");
            string connectionString = (DATABASE_URL == null ? Configuration.GetConnectionString("DefaultConnection") : DATABASE_URL);
            Console.WriteLine($"Using connection string: {connectionString}");

            services.AddDbContext<ApplicationContext>(options =>
                options.UseNpgsql(connectionString)
            );
            services.AddMvc();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration => {
                configuration.RootPath = "ClientApp";
            });
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }
            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });
        }
    }
}
