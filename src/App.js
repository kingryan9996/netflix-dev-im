import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Navigation from "./components/Navigation";

import "./App.css";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
