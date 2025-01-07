import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes dan Route
import Header from "./Header";
import Main from "./Main";
import Generator from "./Generator";
import News from "./News";
import Footer from "./Footer";
import MainNews from "../componentNews/NewsPage";
import FavoritPage from "../componentFavorite/FavoritPage"; // Import FavoritPage
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function MainPage() {
  return (
    <div>
      <Routes>
        {/* Rute untuk halaman utama yang menggunakan Header, Main, Generator, News, Footer */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Generator />
              <News />
              <Footer />
            </>
          }
        />

        {/* Rute untuk halaman Favorit tanpa komponen utama */}
        <Route path="/favoritapp" element={<FavoritPage />} />

        {/* Rute untuk halaman NewsApp tanpa komponen utama */}
        <Route path="/newsapp" element={<MainNews />} />
      </Routes>
    </div>
  );
}
