import { HashRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Sobrenos from "../pages/Sobrenos";
import Blog from "../pages/Blog";
import BlogArticle1 from "../pages/articles/governancaepuc";
import BlogArticle2 from "../pages/articles/direitoshumanos";
import Galeria from "../pages/Galeria";
import BlogArticle3 from "../pages/articles/cobrancadetributos";

function Rotas() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobrenos" element={<Sobrenos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/article1" element={<BlogArticle1/>} />
        <Route path="/blog/article2" element={<BlogArticle2/>} />
        <Route path="/blog/article3" element={<BlogArticle3/>} />
        <Route path="/galeria" element={<Galeria/>} />
      </Routes>
    </HashRouter>
  );
}

export default Rotas;
