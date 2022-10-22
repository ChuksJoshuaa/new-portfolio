import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
