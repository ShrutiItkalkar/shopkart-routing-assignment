import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// TODO: Import About
import About from "./pages/About";

// TODO: Import Contact
import Contact from "./pages/Contact";
// TODO: Import React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
