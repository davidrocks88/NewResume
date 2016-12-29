import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import styles from './App.css';
import Hexagon from 'react-hexagon'

class OpeningPage extends Component {

	constructor(props) {
	  super(props);
	
	  this.getHex = this.getHex.bind(this);
	  this.getInfoBox = this.getInfoBox.bind(this);
	  this.getMoreInfo = this.getMoreInfo.bind(this)
	}

	getHex() {
	    return (
	      <div className={styles.hexBig}>
	        <Hexagon 
	        style={{
	          stroke: '#66CCFF',
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
  			<h1 style={{
  				marginBottom: '-2.5%',
  				fontSize: '5em'
  			}}>David Bernstein</h1>
  			<h2 style={{
  				fontSize: '4em',
  				fontStyle: 'italic'
  			}}> I am a... </h2>
  			<li style={{
  				fontSize: '2em',
  				textAlign: 'left'
  			}}>Tufts 2017, Computer Science and Biomedical Engineering</li>
  			<li style={{
  				fontSize: '2em',
  				textAlign: 'left'
  			}}>Full Stack Software Engineer</li>
  			<li style={{
  				fontSize: '2em',
  				textAlign: 'left',
  				paddingLeft: '2em',
  				listStyle: 'none'
  			}}>Web, Mobile, and Wearables</li>
  			<li style={{
  				fontSize: '2em',
  				textAlign: 'left'
  			}}>Life-long Learner</li>
  			<br />
  			 <li style={{
  				fontSize: '2em',
  				textAlign: 'left',
  				listStyle: 'none'
  			}}>See my <a href="http://www.linkedin.com/in/dbernstein7"><em>LinkedIn</em></a></li>
  			 <li style={{
  				fontSize: '2em',
  				textAlign: 'left',
  				listStyle: 'none'
  			}}>See my <a href="http://www.github.com/davidrocks88"><em>Github</em></a></li>
  			<li style={{
  				fontSize: '2em',
  				textAlign: 'left',
  				listStyle: 'none'
  			}}> <a href="mailto:david.bernstein@tufts.edu"><em>Contact Me</em></a></li>
  		</div>
  	);
  }

  getMoreInfo() {
  	return(
  		<div className={styles.moreInfo}>
  			<div className={styles.hexMed}
		        onClick={() => this.props.handler('Projects')}>
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
  			<div className={styles.hexMed} onClick={() => this.props.handler('Skills')}>
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
  			<div className={styles.hexMed} onClick={() => this.props.handler('Experience')}>
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
  			<div className={styles.hexMed} onClick={() => this.props.handler('Ongoing Learning')}>
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