import { HashRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Sobrenos from "../pages/Sobrenos";
import Blog from "../pages/Blog";
import BlogArticle from "../pages/BlogArticle";
import Galeria from "../pages/Galeria";

function Rotas() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobrenos" element={<Sobrenos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/article" element={<BlogArticle/>} />
        <Route path="/galeria" element={<Galeria/>} />
      </Routes>
    </HashRouter>
  );
}

export default Rotas;
