import React, { Component } from 'react';
import './SearchBookBar.css';
import { Link } from "react-router-dom";

class SearchBookBar extends Component {
	render() {
		return (
      <div className="search-books-bar">
        <Link to="/"><button className="close-search">Close</button></Link>
        <div className="search-books-input-wrapper">
          <input 
            type="text" 
            placeholder="Search by title or author" 
            value={this.props.ppSearchText} 
            onChange={(event) => this.props.ppHandleUpdate(event)}
          />
        </div>

     </div>
    );
  };
};
export default SearchBookBar;