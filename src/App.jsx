import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer, Sidebar } from "./components";
import { Home, About } from "./pages";
import { useSelector } from "react-redux";
import AOS from "aos";

const App = () => {
  const { isOpen } = useSelector((state) => state.data);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 0,
      offset: 120,
      easing: "ease",
      once: true,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Navbar />
      {isOpen && <Sidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
