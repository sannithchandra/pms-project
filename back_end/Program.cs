using Microsoft.EntityFrameworkCore;
using ProductCrudAPI.Models;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



builder.Services.AddDbContext<ProductDBContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("ProductDB")));

//var connectionString = builder.Configuration.GetConnectionString("ProductDB");
//builder.Services.AddDbContextPool(option =>
//option.UseSqlServer(connectionString)
//);


//coors config
// Named Policy
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowAngularOrigins",
        builder =>
        {
            builder.WithOrigins("https://localhost:4200")
                                .AllowAnyHeader()
                                .AllowAnyMethod();
        });
});









var app = builder.Build();
//app.UseCors("AllowAngularOrigins");




// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//my error code
//app.UseAuthentication();
app.UseRouting();
//app.UseAuthorization();
//app.UseEndpoints(endpoints =>
//{
//    endpoints.MapControllers().RequireCors("AllowAngularOrigins");
//});


app.UseCors(
  options => options.WithOrigins("*").AllowAnyMethod().AllowAnyHeader()
      );

//my another cors code 
app.UseEndpoints(endpoints => { endpoints.MapControllers(); });





app.UseHttpsRedirection();

//app.UseAuthorization();

app.MapControllers();

app.Run();
