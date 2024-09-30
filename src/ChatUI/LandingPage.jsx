import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="content d-flex justify-content-center align-items-center vh-100" style={{ background: 'linear-gradient(135deg, #1e3c72 0%, #2980b9 50%, #3498db 100%)' }}>
      <div className="info p-4 text-center">
        <div className="txt mb-4">
          <h2 className="text-center fw-bold text-white">¡Bienvenido! Selecciona alguna de estas opciones</h2>
        </div>
        <div className="buttons d-flex justify-content-center gap-3">
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/login')}>Iniciar sesión</button>
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/register')}>Registrarte</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
