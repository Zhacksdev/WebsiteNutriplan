import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import background from "../asset/main-image.png";
import iconmale from "../asset/icon/icon-male.svg";
import iconheight from "../asset/icon/icon-height.svg";
import iconweight from "../asset/icon/icon-weight.svg";
import iconage from "../asset/icon/icon-age.svg";

const Main = () => {
  return (
    <main className="mx-5">
      <section
        className="main-image container-fluid p-0 d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          borderRadius: "30px",
          textAlign: "center", // Optional, to center the text horizontally
        }}
      >
        <h1
          style={{
            color: "#FFF", // Warna teks putih
            textAlign: "center", // Teks di tengah
            fontFamily: "MODERNIZ", // Menggunakan font MODERNIZ
            fontSize: "128px", // Ukuran font besar
            fontStyle: "normal", // Gaya font normal
            fontWeight: 900, // Ketebalan font sangat tebal
            letterSpacing: "40px",
            opacity: 0.5,
          }}
        >
          HEALTH
        </h1>
        <h4
          style={{
            color: "#FFF", // Warna teks putih
            textAlign: "center", // Teks rata tengah
            fontFamily: "Segoe UI", // Font Montserrat
            fontSize: "18px", // Ukuran font 20px
            fontStyle: "normal", // Gaya font normal
            fontWeight: 600, // Ketebalan font semi-bold
            lineHeight: "normal", // Tinggi baris default
            letterSpacing: "12px", // Jarak antar huruf
          }}
        >
          Start loving yourself with a healthy life.
        </h4>
      </section>

      <section className="How To Use mx-5 d-flex justify-content-center">
        <div
          className="Title col-12 col-md-6 col-lg-4 d-flex align-items-center p-5"
          style={{
            width: "80%", // 100% dari lebar kontainer
            height: "200px", // Tinggi tetap
            backgroundColor: "white",
            marginTop: "-10%",
            borderRadius: "20px",
            boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.15)",
          }}
        >
          <h4
            style={{
              color: "#010101",
              fontFamily: "MODERNIZ",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 900,
              lineHeight: "normal",
              letterSpacing: "14.4px",
            }}
          >
            HOW <br />
            TO <br />
            USE <br />
          </h4>

          <div
            className="icon-container d-flex"
            style={{
              marginLeft: "15%",
            }}
          >
            <div className="icon d-flex flex-column justify-content-center text-center me-lg-5">
              <h4
                style={{
                  color: "#010101",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  letterSpacing: "0.6px",
                }}
              >
                Input
              </h4>
              <img
                src={iconweight}
                alt="weight"
                style={{
                  width: "80px" /* Atur ukuran gambar agar konsisten */,
                  height: "80px",
                  margin: "10px 0",
                }}
              ></img>
              <h4
                style={{
                  color: "#010101",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  letterSpacing: "0.6px",
                }}
              >
                BERAT BADAN
              </h4>
            </div>

            <div className="icon d-flex flex-column justify-content-center text-center me-lg-5">
              <h4
                style={{
                  color: "#010101",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  letterSpacing: "0.6px",
                }}
              >
                Input
              </h4>
              <img
                src={iconheight}
                alt="height"
                style={{
                  width: "80px" /* Atur ukuran gambar agar konsisten */,
                  height: "80px",
                  margin: "10px 0",
                }}
              ></img>
              <h4
                style={{
                  color: "#010101",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  letterSpacing: "0.6px",
                }}
              >
                TINGGI BADAN
              </h4>
            </div>

            <div className="icon d-flex flex-column justify-content-center text-center me-lg-5">
              <h4
                style={{
                  color: "#010101",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  letterSpacing: "0.6px",
                }}
              >
                Input
              </h4>
              <img
                src={iconmale}
                alt="male"
                style={{
                  width: "80px" /* Atur ukuran gambar agar konsisten */,
                  height: "80px",
                  margin: "10px 0",
                }}
              ></img>
              <h4
                style={{
                  color: "#010101",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  letterSpacing: "0.6px",
                }}
              >
                JENIS KELAMIN
              </h4>
            </div>

            <div className="icon d-flex flex-column justify-content-center text-center">
              <h4
                style={{
                  color: "#010101",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  letterSpacing: "0.6px",
                }}
              >
                Input
              </h4>
              <img
                src={iconage}
                alt="age"
                style={{
                  width: "80px" /* Atur ukuran gambar agar konsisten */,
                  height: "80px",
                  margin: "10px 0",
                }}
              ></img>
              <h4
                style={{
                  color: "#010101",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  letterSpacing: "0.6px",
                }}
              >
                USIA ANDA
              </h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
