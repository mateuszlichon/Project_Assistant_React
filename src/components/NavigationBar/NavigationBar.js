import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './NavigationBar.css';

const navigationBar = () => (
    <Navbar inverse collapseOnSelect id="main-navigation-bar">
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#brand">Project Assistant</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href='/user/'>
                    Panel użytkownika
      </NavItem>
                <NavItem eventKey={2} href='/manager/'>
                    Panel administratora
      </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default navigationBar;