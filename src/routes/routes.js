import { HashRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Sobrenos from "../pages/Sobrenos";

function Rotas() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobrenos" element={<Sobrenos />} />
      </Routes>
    </HashRouter>
  );
}

export default Rotas;
