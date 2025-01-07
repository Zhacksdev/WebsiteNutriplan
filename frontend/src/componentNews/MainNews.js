import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import iconBack from "../asset/icon/icon-back.svg";

export default function Newsapi() {
  const navigate = useNavigate(); // Inisialisasi navigate
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Untuk loading saat fetch baru
  const [, setError] = useState(null);
  const [likedNews, setLikedNews] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("health");

  const handleAddToFavorites = async (article) => {
    if (!article || !article.url) {
      console.error("Artikel tidak valid atau URL tidak ditemukan.");
      alert("Gagal menambahkan artikel. Data artikel tidak lengkap.");
      return;
    }

    try {
      const normalizedUrl = article.url.trim().toLowerCase();
      const response = await fetch("http://localhost:5201/api/CRUDApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...article, url: normalizedUrl }),
      });

      if (response.status === 409) {
        alert("Artikel sudah ada di favorit.");
        return;
      }

      if (!response.ok) {
        throw new Error("Gagal menambahkan artikel ke favorit.");
      }

      // Tambahkan URL ke state likedNews
      setLikedNews((prevState) => ({
        ...prevState,
        [article.url]: true,
      }));

      alert("Artikel berhasil ditambahkan ke favorit!");
    } catch (err) {
      console.error("Error adding to favorites:", err);
    }
  };

  const fetchFavorites = async () => {
    try {
      const response = await fetch("http://localhost:5201/api/CRUDApi");
      if (!response.ok) {
        throw new Error("Gagal mendapatkan artikel favorit.");
      }

      const data = await response.json();
      setLikedNews(
        data.reduce((acc, article) => {
          acc[article.url] = true;
          return acc;
        }, {})
      );
    } catch (err) {
      console.error("Error fetching favorites:", err);
    }
  };

  const handleLoveClick = (article) => {
    if (!article || !article.url) {
      console.error("Artikel tidak valid:", article);
      alert("Artikel tidak dapat ditambahkan. URL tidak ditemukan.");
      return;
    }

    if (!likedNews[article.url]) {
      handleAddToFavorites(article);
    } else {
      alert("Artikel sudah ada di favorit.");
    }
  };

  // Fungsi untuk memuat artikel berdasarkan filter dan pencarian
  const fetchArticles = async (category, query = "") => {
    setIsLoading(true); // Loading hanya berlaku saat fetch baru
    try {
      const response = await fetch(
        `http://localhost:5201/api/NewsApi?category=${category}&query=${query}`
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }
      const data = await response.json();

      // Filter articles yang memiliki URL gambar yang valid
      const filteredArticles = data.filter(
        (article) => article.urlToImage && article.urlToImage.trim() !== ""
      );

      setArticles(filteredArticles);
      setError(null);
    } catch (err) {
      console.error("Error fetching articles:", err);
      setError(err.message);
    } finally {
      setIsLoading(false); // Selesai loading
    }
  };

  // Fetch artikel pertama kali dan saat kategori berubah
  useEffect(() => {
    fetchArticles(selectedCategory, searchQuery);
    fetchFavorites();
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <div className="filter-search d-flex justify-content-center mb-4">
      <button
          className="btn d-flex align-items-center gap-2 me-2"
          style={{
            marginLeft: "10px",
            backgroundColor: "#2D5B3E",
            color: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Bayangan
          }}
          onClick={() => navigate("/")} // Navigasi ke NewsPage
        >
          <img src={iconBack} alt=""></img>
          Kembali
        </button>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="form-select w-auto me-2"
        >
          <option value="health">Health</option>
          <option value="sport">Sport</option>
          <option value="science">Science</option>
        </select>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="form-control w-auto me-2"
        />
        <button
          onClick={() => fetchArticles(selectedCategory, searchQuery)}
          className="btn btn-primary"
        >
          Search
        </button>

        <button
          className="btn"
          style={{
            marginLeft: "10px",
            backgroundColor: "red",
            color: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Bayangan
          }}
          onClick={() => navigate("/favoritapp")} // Navigasi ke NewsPage
        >
          Favorite
        </button>
      </div>
      {isLoading && <div>Loading...</div>}{" "}
      {/* Tampilkan loading hanya untuk loading fetch baru */}
      <main
        className="News"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          margin: "5% 80px",
        }}
      >
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div
              key={index}
              className="article-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "220px",
                padding: "10px",
                boxSizing: "border-box",
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                textAlign: "center",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={article.urlToImage || "https://via.placeholder.com/200"}
                alt={article.title || "News Image"}
                className="news-image"
                style={{
                  width: "200px",
                  height: "120px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <h5 className="mt-4">
                {article.title.split(" ").slice(0, 5).join(" ")}
                {article.title.split(" ").length > 5 ? "..." : ""}
              </h5>

              <p>Author: {article.author || "Tidak Diketahui"}</p>
              <button
                onClick={() => {
                  handleLoveClick(article);
                }}
                style={{
                  backgroundColor: likedNews[article.url] ? "red" : "gray",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                {likedNews[article.url] ? "Favorit" : "Tambah Favorit"}
              </button>
            </div>
          ))
        ) : (
          <div>No articles found</div>
        )}
      </main>
    </>
  );
}
