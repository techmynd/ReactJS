import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
// import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

// ReactStrap or ReactBootstrap also do not exactly follow bootstarp classes so i am using custom JS here and regular bootstarp CSS
// Also ReactStrap 'NavLink' import conflicts with react-router-dom's 'NavLink' import and react-router-dom is needed for routing

class Header extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			shown: false,
		}
	}
	
	toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}
	
	render() {

		var shown = {
			display: this.state.shown ? "block" : "none"
		};
		

		return (
		    <div className="header clearfix">

				<nav className="navbar navbar-expand-lg navbar-light bg-light">
				
				<NavLink className="logo-link" exact={true} to="/"><img src={logo} alt="React App" /></NavLink>
				
				<button onClick={this.toggle.bind(this)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

					<div className="collapse navbar-collapse" id="" style={ shown }>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<NavLink className="nav-link" activeClassName={"active"} exact={true} to="/">Home</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" activeClassName={"active"} to="/products/">Products</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" activeClassName={"active"} to="/apis/">APIs</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" activeClassName={"active"} to="/about/">About</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" activeClassName={"active"} to="/contact/">Contact</NavLink>
							</li>
							
						</ul>
					</div>
				</nav>
	        
			{/* <nav>
			  <ul className="nav nav-pills pull-right">
	                <li><NavLink className="nav-link" activeClassName={"active"} exact={true} to="/" href="#">Home</NavLink></li>
                    <li><NavLink className="nav-link" activeClassName={"active"} to="/products/" href="#">Products</NavLink></li>
                    <li><NavLink className="nav-link" activeClassName={"active"} to="/apis/" href="#">APIs</NavLink></li>
	                <li><NavLink className="nav-link" activeClassName={"active"} to="/about/" href="#">About</NavLink></li>
	                <li><NavLink className="nav-link" activeClassName={"active"} to="/contact/" href="#">Contact</NavLink></li>
	           </ul>
	        </nav> */}

	      </div>
		);
	};
};
export default Header;