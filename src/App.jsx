import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;