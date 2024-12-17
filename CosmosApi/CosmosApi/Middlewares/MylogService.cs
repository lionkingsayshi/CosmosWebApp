namespace CosmosApi.Middlewares
{
    public class MylogService
    {
        private readonly ILogger<MylogService> _logger;
        public MylogService(ILogger<MylogService> logger)
        {
            _logger = logger;
        }
        public void DoWork()
        {
            _logger.LogInformation("DoWork method called.");
        }
    }
}
