import React, { Component } from 'react';
import './Username.css';

const Usrname = (props) => {
	return (
		<div>
			<p>User name is <strong>{props.thename}</strong> and he is <strong>{props.age}</strong> years old.</p>
	    </div>
	    )
};

export default Usrname;