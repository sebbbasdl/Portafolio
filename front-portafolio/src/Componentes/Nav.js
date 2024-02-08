import React from "react";
import "./Nav.css"; // Asegúrate de cambiar esto al nombre correcto de tu archivo

class Nav extends React.Component {
  render() {
    return (
      <div className="contenedor-barra">
        <div className="barra-opciones">
          <h2 id="titulo">Sebastian de Leon Tenaz</h2>
        </div>
      </div>
    );
  }
}

export default Nav;
