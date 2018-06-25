import React, { Component } from 'react';
import './UserOutput.css';
import Usrbind from '../Username/Usrbind';

class UserOutput extends Component {

	state = {
		users: [
			{username: 'Max', userage: 28}
		]
	};

	nameChangedHandler = (event) => {
		this.setState({
			users: [
				{username: event.target.value, userage: 28}
			]
		});
	};

	render() {
		return (
			<div>
				<h2>User Output</h2>
				<p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
				 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
				 Lorem ipsum dolor sit amet</p>
				<p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
				 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
				 Lorem ipsum dolor sit amet</p>

				 <br /><br />

				 {/* <Usrbind username="Max" userage="28" /> */}
				  <Usrbind username={this.state.users[0].username} userage={this.state.users[0].userage} changed={this.nameChangedHandler} /> 

			</div>
		);
	};
};
export default UserOutput;