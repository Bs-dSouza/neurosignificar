import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//components
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import PageTransition, { ScrollToTop } from "./components/PageTransition/PageTransition";
import Whatsapp from "./components/Whatsapp/Whatsapp";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Servico from "./pages/Servico/Servico";
import Contato from "./pages/Contato/Contato";
import Psicologia from "./pages/Psicologia/Psicologia";
import Fono from "./pages/Fonoaudiologia/Fono";
import PsiPedagogia from "./pages/PsicoPedagogia/PsiPedagogia";
import TerapiaOcupacional from "./pages/TerapiaOcupacional/TerapiaOcupacional";
import AvaliacaoNeuropsicologica from "./pages/AvaliacaoNeuropsicologica/AvaliacaoNeuropsicologica";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <ScrollToTop />
        <div className="container">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/servico" element={<Servico />} />
              <Route path="/psicologia" element={<Psicologia />} />
              <Route path="/fonoaudiologia" element={<Fono />} />
              <Route path="/psicopedagogia" element={<PsiPedagogia />} />
              <Route path="/terapia-ocupacional" element={<TerapiaOcupacional />} />
              <Route path="/avaliacao-neuropsicologica" element={<AvaliacaoNeuropsicologica />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </PageTransition>
        </div>
        <Footer />
        <Whatsapp />
      </HashRouter>
    </div>
  );
}

export default App;
