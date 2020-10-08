using api.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace api
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));

            services.AddMvc()
                .AddNewtonsoftJson();

            services.AddControllers(c =>
            {
                c.EnableEndpointRouting = false;
            });

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddSingleton<FactorialCalculator, FactorialCalculator>();
            services.AddSingleton<FibonacciCalculator, FibonacciCalculator>();
            services.AddSingleton<PageContentProvider, PageContentProvider>();
            services.AddSingleton<RandomSquareCalculator, RandomSquareCalculator>();
            services.AddSingleton<RandomNumber, RandomNumber>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors("MyPolicy");

            app.UseForwardedHeaders();
            app.UseDeveloperExceptionPage();
            app.UseRouting();
            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

            app.UseMvc();
        }
    }
}
