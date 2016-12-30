import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import styles from './App.css';
import Hexagon from 'react-hexagon'
import OpeningPage from './OpeningPage.js'
import Projects from './Projects.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      txt: 'zero', 
      content: <OpeningPage />
              };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.getFooter = this.getFooter.bind(this);
  }

  getText() {
    return (
      <div> {this.state.txt} </div>
    );
  }
  getFooter() {
      return(
        <div className={styles.moreInfo}>
          <div className={styles.hexMed}
              onClick={this.handleTextChange('Projects')}>
            <Hexagon 
              style={{
                stroke: '#000000',
                strokeWidth: 1,
                display: 'inline',
                flex: 'center',
                fill: '#66CCFF',
              }} 
              href="#"
              >
              <text href="#" className={styles.hexMedText} x="27.5%" y="52.5%">Projects</text>

              </Hexagon>
          </div>
          <div className={styles.hexMed} onClick={this.handleTextChange('Skills')}>
            <Hexagon 
              style={{
                stroke: '#000000',
                strokeWidth: 1,
                display: 'inline',
                flex: 'center',
                fill: '#66CCFF',
              }} 
              href="#"
              >

              <text href="#" className={styles.hexMedText} x="34%" y="52.5%">Skills</text>

              </Hexagon>
          </div>
          <div className={styles.hexMed} onClick={this.handleTextChange('Experience')}>
            <Hexagon 
              style={{
                stroke: '#000000',
                strokeWidth: 1,
                display: 'inline',
                flex: 'center',
                fill: '#66CCFF',
              }} 
              href="#"
              >

              <text href="#" className={styles.hexMedText} x="22%" y="52.5%">Experience</text>

              </Hexagon>
          </div>
          <div className={styles.hexMed} onClick={this.handleTextChange('Ongoing Learning')}>
            <Hexagon 
              style={{
                stroke: '#000000',
                strokeWidth: 1,
                display: 'inline',
                flex: 'center',
                fill: '#66CCFF',
              }} 
              href="#"
              >

              <text href="#" className={styles.hexMedText} x="27.5%" y="45.5%">Ongoing</text>
              <text href="#" className={styles.hexMedText} x="27.5%" y="59.5%">Learning</text>

              </Hexagon>
          </div>
        </div>  
      );
    }

  handleTextChange(e) {

    console.log(e);

    if(e == 'Projects') {
      this.setState({
        content: <Projects />
      })
    } else if(e == 'David Bernstein') {
      this.setState({
        content: <OpeningPage />
      })
    }
  }
  

  render() {
    // var footer = this.getFooter();
    var content = this.state.content;
    return (
      <div>
        <Navbar className={styles.navBar}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" onClick={() => {this.handleTextChange('David Bernstein')}}>David Bernstein</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#" onClick={() => {this.handleTextChange('Projects')}}>Projects</NavItem>
            <NavItem eventKey={2} href="#" onClick={() => {this.handleTextChange('Skills')}}>Skills</NavItem>
            <NavItem eventKey={3} href="#" onClick={() => {this.handleTextChange('Experience')}}>Experience</NavItem>
            <NavItem eventKey={4} href="#" onClick={() => {this.handleTextChange('Ongoing')}}>Ongoing Learning</NavItem>
            <NavItem eventKey={5} href="#" onClick={() => {this.handleTextChange('Resume')}}>Resume</NavItem>            
          </Nav>
        </Navbar>
        {content}
        <div className={styles.moreInfo}>
          <div className={styles.hexMed}
              onClick={() => {this.handleTextChange('Projects')}}>
            <Hexagon 
              style={{
                stroke: '#000000',
                strokeWidth: 1,
                display: 'inline',
                flex: 'center',
                fill: '#66CCFF',
              }} 
              href="#"
              >
              <text href="#" className={styles.hexMedText} x="27.5%" y="52.5%">Projects</text>

              </Hexagon>
          </div>
          <div className={styles.hexMed} onClick={() => {this.handleTextChange('Skills')}}>
            <Hexagon 
              style={{
                stroke: '#000000',
                strokeWidth: 1,
                display: 'inline',
                flex: 'center',
                fill: '#66CCFF',
              }} 
              href="#"
              >

              <text href="#" className={styles.hexMedText} x="34%" y="52.5%">Skills</text>

              </Hexagon>
          </div>
          <div className={styles.hexMed} onClick={() => {this.handleTextChange('Experience')}}>
            <Hexagon 
              style={{
                stroke: '#000000',
                strokeWidth: 1,
                display: 'inline',
                flex: 'center',
                fill: '#66CCFF',
              }} 
              href="#"
              >

              <text href="#" className={styles.hexMedText} x="22%" y="52.5%">Experience</text>

              </Hexagon>
          </div>
          <div className={styles.hexMed} onClick={() => {this.handleTextChange('Ongoing Learning')}}>
            <Hexagon 
              style={{
                stroke: '#000000',
                strokeWidth: 1,
                display: 'inline',
                flex: 'center',
                fill: '#66CCFF',
              }} 
              href="#"
              >

              <text href="#" className={styles.hexMedText} x="27.5%" y="45.5%">Ongoing</text>
              <text href="#" className={styles.hexMedText} x="27.5%" y="59.5%">Learning</text>

              </Hexagon>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;