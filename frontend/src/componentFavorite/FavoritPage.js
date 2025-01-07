import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import MainFavorit from "./MainFavorit"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function FavoritPage() {
  return (
    <div>
      <Header/>
      <MainFavorit/>
      <Footer/>
    </div>
  );
}
