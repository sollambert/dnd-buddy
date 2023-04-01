using Microsoft.EntityFrameworkCore;

namespace dnd_weekend_project.Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) {}

        public DbSet<Character> Characters { get; set;}
    }
}