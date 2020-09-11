import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Magiclogo from '../images/Themlogo.png';


const FirstDiv = () =>{
    return(
        <div className="ui fluid container" style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,33,121,1) 27%, rgba(0,140,255,1) 100%)", height: "100px"}}>
            <div className="ui fluid container">
                <Navbar variant="light" className="justify-content-between">
                    <Navbar.Brand href="">
                        <img src={Magiclogo} alt="magician logo" style={{marginTop:"2px",height:"80px", width:"170px"}}/>
                    </Navbar.Brand>
                    <Form inline justify="flex-end" style={{marginTop:"2px"}}>
                        <FormControl type="text" placeholder="Search" className="mr-2" size="lg" style={{height:"70px", width:"500px"}}/>
                        <Button variant="info" size="lg" style={{height:"70px", width:"200px"}}><h3>Search</h3></Button>
                    </Form>
                </Navbar>
            </div>
        </div>
    );
};

export default FirstDiv;