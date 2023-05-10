using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using dnd_buddy.Models;

namespace dnd_buddy.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EncounterController : ControllerBase
    {
        private readonly ApplicationContext _context;
        public EncounterController(ApplicationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Encounter> GetAllEncounters()
        {
            return _context.Encounters
            .Include(e => e.Entities)
            .Include(e => e.Items)
            .AsSplitQuery();
        }

        [HttpGet("{id}")]
        public async Task<Encounter> GetEncounterById(int id)
        {
            return await _context.Encounters
            .Include(e => e.Entities)
            .Include(e => e.Items)
            .AsSplitQuery()
            .FirstOrDefaultAsync(e => e.Id == id);
        }

        [HttpPost]
        public IActionResult PostEncounter(Encounter encounter)
        {
            _context.Add(encounter);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetEncounterById), new { id = encounter.Id }, encounter);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateEncounter(Encounter encounter, int id)
        {
            encounter.Id = id;
            _context.Update(encounter);
            _context.SaveChanges();
            return Ok(encounter);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEncounter(int id)
        {
            Encounter encounter = _context.Encounters.Find(id);
            _context.Encounters.Remove(encounter);
            _context.SaveChanges();
            return NoContent();
        }
    }
}