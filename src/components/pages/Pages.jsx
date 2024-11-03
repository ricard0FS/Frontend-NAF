import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Routes,
} from "react-router-dom";
import Header from "../common/header/Header";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import ScrollTop from "../Utils/Scroll/ScrollTop";
import Hero from "../hero/Hero";
import ServicesPage from "../services/Services";
import Support from "../support/Support";
import Partners from "../partners/Partners";
import Policies from "../policies/policies";
import Contact from "../contact/Contact";

const Pages = () => {
  const location = useLocation();

  return (
    <>
      <ScrollTop />
      <Header />
      {location.pathname === "/" && <Hero />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sobre" element={<About />} />
        <Route exact path="/serviços" element={<ServicesPage />} />
        <Route exact path="/atendimento" element={<Support />} />
        <Route exact path="/parceiros" element={<Partners />} />
        <Route exact path="/policies" element={<Policies />} />
        <Route exact path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Pages />
    </Router>
  );
};

export default App;
