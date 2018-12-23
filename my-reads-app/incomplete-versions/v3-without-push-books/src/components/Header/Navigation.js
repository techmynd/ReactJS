import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css';

class Navigation extends Component {

  render() {
		return (
      <div>
        <nav>
          <ul className="navBottom">
            <li><NavLink className="nav-link" activeClassName={"active"} exact={true} to="/">Home</NavLink></li>
            <li><NavLink className="nav-link" activeClassName={"active"} to="/currently-reading">Currently Reading</NavLink></li>
            <li><NavLink className="nav-link" activeClassName={"active"} to="/want-to-read">Want to Read</NavLink></li>
            <li><NavLink className="nav-link" activeClassName={"active"} to="/read">Read</NavLink></li>
          </ul>
        </nav>
      </div>
    );
  };
};
export default Navigation;