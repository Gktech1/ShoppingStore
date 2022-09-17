using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace API.MiddleWare
{
    public class ExceptionMiddleware
    {
            private readonly RequestDelegate _next;
            private readonly IWebHostEnvironment _env;
            private readonly ILogger<ExceptionMiddleware> _logger;

//Access to the request Delegate (helps to move next piece of middleware)
//IHostEnvironment (helps to determine if we are in development or production)
        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger, 
        IWebHostEnvironment env)
                {
                    _next = next;
                    _env = env;
                    _logger = logger;
                }


        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                context.Response.ContentType = "application/json";
                context.Response.StatusCode = 500;

                var response = new ProblemDetails
                {
                    Status = 500,
                    Detail = _env.IsDevelopment() ? ex.StackTrace.ToString() : null,
                    Title = ex.Message
                };

                // What our client will see

                var options = new JsonSerializerOptions
                {
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                };

                var json = JsonSerializer.Serialize(response, options);
                await context.Response.WriteAsync(json);
            }
        }

    }
}