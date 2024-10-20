using CosmosApi.CosmosInterface;
using Microsoft.AspNetCore.Mvc;

namespace CosmosApi.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class CosmosController : ControllerBase
    {
        private readonly ICosmosService _cosmosService;

        public CosmosController(ICosmosService cosmosService)
        {
            _cosmosService = cosmosService;
        }

        [HttpGet(Name = "GetGalaxyData")]
        public async Task<IActionResult> GetGalaxies()
        {
            var galaxies = await _cosmosService.GetGalaxiesAsync();
            return Ok(galaxies);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetGalaxyByIdAsync(string id)
        {
            var galaxy = await _cosmosService.GetGalaxyByIdAsync(id);

            if (galaxy == null)
            {
                return NotFound(); // Return 404 if galaxy is not found
            }

            return Ok(galaxy); // Return the galaxy with a 200 status
        }

        [HttpPost]
        public async Task<IActionResult> AddGalaxy(Galaxy galaxy)
        {
            await _cosmosService.AddGalaxyAsync(galaxy);
            return Ok();
        }

        // PUT: api/cosmos/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateGalaxy(string id, Galaxy galaxy)
        {
            if (id != galaxy.Id) // Ensure the IDs match
            {
                return BadRequest("ID mismatch");
            }

            var updated = await _cosmosService.UpdateGalaxyAsync(galaxy);
            if (!updated)
            {
                return NotFound($"Galaxy with ID {id} not found.");
            }

            return NoContent(); // Return 204 No Content on success
        }

        // DELETE: api/cosmos/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGalaxy(string id)
        {
            var deleted = await _cosmosService.DeleteGalaxyAsync(id);
            if (!deleted)
            {
                return NotFound($"Galaxy with ID {id} not found.");
            }

            return NoContent(); // Return 204 No Content on success
        }
    }

}
