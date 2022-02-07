
import React from 'react';

import { NavLink } from 'react-router-dom';

import './Header.css'

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-bg  ">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand ">
                    <img style={{ backgroundColor: "white" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiB0pKc02jdbhtrRDMNYYVEUdojxjNepLZUAIu8xH1ILJRFOdPIKLs0tUkzmmvogeKKPo&usqp=CAU" className="rounded-circle  " height="60" width="60" alt="" />
                    <span className="ms-3 ">
                        <strong>
                            <em style={{ color: "white" }}>CAMPAIGN WORLD</em>
                        </strong>
                    </span>
                </NavLink>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">





                    <div className="navbar-nav ms-5 ps-5">
                        <NavLink to="/home" className="nav-item nav-link active " style={{ color: "white", fontSize: "20px" }}>Home</NavLink>
                        <NavLink to="/add" className="nav-item nav-link active " style={{ color: "white", fontSize: "20px" }}>Add Campaign</NavLink>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Header;