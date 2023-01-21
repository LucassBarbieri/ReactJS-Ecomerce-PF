import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../Context/Context";
import '../Navbar/Navbar.css';

export const Navbar = () => {

  const { contador } = useContext(CartContext);

  return (
    <>

      <nav className="navbar-container navbar navbar-expand-lg ftco_navbar ftco-navbar-light">
        <div className="container">
          E-Commerce - PF
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fa fa-bars"></span> Menu
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto mr-md-3">
              <li className="nav-item active">
                <NavLink className="nav-link active" to={'/'}>Inicio</NavLink>
              </li>
              <li className="dropdown nav-item d-md-flex align-items-center">
                <div class="dropdown-toggle nav-link d-flex align-items-center justify-content-center p-0" id="dropdown04" data-toggle="dropdown" aria-expanded="false">
                  Categorias
                </div>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown04">
                  <NavLink className="dropdown-item" to={'/categoria/PRIMERO'} >Primero</NavLink>
                  <NavLink className="dropdown-item" to={'/categoria/SEGUNDO'}>Segundo</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to={'/cart'}>Carrito ({contador})</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1 className="navbar-brand">SHOP ONLINE</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to='/'>Inicio</NavLink>
              </li>
              <li className="nav-item dropdown">
                <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </div>
                <ul className="dropdown-menu">
                  <NavLink className="nav-link active" to='/categoria/PRIMERO' >Primero</NavLink>
                  <NavLink className="nav-link active" to='/categoria/SEGUNDO'>Segundo</NavLink>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to='/cart'>Carrito ({contador})</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  )
}

export default Navbar;