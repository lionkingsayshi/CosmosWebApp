using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace CosmosApi.Middlewares
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _requestDelegate;
        private readonly IConfiguration _configuration;
        private readonly ILogger<JwtMiddleware> _logger;

        public JwtMiddleware(RequestDelegate requestDelegate, 
            IConfiguration configuration,
            ILogger<JwtMiddleware> logger)
        {
            _requestDelegate = requestDelegate;
            _configuration = configuration;
            _logger = logger;
        }
        public async Task Invoke(HttpContext context)
        {
            var token = context.Request.Headers["Authorization"].FirstOrDefault();
            if (token != null) 
            {
                AttachUserToContext(context, token);
            }
            await _requestDelegate(context);
        }
        private void AttachUserToContext(HttpContext context, string token) 
        {
            try
            {
                _logger.LogInformation("AttachUserToContext{RequestPath}", DateTime.Now, "Authentication started");
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = _configuration["Jwt:Issuer"],
                    ValidAudience = _configuration["Jwt:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                }, out SecurityToken validatedToken);
                var jwtToken = (JwtSecurityToken)validatedToken;
                var userId = jwtToken.Claims.First(x => x.Type == "id").Value; // Attach user information to the HttpContext.Items
                context.Items["User"] = userId;
                _logger.LogInformation("JwtToken is attached to context", DateTime.Now);
            }
            catch(Exception ex)
            {
                _logger.LogError("Jwt validation fails (user is not attached to context)", DateTime.Now);
            }
        }
    }
}
