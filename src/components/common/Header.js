import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = () => {
    return(
        <Navbar style = {{margin : '20px'}}>
    <Navbar.Header>
        {/* <Nav>
       
        </Nav> */}
        <Navbar.Brand>
        <a href="#brand" style={{fontSize:"30px", color: "#4d4d4d"}}>ProLytics</a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav pullRight>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {"  |  "}
        <IndexLink to="/professional" activeClassName="active">Professional</IndexLink>
            {"  |  "}
            <Link to="/fantasy" activeClassName="active">Fantasy</Link>
            {"  |  "}
                        <Link to="/courses" activeClassName="active">Login</Link>
            {"  |  "}
            <Link to="/about" activeClassName="active">SignUp</Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    );
};

export default Header;