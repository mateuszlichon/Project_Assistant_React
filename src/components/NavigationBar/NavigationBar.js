import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <a className="navbar-brand" href="">Project Assistant</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink to='/user/' className="nav-link">Panel użytkownika</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/manager/' className="nav-link">Panel administratora</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)

export default navigationBar;