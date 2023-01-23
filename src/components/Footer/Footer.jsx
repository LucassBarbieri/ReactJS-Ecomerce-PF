import React from 'react'
import { NavLink } from 'reactstrap';

export const Footer = () => {
    return (
        <>
            <section className="navegation">
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item"><NavLink className="nav-link">Un proyecto de: Lucas Barbieri </NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Footer;