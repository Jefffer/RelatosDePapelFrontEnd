import React from 'react';
import "./Header.css"; 

const Header = ({ }) => {
  return (
    <header className="main-header d-flex justify-content-between align-items-center p-3">
      <h1 id="title">Relatos de Papel 📖</h1>
      <p>
        Aquí podrás encontrar una gran selección de libros en formato físico y
        digital.
      </p>
      
    </header>
  );
};

export default Header;