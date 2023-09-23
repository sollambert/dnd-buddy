using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using dnd_buddy.Models;
using dnd_buddy.Data;

namespace dnd_buddy.Controllers
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

        [HttpPut]
        public IActionResult UpdateCharacter(Character character)
        {
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