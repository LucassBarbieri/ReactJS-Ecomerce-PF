import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../Context/Context";
import '../Navbar/Navbar.css';

export const Navbar = () => {

  const { contador } = useContext(CartContext);

  return (
    <>
      <section className="navegation">
        <div className="container-fluid px-md-5">
          <div className="row justify-content-between">
            <div className="col-md-8 order-md-last">
              <div className="row">
                <div className="col-md-6 text-center">
                  <NavLink className="navbar-brand" to={'/'}>E-Commerce  <span>Proyecto final: React JS</span></NavLink>
                </div>
                {/* <div className="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                  <form action="#" className="searchform order-lg-last">
                    <div className="form-group d-flex">
                      <input type="text" className="form-control pl-3" placeholder="Search"/>
                        <button type="submit" placeholder="" className="form-control search"><span className="fa fa-search"></span></button>
                    </div>
                  </form>
                </div> */}
              </div>
            </div>
            {/* <div className="col-md-4 d-flex">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
                </p>
              </div>
            </div> */}
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fa fa-bars"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav m-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link active" to={'/'}>Inicio</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categorias</span>
                  <div className="dropdown-menu" aria-labelledby="dropdown04">
                    <NavLink className="dropdown-item" to={'/categoria/producto'}>Productos</NavLink>
                    <NavLink className="dropdown-item" to={'/categoria/servicio'}>Segundo</NavLink>
                  </div>
                </li>
                <li className="nav-item"><NavLink className="nav-link active" to={'/cart'}>Carrito ({contador})</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navbar;