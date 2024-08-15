import { HashRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Sobrenos from "../pages/Sobrenos";
import Blog from "../pages/Blog";

function Rotas() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobrenos" element={<Sobrenos />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </HashRouter>
  );
}

export default Rotas;
