import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import iconBack from "../asset/icon/icon-back.svg";

export default function MainFavorit() {
  const navigate = useNavigate(); // Inisialisasi navigate
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    try {
      const response = await fetch("http://localhost:5201/api/CRUDApi");
      if (!response.ok) {
        throw new Error("Gagal mendapatkan artikel favorit.");
      }

      const data = await response.json();
      setFavorites(data);
    } catch (err) {
      console.error("Error fetching favorites:", err);
    }
  };

  const handleRemoveFavorite = async (url) => {
    console.log("URL untuk dihapus:", url); // Debugging
    try {
      const response = await fetch(
        `http://localhost:5201/api/CRUDApi/${encodeURIComponent(url)}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Gagal menghapus artikel dari favorit.");
      }

      alert("Artikel berhasil dihapus dari favorit!");
      fetchFavorites(); // Refresh favorites
    } catch (err) {
      console.error("Error removing favorite:", err);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <main
      className="d-flex flex-column justify-content-centera align-content-center"
      style={{ margin: "40px 80px", justifyContent: "center" }}
    >
      <h2 className=" text-center mb-4">Artikel Terfavorit</h2>
      <div>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {favorites.length > 0 ? (
            favorites.map((article, index) => (
              <div
                key={index}
                className="article-card p-3 shadow-sm border rounded"
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
                  className="news-image rounded mb-2"
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
                <h5 className="text-center mb-2">
                  {" "}
                  {article.title.split(" ").slice(0, 5).join(" ")}
                  {article.title.split(" ").length > 5 ? "..." : ""}
                </h5>
                <p className="text-muted">
                  Author: {article.author || "Tidak Diketahui"}
                </p>
                <button
                  className="btn btn-danger w-100"
                  onClick={() => handleRemoveFavorite(article.url)}
                >
                  Hapus dari Favorit
                </button>
              </div>
            ))
          ) : (
            <p className="text-center">Tidak ada artikel favorit.</p>
          )}
        </div>

        <button
          className="btn d-flex align-items-center gap-2 justify-content-center mx-auto text-center"
          style={{
            width: "20%",
            backgroundColor: "#2D5B3E",
            color: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Bayangan
            margin: "40px 0",
          }}
          onClick={() => navigate("/newsapp")} // Navigasi ke NewsPage
        >
          <img src={iconBack} alt=""></img>
          Kembali
        </button>
      </div>
    </main>
  );
}
