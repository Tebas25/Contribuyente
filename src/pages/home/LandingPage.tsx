import { useNavigate } from "react-router-dom";
import "../../styles/landingPage.css";

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-container">
      <div className="landing-bg" />
      <div className="landing-content">
        <img src="/fonts/logoinicial.svg" alt="Logo Ecuador" className="landing-logo" />
        <h2>¡Bienvenido a la Plataforma de Consulta Ciudadana!</h2>
        <p>
          Consulta <strong>contribuyentes</strong>, <strong>vehículos</strong> y <strong>puntos de licencia</strong> de forma rápida y sencilla.
        </p>
        <p className="landing-instruccion">
          Presiona el botón para continuar.
        </p>
        <button
          className="btn-landing"
          onClick={() => navigate("/contribuyente")}
        >
          Empezar consulta
        </button>
      </div>
    </div>
  );
};
