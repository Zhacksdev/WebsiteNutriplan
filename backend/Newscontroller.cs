// Library
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Collections.Generic;


// Controller untuk mengambil data dari News API

[Route("api/[controller]")]
[ApiController]
public class NewsApi : ControllerBase
{
    // Credential Key dari News API
    private readonly string apiKey = "17dcafe57ba64032af83f2827580963c";
    private readonly string baseUrl = "https://newsapi.org/v2/top-headlines";

    // Fungsi untuk mengambil data dari News API
    [HttpGet]
    public async Task<IActionResult> GetNews([FromQuery] string category, [FromQuery] string query)
    {
        // Validasi kategori
        string[] validCategories = { "health", "sport", "science" };
        if (!string.IsNullOrEmpty(category) && !System.Array.Exists(validCategories, c => c == category.ToLower()))
        {
            return BadRequest("Kategori tidak valid. Pilih antara: health, sport, atau science.");
        }

        List<Article> allArticles = new List<Article>();

        // Looping kategori atau satu kategori jika ditentukan
        string[] categories = string.IsNullOrEmpty(category) ? validCategories : new string[] { category };

        foreach (var cat in categories)
        {
            var requestUrl = $"{baseUrl}?country=us&category={cat}&apiKey={apiKey}";
            if (!string.IsNullOrEmpty(query))
            {
                requestUrl += $"&q={query}";
            }

            // Mengirim permintaan HTTP
            using (HttpClient client = new HttpClient())
            {
                // Penanganan eror ketika request News API
                try
                {
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    client.DefaultRequestHeaders.Add("User-Agent", "NewsAPIClient/1.0");

                    var response = await client.GetAsync(requestUrl);

                    Console.WriteLine($"Response Status Code for {cat}: {response.StatusCode}");

                    if (response.IsSuccessStatusCode)
                    {
                        var jsonResponse = await response.Content.ReadAsStringAsync();
                        var newsData = JsonConvert.DeserializeObject<NewsApiResponse>(jsonResponse);

                        if (newsData?.Articles == null)
                        {
                            Console.WriteLine($"Deserialized Articles for {cat} are null");
                            continue;
                        }

                        allArticles.AddRange(newsData.Articles);
                    }
                    else
                    {
                        var errorContent = await response.Content.ReadAsStringAsync();
                        Console.WriteLine($"Error Response for {cat}: " + errorContent);
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Exception Details for {cat}: " + ex.ToString());
                }
            }
        }

        if (allArticles.Count == 0)
        {
            return BadRequest("Artikel tidak ada");
        }

        return Ok(allArticles);
    }
}

// Mengubah data dari format JSON ke bentuk objek supaya bisa digunakan dalam kode
public class NewsApiResponse
{
    [JsonProperty("status")]
    public string Status { get; set; }

    [JsonProperty("totalResults")]
    public int TotalResults { get; set; }

    [JsonProperty("articles")]
    public List<Article> Articles { get; set; }
}

public class Article
{
    [JsonProperty("source")]
    public Source Source { get; set; }

    [JsonProperty("author")]
    public string Author { get; set; }

    [JsonProperty("title")]
    public string Title { get; set; }

    [JsonProperty("description")]
    public string Description { get; set; }

    [JsonProperty("url")]
    public string Url { get; set; }

    [JsonProperty("urlToImage")]
    public string UrlToImage { get; set; }

    [JsonProperty("publishedAt")]
    public string PublishedAt { get; set; }

    [JsonProperty("content")]
    public string Content { get; set; }
}

public class Source
{
    [JsonProperty("id")]
    public string Id { get; set; }

    [JsonProperty("name")]
    public string Name { get; set; }
}
