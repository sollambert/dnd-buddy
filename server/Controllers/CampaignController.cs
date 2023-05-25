using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using dnd_buddy.Models;
using System;

namespace dnd_buddy.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CampaignController : ControllerBase
    {
        private readonly ApplicationContext _context;
        public CampaignController(ApplicationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Campaign> GetAllCampaigns()
        {
            return _context.Campaigns
            .Include(campaign => campaign.Encounters)
                .ThenInclude(encounter => encounter.Entities)
            .Include(campaign => campaign.Encounters)
                .ThenInclude(encounter => encounter.Items)
            .Include(campaign => campaign.Characters)
            .AsSplitQuery();
        }

        [HttpGet("info")]
        public async Task<IEnumerable<Object>> GetAllCampaignNames() {
            List<Object> names = new List<Object>();
            await _context.Campaigns.ForEachAsync(campaign => {
                names.Add(new {id = campaign.Id, name = campaign.Name});
            });
            return names;
        }

        [HttpGet("{id}")]
        public async Task<Campaign> GetCampaignById(int id)
        {
            List<Campaign> campaigns = await _context.Campaigns
            .Include(campaign => campaign.Encounters)
            .Include(campaign => campaign.Characters).ToListAsync();
            Campaign campaign = campaigns.Find(campaign => {
                return campaign.Id == id;
            });
            return campaign;
        }

        [HttpPost]
        public IActionResult PostCampaign(Campaign campaign)
        {
            _context.Add(campaign);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetCampaignById), new { id = campaign.Id }, campaign);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCampaign(Campaign campaign, int id)
        {
            campaign.Id = id;
            _context.Update(campaign);
            _context.SaveChanges();
            return Ok(campaign);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCampaign(int id)
        {
            Campaign campaign = _context.Campaigns.Find(id);
            _context.Campaigns.Remove(campaign);
            _context.SaveChanges();
            return NoContent();
        }
    }
}