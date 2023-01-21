import React, { useContext } from "react"
import { CartContext } from '../Context/Context';
import { NavLink } from "react-router-dom"
import '../Navbar/Navbar.css';

export const Navbar = () => {

  const { contador } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
            {/* <li className="nav-item">
              <NavLink className="nav-link active" to='/categoria/PRIMERO' >Primero</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to='/categoria/SEGUNDO'>Segundo</NavLink>
            </li> */}
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
            {/* <li className="nav-item">
              <NavLink className="nav-link active" to='/checkout'>Checkout</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;