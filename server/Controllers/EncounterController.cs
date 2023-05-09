using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
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

        // This is just a stub for GET / to prevent any weird frontend errors that 
        // occur when the route is missing in this controller
        [HttpGet]
        public IEnumerable<Encounter> GetAllEncounters()
        {
            return _context.Encounters;
        }

        [HttpGet("{id}")]
        public Encounter GetEncounterById(int id)
        {
            return _context.Encounters.Find(id);
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