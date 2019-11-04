// LIBS
import React from 'react'
import { Link } from 'react-router-dom'

//ASSETS
import '../../css/TopBar.css'
import logo from '../../img/logo.png'


class TopBar extends React.Component {

  handleSubmit = () =>{
      localStorage.clear();
      window.location.href = '/';
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-acs">
          <Link
            to="/home"
            className="navbar-brand"
          >
            <img
              src={logo}
              height="60"
              className="d-inline-block"
              alt="ACS Bienes Raices"
            />
          </Link>
          <p>Cuenta en linea: {localStorage.getItem("email")}</p>
          <button className="btn boton-azul" onClick={this.handleSubmit}>Cerrar sesión</button>
        </nav>
      </div>
    )
  }
}


export default TopBar
