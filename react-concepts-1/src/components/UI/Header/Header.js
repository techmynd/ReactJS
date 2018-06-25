import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
		    <div className="header clearfix">
	        <nav>
	          <ul className="nav nav-pills pull-right">
	                <li><NavLink activeClassName={"active"} exact={true} to="/">Home</NavLink></li>
	                <li><NavLink activeClassName={"active"} to="/user-input">User Input</NavLink></li>
	                <li><NavLink activeClassName={"active"} to="/user-output">User Output</NavLink></li>
	                <li><NavLink activeClassName={"active"} to="/simple-binding">Simple Binding</NavLink></li>
	           </ul>
	        </nav>
	        <h3 className="text-muted text-left"><NavLink activeClassName={"active"} exact={true} to="/">React Assignment</NavLink></h3>
	      </div>
		);
	};
};
export default Header;