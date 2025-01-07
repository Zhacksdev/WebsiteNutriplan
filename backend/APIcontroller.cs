using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;


// Controller untuk menghitung data dari Inputan user di Frontend menggunakan BMR dan menghasilkan output berupa rekomendasi


namespace APIcontroller.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KontrolKalori : ControllerBase
    {
        // POST api/calorie/calculate
        [HttpPost("Kalkulasi")]
        public IActionResult Kalkulasi([FromBody] CalorieRequest request)
        {
            // Validasi input jika ada data yang kosong
            if (request == null || string.IsNullOrEmpty(request.kelamin) || request.berat <= 0 || request.tinggi <= 0 || request.umur <= 0)
            {
                return BadRequest("ISI DATA DULU");
            }

            // Hitung BMR berdasarkan jenis kelamin menggunakan rekursif
            double bmr = CalculateBMR(request.kelamin, request.berat, request.tinggi, request.umur);

            // Mengambil rekomendasi berdasarkan BMR
            var rekomendasi = GetRecommendations(bmr);

            return Ok(rekomendasi);
        }

        // Fungsi untuk menghitung BMR menggunakan rumus yang berbeda berdasarkan jenis kelamin
        private double CalculateBMR(string kelamin, double berat, double tinggi, int umur)
        {
            if (kelamin.Equals("Laki-laki", StringComparison.OrdinalIgnoreCase))
            {
                // Rumus Harris-Benedict untuk Laki-laki
                return 88.362 + (13.397 * berat) + (4.799 * tinggi) - (5.677 * umur);
            }
            else if (kelamin.Equals("Perempuan", StringComparison.OrdinalIgnoreCase))
            {
                // Rumus Harris-Benedict untuk Perempuan
                return 447.593 + (9.247 * berat) + (3.098 * tinggi) - (4.330 * umur);
            }
            else
            {
                throw new ArgumentException("Jenis Kelamin tidak ada");
            }
        }

        // Fungsi untuk memberikan rekomendasi berdasarkan BMR
        private Recommendations GetRecommendations(double bmr)
        {
            // Data rekomendasi dalam bentuk array Tuple
            var bmrData = new List<(double Kalori, string Olahraga, string Makanan)>
            {
                (100, "Jalan Santai", "Buah Apel"),
                (200, "Bersepeda", "Salad Sayuran"),
                (300, "Yoga", "Yogurt"),
                (400, "Renang", "Telur Rebus"),
                (500, "Lari", "Nasi Merah"),
                (600, "Zumba", "Smoothie Buah"),
                (700, "Kickboxing", "Ikan Bakar"),
                (800, "Pilates", "Sup Sayuran"),
                (900, "Angkat Beban", "Ayam Panggang"),
                (1000, "Lari Jarak Jauh", "Pasta Ayam"),
                (1200, "Sepak Bola", "Daging Sapi"),
                (1500, "Crossfit", "Nasi Goreng"),
                (1800, "Hiking", "Salad Ayam"),
                (2000, "Renang Intensif", "Sate Ayam")
            };

            // Mencari nilai kalori terdekat
            var closest = bmrData
                .OrderBy(data => Math.Abs(bmr - data.Kalori))
                .First();

            return new Recommendations
            {
                Sport = closest.Olahraga,
                Food = closest.Makanan
            };
        }
    }

    // Model untuk menerima request dari client
    public class CalorieRequest
    {
        public string kelamin { get; set; }
        public double berat { get; set; } // Berat badan dalam kg
        public double tinggi { get; set; } // Tinggi badan dalam cm
        public int umur { get; set; } // Umur dalam tahun
    }

    // Model untuk response rekomendasi
    public class Recommendations
    {
        public string Sport { get; set; }
        public string Food { get; set; }
    }
}