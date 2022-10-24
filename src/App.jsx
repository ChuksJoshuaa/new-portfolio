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
      duration: 1500,
      easing: "linear",
      once: true,
      mirror: true,
      offset: 120,
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
