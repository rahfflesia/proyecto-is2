import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./ChatUI/LandingPage"; // Ajusta la ruta según tu estructura de carpetas
import LoginPage from "./Form"; // Crea tu componente de página de inicio de sesión
import RegisterPage from "./RegisterForm"; // Crea tu componente de página de registro

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;

