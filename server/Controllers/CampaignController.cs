using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using dnd_buddy.Models;

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

        // This is just a stub for GET / to prevent any weird frontend errors that 
        // occur when the route is missing in this controller
        [HttpGet]
        public IEnumerable<Campaign> GetAllCampaigns()
        {
            return _context.Campaigns;
        }

        [HttpGet("{id}")]
        public Campaign GetCampaignById(int id)
        {
            return _context.Campaigns.Find(id);
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