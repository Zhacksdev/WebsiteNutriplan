// Library
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Collections.Generic;


// Controller untuk fitur CRUD halaman news ke halaman favorit

[Route("api/[controller]")]
[ApiController]
public class CRUDApi : ControllerBase
{
    private static List<Article> favoriteArticles = new List<Article>();

    // GET: Mendapatkan semua artikel favorit
    [HttpGet]
    public IActionResult GetFavorites()
    {
        return Ok(favoriteArticles);
    }

    [HttpPost]
    public IActionResult AddFavorite([FromBody] Article article)
    {
        Console.WriteLine(JsonConvert.SerializeObject(article));
        try
        {
            if (article == null || string.IsNullOrWhiteSpace(article.Url))
            {
                return BadRequest(new { message = "Artikel tidak valid." });
            }

            if (favoriteArticles.Exists(a => a.Url == article.Url))
            {
                return Conflict(new { message = "Artikel sudah ada di favorit." });
            }

            favoriteArticles.Add(article);
            Console.WriteLine("Artikel berhasil ditambahkan.");
            return Ok(new { message = "Artikel berhasil ditambahkan ke favorit." });
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
            return StatusCode(500, new { message = "Terjadi kesalahan pada server." });
        }
    }


    [HttpDelete("{url}")]
    public IActionResult RemoveFavorite(string url)
    {
        var decodedUrl = System.Net.WebUtility.UrlDecode(url); // Decode URL
        Console.WriteLine($"URL diterima: {decodedUrl}");

        var article = favoriteArticles.FirstOrDefault(a => a.Url == decodedUrl);
        if (article == null)
        {
            Console.WriteLine("Artikel tidak ditemukan.");
            return NotFound("Artikel tidak ditemukan.");
        }

        favoriteArticles.Remove(article);
        return Ok("Artikel berhasil dihapus dari favorit.");
    }

}



