import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AccessView.css"; // Archivo de estilos con metodología BEM

const AccessView = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 5000);

    return () => clearTimeout(timer); // Limpieza del temporizador
  }, [navigate]);

  return (
    <div className="access-view">
      <h1 className="access-view__title">Bienvenido a Relatos de Papel</h1>
      <p className="access-view__subtitle">
        Explora nuestra colección de libros. Serás redirigido automáticamente a la página principal en 5 segundos.
      </p>
    </div>
  );
};

export default AccessView;
