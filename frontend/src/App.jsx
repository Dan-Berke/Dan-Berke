// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import Documentation from "./pages/Documentation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
