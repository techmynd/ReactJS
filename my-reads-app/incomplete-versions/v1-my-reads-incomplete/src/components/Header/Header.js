import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	
  constructor() {
      super()
  }

	render() {
		return (
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
    );
  };
};
export default Header;