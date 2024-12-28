import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css"; // Archivo de estilos con metodología BEM

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 5000);

    return () => clearTimeout(timer); // Limpieza del temporizador
  }, [navigate]);

  return (
    <div className="access-view">
      <div className="content-container text-center d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="title display-4 mb-3">RELATOS DE PAPEL 📔</h1>
        <div className="subtitle">
          <p className="my-name">Por: Jefferson Rodríguez</p>

          Aquí podrás encontrar una gran selección de libros en formato físico y digital.
          <br />
          <strong>Serás redirigido automáticamente a la página principal en 5 segundos...</strong>
        </div>
      </div>
    </div>
  );
};

export default Landing;
