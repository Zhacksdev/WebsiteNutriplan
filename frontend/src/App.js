// Kelas : SI-07-02
// Kelompok : 10
// Anggota Kelompok :
// Kelompok 10:
// 1. Muhammad Zacky Hafiansyah (102062430008) 
// 2. Ihtada Haqi Prasetyo (102062400060) 
// 3. Devina Arulyantani Venensia Agustin (102062400037) 
// 4. Rayindarari Damba Bijaksana (102062400028)


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Router
import NewsPage from './componentNews/NewsPage'; // NewsPage
import FavoritPage from './componentFavorite/FavoritPage';
import MainPage from './component/MainPage'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/newsapp" element={<NewsPage />} />
        <Route path="/favoritapp" element={<FavoritPage />} />
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
