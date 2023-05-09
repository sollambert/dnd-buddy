using Microsoft.EntityFrameworkCore;

namespace dnd_buddy.Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) {}
        public DbSet<Character> Characters { get; set;}
        public DbSet<ChatGPTResponse> ChatGPTResponses {get; set;}
        public DbSet<ChatGPTRequest> ChatGPTRequests {get; set;}
        public DbSet<Encounter> Encounters {get; set;}
        public DbSet<Campaign> Campaigns {get; set;}
    }
}