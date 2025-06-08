import { Outlet, useNavigate } from 'react-router-dom';
import '../styles/layout.css';

export const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="layout">
      {/* Encabezado */}
      <header className="header">
        <div className="header-left">
          <span
            className="icon-home home-icon"
            onClick={() => navigate('/')}
            title="Volver a inicio"
            style={{ cursor: "pointer" }}
          />
        </div>
        <h1 className="title">Sistema de identificación de contribuyente</h1>
        <div className="header-right" />
      </header>

      {/* Contenido central */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};
