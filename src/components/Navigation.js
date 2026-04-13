import React from 'react';
import { Container } from 'react-bootstrap';

import Navbar from 'react-bootstrap/Navbar';

import logo from '../logo.png';

const Navigation = () => {
  return (
    <Navbar>
      <img
        alt="logo"
        src={logo}
        with="40"
        height="40"
        className="d-inline-block align-top mx-3"
      />
      <Navbar.Brand href="#">CHRISU ICO Crowdsale</Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;
