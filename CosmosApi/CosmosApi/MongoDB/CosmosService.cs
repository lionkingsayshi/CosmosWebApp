using MongoDB.Driver; // For IMongoCollection<T>
using Microsoft.Extensions.Configuration; // For IConfiguration
using System.Collections.Generic; // For List<T>
using System.Threading.Tasks;
using CosmosApi.CosmosInterface; // For Task<T>

public class CosmosService : ICosmosService
{
    private readonly IMongoCollection<Galaxy> _galaxies;

    public CosmosService(IConfiguration config)
    {
        var client = new MongoClient(config.GetConnectionString("CosmosDb"));
        var database = client.GetDatabase("CosmosDb");
        _galaxies = database.GetCollection<Galaxy>("Galaxies");
    }

    public async Task AddGalaxyAsync(Galaxy galaxy)
    {
        await _galaxies.InsertOneAsync(galaxy);
    }

    //Get all
    public async Task<List<Galaxy>> GetGalaxiesAsync() =>
        await _galaxies.Find(galaxy => true).ToListAsync();

    // Get by id
    public async Task<Galaxy> GetGalaxyByIdAsync(string id) =>
        await _galaxies.Find(g => g.Id == id).FirstOrDefaultAsync();
    public async Task<bool> UpdateGalaxyAsync(Galaxy galaxy)
    {
        var result = await _galaxies.ReplaceOneAsync(
            g => g.Id == galaxy.Id, // Find by ID
            galaxy); // Replace with the updated galaxy

        return result.IsAcknowledged && result.ModifiedCount > 0;
    }

    public async Task<bool> DeleteGalaxyAsync(string id)
    {
        var result = await _galaxies.DeleteOneAsync(g => g.Id == id);
        return result.DeletedCount > 0;
    }
}
