import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import styles from './App.css';
import Hexagon from 'react-hexagon'
import OpeningPage from './OpeningPage.js'

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {txt: 'zero'};

  }

  getText() {
    return (
      <div> {this.state.txt} </div>
    );
  }

  

  render() {
    var text = this.getText();
    return (
      <div>
        <Navbar className={styles.navBar}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">David Bernstein</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem className = {styles.navItem} onClick={() => this.setState({txt: 'one'})} eventKey={1} href="#">Projects</NavItem>
            <NavItem eventKey={2} href="#">Skills</NavItem>
            <NavItem eventKey={3} href="#">Experience</NavItem>
            <NavItem eventKey={4} href="#">Ongoing Learning</NavItem>
            <NavItem eventKey={4} href="#">Resume</NavItem>            
          </Nav>
        </Navbar>
        <OpeningPage />
      </div>
    );
  }
}

export default App;