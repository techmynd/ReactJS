import React, { Component } from 'react';
import './UserInput.css';
import Usrname from '../Username/Username';
import Usrnm from '../Username/Usrnm';

class UserInput extends Component {
	render() {
		return (
			<div>
				<h2>User Input</h2>
                
                <br />
				
				<ul className="my-style-2">
					<li>Input is with inline style.</li>
					<li>This text has a class also but the styles are defined in same js file for class .my-style-2</li>
				</ul>

				<style>{'.my-style-2{color:red;}'}</style>

				<br />

				<h4>Output Components</h4>
				<p>I am outputting Header, Footer components in each page. These components can be output many times as much as you like by same call.</p>

				<br />
				
				<form className="form-inline">
				  <div className="form-group">
				    <label>Input</label>
				    <input type="text" className="form-control" id="" style={{margin: "0 10px 0 10px"}} />
				  </div>
				  <button type="submit" className="btn btn-default">Submit</button>
				</form>

				<br /><br />

				<h4>PROPS / Getting Name and Age from a Functional (Constant / FUnction Based) Component</h4>

				<Usrname thename="Max" age="28" />
				<Usrname thename="JD" age="22" />
				<Usrname thename="Ben" age="38" />

				<br />

				<h4>PROPS / Getting Name and Age from a Class Based Component</h4>

				<Usrnm namee="Allen" theage="8" />
				<Usrnm namee="Barry" theage="10" />
				<Usrnm namee="Jack" theage="25" />

			</div>
		);
	};
};

export default UserInput;