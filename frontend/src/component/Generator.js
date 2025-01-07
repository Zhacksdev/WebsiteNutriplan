import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import iconmen from "../asset/icon/icon-man.svg";
import iconwoman from "../asset/icon/icon-woman.svg";
import iconreset from "../asset/icon/icon-reset.svg";
import { useState } from "react";

export default function GenderSelector() {
  // Fungsi untuk handle masing masing data
  const [kelamin, setKelamin] = useState("");
  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [umur, setUmur] = useState("");
  const [rekomendasi, setRekomen] = useState("");
  const [hoverMan, setHoverMan] = useState("");
  const [hoverWoman, setHoverWoman] = useState("");

  // Fungsi mengirimkan data ke API ASP.NET
  const handleKalkulasi = async () => {
    // Validasi input
    if (
      parseInt(berat) > 200 ||
      parseInt(tinggi) > 200 ||
      parseInt(umur) > 60
    ) {
      alert(
        "Pastikan berat badan tidak lebih dari 200 kg, tinggi badan tidak lebih dari 200 cm, dan usia tidak lebih dari 60 tahun."
      );
    } else if (!kelamin || !berat || !tinggi || !umur) {
      alert("Pastikan semua data terisi dengan benar.");
      return;
    } else if (parseInt(tinggi) < 120) {
      alert("Pastikan tinggi badan lebih dari 100 cm");
    } else if (parseInt(berat) < 20) {
      alert("Pastikan berat badan lebih dari 20 kg");
    } else {
      try {
        const response = await fetch(
          "http://localhost:5201/api/KontrolKalori/Kalkulasi",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              kelamin,
              berat,
              tinggi,
              umur,
            }),
          }
        );
        const data = await response.json();
        console.log("Data response:", data); // Tambahkan ini
        setRekomen(data); // Menyimpan hasil rekomendasi dari server
      } catch (error) {
        console.error("Data tidak berhasil terhubung", error);
      }
    }
  };

  // Fungsi reset
  const handleReset = async () => {
    setKelamin("");
    setBerat("");
    setTinggi("");
    setUmur("");
    setRekomen(""); // Reset rekomendasi jika ada
  };

  // Kerangka dan Style
  return (
    <main
      style={{
        margin: "0 80px",
      }}
    >
      <section className="Title d-flex flex-column text-center mt-5">
        <h1
          style={{
            color: "#010101",
            textAlign: "center",
            fontFamily: "MODERNIZ",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: 900,
            lineHeight: "normal",
            letterSpacing: "24px",
          }}
        >
          NUTRIPLAN
        </h1>
        <p
          style={{
            color: "#010101",
            textAlign: "center",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "180%", // Atau "28.8px"
            letterSpacing: "0.8px",
            margin: "0 25%",
          }}
        >
          Website interaktif yang menghitung kalori harian Anda dan memberikan
          rekomendasi makanan, minuman, serta olahraga sesuai kebutuhan tubuh.
        </p>
      </section>

      <section className="Generate d-flex gap-5 mt-5">
        <div className="Gender">
          <h4
            className="TItleGender"
            style={{
              color: "#010101",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              fontVariant: "all-small-caps",
              letterSpacing: "1px",
            }}
          >
            PILIH JENIS KELAMIN
          </h4>
          <div className=" d-flex mt-3">
            <div
              className="Men d-flex align-items-center justify-content-center"
              style={{
                width: "100%", // Default penuh berdasarkan col
                maxWidth: "238px", // Lebar maksimum
                height: "70vh", // Tinggi fleksibel (50% dari viewport height)
                maxHeight: "376px", // Tinggi maksimum
                borderRadius: "8px", // Border radius
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Bayangan
                backgroundColor:
                  kelamin === "Laki-laki"
                    ? "#D1EBF9"
                    : hoverMan
                    ? "#BCE3F4"
                    : "#fff", //
                padding: "20px",
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onClick={() => setKelamin("Laki-laki")}
              onMouseEnter={() => setHoverMan(true)} // Hover effect start
              onMouseLeave={() => setHoverMan(false)} // Hover effect end Set gender to "Laki-laki" saat div ini diklik
            >
              <img
                src={iconmen}
                alt="men"
                style={{
                  width: "80%", // Default penuh berdasarkan col
                  height: "80%",
                }}
              ></img>
            </div>

            <div
              className="Woman d-flex align-items-center justify-content-center ms-3"
              style={{
                width: "100%", // Default penuh berdasarkan col
                maxWidth: "238px", // Lebar maksimum
                height: "70vh", // Tinggi fleksibel (50% dari viewport height)
                maxHeight: "376px", // Tinggi maksimum
                borderRadius: "8px", // Border radius
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Bayangan
                backgroundColor:
                  kelamin === "Perempuan"
                    ? "#FDE2EF"
                    : hoverWoman
                    ? "#F9B6D1"
                    : "#fff", // Background changes based on gender selection and hover
                padding: "20px",
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onClick={() => setKelamin("Perempuan")}
              onMouseEnter={() => setHoverWoman(true)} // Hover effect start
              onMouseLeave={() => setHoverWoman(false)} // Hover effect end
            >
              <img
                src={iconwoman}
                alt="woman"
                style={{
                  width: "80%", // Default penuh berdasarkan col
                  height: "80%",
                }}
              ></img>
            </div>
          </div>
        </div>

        {/* Input Data Berat Badan */}
        <div className="Input d-flex flex-column">
          <div className="containerInput d-flex gap-5">
            <div className="InputBB">
              <h4
                style={{
                  color: "#010101",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  fontVariant: "all-small-caps",
                  letterSpacing: "1px",
                }}
              >
                INPUT BERAT BADAN (kg)
              </h4>
              <input
                type="number"
                className="form-control"
                id="namaInput"
                placeholder="Masukkan Berat Badan"
                max="200"
                value={berat}
                onChange={(e) => setBerat(e.target.value)}
                style={{
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.15)",
                  padding: "20px",
                  textAlign: "center",
                  maxWidth: "400px", // Maksimal lebar box
                  margin: "0 auto", // Pusatkan box
                }}
              />
            </div>

            <div className="InputTB">
              <h4
                style={{
                  color: "#010101",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  fontVariant: "all-small-caps",
                  letterSpacing: "1px",
                }}
              >
                INPUT TINGGI BADAN (cm)
              </h4>
              <input
                type="number"
                className="form-control"
                id="namaInput"
                placeholder="Masukkan Tinggi Badan"
                max="200"
                value={tinggi}
                onChange={(e) => setTinggi(e.target.value)}
                style={{
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.15)",
                  padding: "20px",
                  textAlign: "center",
                  maxWidth: "400px", // Maksimal lebar box
                  margin: "0 auto", // Pusatkan box
                }}
              />
            </div>
          </div>

          <div className="containerInput d-flex gap-3 mt-3">
            <div className="InputU">
              <h4
                style={{
                  color: "#010101",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  fontVariant: "all-small-caps",
                  letterSpacing: "1px",
                }}
              >
                INPUT USIA ANDA (th)
              </h4>
              <input
                type="number"
                className="form-control"
                id="namaInput"
                placeholder="Masukkan Usia Anda"
                max="60"
                value={umur}
                onChange={(e) => setUmur(e.target.value)}
                style={{
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.15)",
                  padding: "20px",
                  textAlign: "center",
                  width: "100%",
                  maxWidth: "400px", // Maksimal lebar box,
                }}
              />
            </div>

            {/* Button Reset */}
            <button
              className="btn mt-3"
              style={{
                backgroundColor: "#fff",
                color: "white",
                fontWeight: 700,
              }}
              onClick={handleReset}
            >
              <img
                src={iconreset}
                alt="reset"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              ></img>
              <p
                style={{
                  color: "#2D5B3E",
                  fontWeight: 700,
                }}
              >
                RESET
              </p>
            </button>
          </div>

          {/* Button Kalkulasi */}
          <button
            className="btn mt-3"
            style={{
              height: "10%",
              backgroundColor: "#2D5B3E",
              color: "white",
              fontWeight: 700,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Bayangan
            }}
            onClick={handleKalkulasi}
          >
            Kalkulasi
          </button>

          {rekomendasi && (
            <div className="mt-3">
              <h4
                style={{
                  color: "#010101",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  fontVariant: "all-small-caps",
                  letterSpacing: "1px",
                }}
              >
                REKOMENDASI
              </h4>
              <div className="d-flex gap-5">
                <div>
                  <h4
                    style={{
                      color: "#010101",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      fontVariant: "all-small-caps",
                      letterSpacing: "1px",
                    }}
                  >
                    Olahraga
                  </h4>
                  <p
                    className="mt-3"
                    style={{
                      color: "#010101",
                      fontFamily: "MODERNIZ",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                    }}
                  >
                    {rekomendasi.sport}
                  </p>
                </div>

                <div
                  style={{
                    margin: "0 0 0 20%",
                  }}
                >
                  <h4
                    style={{
                      color: "#010101",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      fontVariant: "all-small-caps",
                      letterSpacing: "1px",
                    }}
                  >
                    Makanan
                  </h4>

                  <p
                    className="mt-3"
                    style={{
                      color: "#010101",
                      fontFamily: "MODERNIZ",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                    }}
                  >
                    {rekomendasi.food}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
