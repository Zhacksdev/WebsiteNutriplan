import React from "react";
import { Route, Routes } from "react-router-dom"; // Tambahkan Routes dan Route
import Header from "../component/Header";
import Footer from "../component/Footer";
import MainNews from "./MainNews";
import FavoritPage from "../componentFavorite/FavoritPage"; // Import FavoritPage
import MainPage from "../component/MainPage";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function NewsPage() {
  return (
<div>
      <Routes>
        {/* Rute untuk halaman utama yang menggunakan Header, Main, Generator, News, Footer */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <MainNews/>
              <Footer />
            </>
          }
        />

        {/* Rute untuk halaman Favorit tanpa komponen utama */}
        <Route path="/favoritapp" element={<FavoritPage />} />

        {/* Rute untuk halaman NewsApp tanpa komponen utama */}
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}
