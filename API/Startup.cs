using API.Data;
using Microsoft.EntityFrameworkCore;

namespace API
{
    public class Startup
    {
         private readonly IWebHostEnvironment _env;
             public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            Configuration = configuration;
            _env = env;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)    
        {
            services.AddControllers();
            services.AddCors(); 
            services.AddSwaggerGen();
            services.AddDbContext<StoreContext>(options =>
           
            options.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));
        }

         public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"));
            }

            //app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors(x => 
            {
                x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
            });

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }    

    }
}