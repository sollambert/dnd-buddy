using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Duende.IdentityServer.EntityFramework.Options;
using dnd_buddy.Models;

namespace dnd_buddy.Data
{
    public class ApplicationContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options, IOptions<OperationalStoreOptions> operationalStoreOptions)
        : base(options, operationalStoreOptions) {}
        public DbSet<Character>? Characters { get; set;}
        public DbSet<ChatGPTResponse>? ChatGPTResponses {get; set;}
        public DbSet<ChatGPTRequest>? ChatGPTRequests {get; set;}
        public DbSet<Encounter>? Encounters {get; set;}
        public DbSet<Campaign>? Campaigns {get; set;}
        public DbSet<CampaignNote>? CampaignNotes {get; set;}
    }
}