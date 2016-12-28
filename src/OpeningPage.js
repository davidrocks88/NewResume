import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import styles from './App.css';
import Hexagon from 'react-hexagon'

class OpeningPage extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	getHex() {
	    return (
	      <div className={styles.hexBig}>
	        <Hexagon 
	        style={{
	          stroke: '#bfffc4',
	          display: 'inline',
	          flex: 'center',
	        }}
	        backgroundImage="img/profile.jpg"
	        backgroundWidth = {600}
	        backgroundHeight={525}
	        />

	      </div>
	      );
  }

  getInfoBox() {
  	return (
  		<div className={styles.infoBox}>
  			<h1>All about me!!!</h1>
  			<p>All about me!!!</p>
  		</div>
  	);
  }

  render() {
  	    var hex = this.getHex();
  	    var infoBox = this.getInfoBox();
  	    return (
  	    	<div>
  	    	{hex}
  	    	{infoBox}
  	    	</div>
  	    );
  }
}

export default OpeningPage;