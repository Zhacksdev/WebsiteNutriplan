// Kelas : SI-07-02
// Kelompok : 10
// Anggota Kelompok :
// Kelompok 10:
// 1. Muhammad Zacky Hafiansyah (102062430008) 
// 2. Ihtada Haqi Prasetyo (102062400060) 
// 3. Devina Arulyantani Venensia Agustin (102062400037) 
// 4. Rayindarari Damba Bijaksana (102062400028)


// Controller untuk integrasi Frontend dan Backend

var builder = WebApplication.CreateBuilder(args);

// Menambahkan CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        builder => builder
            .WithOrigins("http://localhost:3000")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials()); // Optional, but can help with some setups
});

// Menambahkan kontroler (API)
builder.Services.AddControllers()
    .AddNewtonsoftJson(); // Ensure Newtonsoft.Json is used for serialization

var app = builder.Build();

// Important: Ensure these middleware are in the correct order
app.UseHttpsRedirection();
app.UseCors("AllowFrontend"); // Place CORS before routing/endpoints
app.UseRouting();

// Menambahkan routing dan endpoints
app.MapControllers();  

app.Run();