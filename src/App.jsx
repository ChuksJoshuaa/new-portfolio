import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer, Sidebar } from "./components";
import { Home, About } from "./pages";
import { useSelector } from "react-redux";

const App = () => {
  const { isOpen } = useSelector((state) => state.data);
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
