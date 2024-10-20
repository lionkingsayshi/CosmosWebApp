using CosmosApi.CosmosInterface;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Configuration;

namespace YourNamespace.Extensions // Change this to your actual namespace
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddCustomServices(this IServiceCollection services)
        {
            //services.AddDbContext<GalaxyContext>(options =>
            //options.UseMongoDB(Configuration.GetConnectionString("MongoDb")));
            // Register your services here
            services.AddScoped<ICosmosService, CosmosService>(); // Registering the CosmosService with the interface
            // Register other services as needed
            // services.AddScoped<AnotherService>();

            return services; // Return the service collection
        }
    }
}
