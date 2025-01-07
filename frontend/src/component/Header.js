import logo from "../asset/logo.svg";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="d-flex justify-content-center">
        <img
            src={logo}
            alt="contoh"
        />
    </header>
  );
};

export default Header;
