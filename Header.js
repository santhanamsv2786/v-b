import { Button, Col, Row } from 'react-bootstrap';
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='text-center first'>
      <h1 className='mt-5'> Workers Information</h1>
      <Row>
        <Col>
        <Button className='btt'><Link to="Registration">Register</Link></Button> <></>
        <Button className='btt'><Link to="detail">View Details</Link></Button> <></>
        {/* <Button className='btt'><Link to="detail">Login</Link></Button> */}
        </Col>
      </Row>
      
      
    </div>
  );
}

export default Header;
