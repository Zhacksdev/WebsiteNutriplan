import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Newsapi() {
  const navigate = useNavigate(); // Inisialisasi navigate
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5201/api/NewsApi")
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message || "Something went wrong");
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched:", data);

        // Filter articles that have a valid image URL
        const filteredArticles = data.filter(
          (article) => article.urlToImage && article.urlToImage.trim() !== ""
        );

        setArticles(filteredArticles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error.message);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main
      className="News d-flex align-content-center"
      style={{
        margin: "5% 80px",
      }}
    >
      <section
        className="Title d-flex flex-column text-center mt-5 me-lg-5"
        style={{
          width: "30%",
        }}
      >
        <h1
          style={{
            color: "#010101",
            textAlign: "left",
            fontFamily: "MODERNIZ",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 900,
            lineHeight: "normal",
            letterSpacing: "24px",
          }}
        >
          NEWS
        </h1>
        <p
          style={{
            color: "#010101",
            textAlign: "left",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "180%", // Atau "28.8px"
            letterSpacing: "0.8px",
          }}
        >
          Berita seputar kesehatan yang bisa anda temukan disini
        </p>

        <button
          className="btn"
          style={{
            height: "50%",
            width: "50%",
            backgroundColor: "#2D5B3E",
            color: "white",
            fontWeight: 700,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Bayangan
          }}
          onClick={() => navigate("/newsapp")} // Navigasi ke NewsPage
        >
          Selengkapnya
        </button>
      </section>

      <section className="Gambar d-flex gap-4 ms-5">
        {articles.length > 0 ? (
          articles.slice(10, 13).map((article, index) => (
            <div key={index} className="article-card">
              <img
                src={article.urlToImage || "https://via.placeholder.com/200"}
                alt={article.title || "News Image"}
                className="news-image"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "20px",
                  objectFit: "cover", // Ensures image covers entire area
                }}
              />
            </div>
          ))
        ) : (
          <div>No articles found</div>
        )}
      </section>
    </main>
  );
}
