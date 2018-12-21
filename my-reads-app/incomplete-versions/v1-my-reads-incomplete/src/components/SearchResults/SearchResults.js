import React, { Component } from 'react';
import './SearchResults.css';
import SearchBookBar from '../SearchBookBar/SearchBookBar';

class SearchResults extends Component {
	render() {
		return (
      <div>
        <SearchBookBar />
        <div className="search-results">
          <h2>Search Results</h2>
          <p>Please search from above...</p>
          <div className="list-books">
              <div className="search-books">
                <div className="search-books-results">
                  <ol className="books-grid">
                      
                  </ol>
                </div>
              </div>  
            </div>
        </div>
      </div>
    );
  };
};
export default SearchResults;