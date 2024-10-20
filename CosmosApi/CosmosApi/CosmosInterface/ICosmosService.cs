namespace CosmosApi.CosmosInterface
{
    public interface ICosmosService
    {
        Task AddGalaxyAsync(Galaxy galaxy);
        Task<List<Galaxy>> GetGalaxiesAsync();
        Task<Galaxy> GetGalaxyByIdAsync(string id);
        Task<bool> UpdateGalaxyAsync(Galaxy galaxy);
        Task<bool> DeleteGalaxyAsync(string id);
    }
}
