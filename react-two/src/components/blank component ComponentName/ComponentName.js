import React from 'react';
import './ComponentName.css';

const ComponentName = () => {
	return (

		<div className="mainClassName">

		</div>

	);
};
export default ComponentName;



// OR better one 

// import react and component 
import React, { Component } from 'react';
import './ComponentName.css';
// use class instead of default function
class ComponentName extends Component {
	render() {
		return (
			<div className="mainClassName">

		    </div>
		);
	};
};
export default About;