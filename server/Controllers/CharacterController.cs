using System.Net.NetworkInformation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using dnd_weekend_project.Models;
using Microsoft.EntityFrameworkCore;

namespace dnd_weekend_project.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CharacterController : ControllerBase
    {
        private readonly ApplicationContext _context;
        public CharacterController(ApplicationContext context)
        {
            _context = context;
        }

        // This is just a stub for GET / to prevent any weird frontend errors that 
        // occur when the route is missing in this controller
        [HttpGet]
        public IEnumerable<Character> GetAllCharacters()
        {
            return _context.Characters;
        }

        [HttpGet("{id}")]
        public Character GetCharacterById(int id)
        {
            return _context.Characters.Find(id);
        }

        [HttpPost]
        public IActionResult PostCharacter(Character character)
        {
            _context.Add(character);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetCharacterById), new { id = character.Id }, character);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCharacter(Character character, int id)
        {
            character.Id = id;
            _context.Update(character);
            _context.SaveChanges();
            return Ok(character);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCharacter(int id)
        {
            Character character = _context.Characters.Find(id);
            _context.Characters.Remove(character);
            _context.SaveChanges();
            return NoContent();
        }
    }
}