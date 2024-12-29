import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  // Contador
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 115000);

    // Para la limpieza del temporizador
    return () => clearTimeout(timer); 
  }, [navigate]);

  // Actualizador del contador en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Para realizar la limpieza del intervalo
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="access-view">
      <div className="content-container text-center d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="title display-4 mb-3">RELATOS DE PAPEL 📔</h1>
        <div className="subtitle">
          {/* <p className="my-name">Por: Jefferson Rodríguez</p> */}
          <a id="my-name" href="https://github.com/Jefffer" target="_blank">
          {" "}
          POR JEFFERSON RODRIGUEZ {" "} 
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            alt="GitHub"
          />
        </a>
        <br />
        <br />
          
          <strong>
            Serás redirigido a la página principal en <span id="countdown">{countdown}</span> segundos...
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Landing;
