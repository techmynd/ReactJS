import React, { Component } from 'react';
import './SearchBookBar.css';
import { Link } from "react-router-dom";

class SearchBookBar extends Component {
	render() {
		return (
      <div className="search-books-bar">
        <Link to="/"><button className="close-search">Close</button></Link>
        <div className="search-books-input-wrapper">
          {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
          */}
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