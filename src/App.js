import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import styles from './App.css';
import Hexagon from 'react-hexagon'
import OpeningPage from './OpeningPage.js'


class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {txt: 'zero'};
    this.handleTextChange = this.handleTextChange.bind(this);

  }

  getText() {
    return (
      <div> {this.state.txt} </div>
    );
  }
  handleTextChange(e) {
    var newText = e;
    if(e.type === 'click') {
      newText = e.target.innerHTML;
    }
    this.setState({
      txt: newText
    });

  }
  

  render() {
    const text = this.state.txt;
    return (
      <div>
        <Navbar className={styles.navBar}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">{text}</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#" onClick={this.handleTextChange}>Projects</NavItem>
            <NavItem eventKey={2} href="#" onClick={this.handleTextChange}>Skills</NavItem>
            <NavItem eventKey={3} href="#" onClick={this.handleTextChange}>Experience</NavItem>
            <NavItem eventKey={4} href="#" onClick={this.handleTextChange}>Ongoing Learning</NavItem>
            <NavItem eventKey={5} href="#" onClick={this.handleTextChange}>Resume</NavItem>            
          </Nav>
        </Navbar>
        <OpeningPage 
          handler={this.handleTextChange}/>
      </div>
    );
  }
}

export default App;