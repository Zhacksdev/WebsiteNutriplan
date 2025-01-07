import logofooter from "../asset/logo-footer.svg";
import fotojeki from "../asset/contributor/jeki.jpg";
import fototyo from "../asset/contributor/tyo.jpg";
import fotodamba from "../asset/contributor/damba.jpg";
import fotodev from "../asset/contributor/devina.jpg";

const Footer = () => {
  return (
    <section
      className="footer d-flex align-content-center"
      style={{
        backgroundColor: "#2D5B3E",
      }}
    >
      <div
        className="container d-flex align-content-center"
        style={{
          margin: "0 60px",
        }}
      >
        <img
          src={logofooter}
          alt="footer-logo"
          style={{ width: "80px", height: "80px" }}
        ></img>

        <div
          className="container-profile d-flex align-content-center justify-content-center align-items-center gap-4"
          style={{
            margin: "0 60px 0 60%",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              backgroundImage: `url(${fotodev})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              backgroundImage: `url(${fotojeki})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              backgroundImage: `url(${fototyo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              backgroundImage: `url(${fotodamba})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <h4
            style={{
              color: "#FDFFF7",
              fontFamily: "MODERNIZ",
              fontSize: "8px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              letterSpacing: "7.8px",
            }}
          >
            CONTRIBUTOR
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Footer;
