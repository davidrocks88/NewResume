import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import styles from './App.css';
import Hexagon from 'react-hexagon'

class OpeningPage extends Component {

	constructor(props) {
	  super(props);
	

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

  getMoreInfo() {
  	return(
  		<div className={styles.moreInfo}>
  			<div className={styles.hexMed}>
	  			<Hexagon 
		        style={{
		          stroke: '#000000',
		          strokeWidth: 1,
		          display: 'inline',
		          flex: 'center',
		          fill: '#bfffc4'
		        }} >
		        <text className={styles.hexMedText} x="27.5%" y="52.5%">Projects</text>

		        </Hexagon>
		    </div>
  			<div className={styles.hexMed}>
	  			<Hexagon 
		        style={{
		          stroke: '#000000',
		          strokeWidth: 1,
		          display: 'inline',
		          flex: 'center',
		          fill: '#bfffc4'
		        }} >
		        <text className={styles.hexMedText} x="34%" y="52.5%">Skills</text>

		        </Hexagon>
		    </div>
  			<div className={styles.hexMed}>
	  			<Hexagon 
		        style={{
		          stroke: '#000000',
		          strokeWidth: 1,
		          display: 'inline',
		          flex: 'center',
		          fill: '#bfffc4'
		        }} >
		        <text className={styles.hexMedText} x="22%" y="52.5%">Experience</text>

		        </Hexagon>
		    </div>
  			<div className={styles.hexMed}>
	  			<Hexagon 
		        style={{
		          stroke: '#000000',
		          strokeWidth: 1,
		          display: 'inline',
		          flex: 'center',
		          fill: '#bfffc4'
		        }} >
		        <text className={styles.hexMedText} x="27.5%" y="45.5%">Ongoing</text>
		        <text className={styles.hexMedText} x="27.5%" y="59.5%">Learning</text>

		        </Hexagon>
		    </div>
	  	</div>	
  	);
  }

  render() {
  	    var hex = this.getHex();
  	    var infoBox = this.getInfoBox();
  	    var moreInfo = this.getMoreInfo();

  	    return (
  	    	<div>
  	    	{hex}
  	    	{infoBox}
			{moreInfo}
  	    	</div>
  	    );
  }
}

export default OpeningPage;