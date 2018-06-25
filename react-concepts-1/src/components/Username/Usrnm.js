import React, { Component } from 'react';
import './Usrnm.css';

class Usrnm extends Component {
	render() {
		return (
		<div>
		<p>User name is <strong>{this.props.namee}</strong> and he is <strong>{this.props.theage}</strong> years old.</p>
		</div>
		);
	};
};

export default Usrnm;