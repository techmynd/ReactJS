import React, { Component } from 'react';
import './SearchResults.css';
import SearchBookBar from '../SearchBookBar/SearchBookBar';
// import { getAll } from '../../Api/BooksAPI';
// import * as BooksAPI from '../../Api/BooksAPI'
// import Book from '../Book/Book';

export default class SearchResults extends Component {
  

  render() {

    const {state, searchedTxt, doSearch} = this.props;

		return (
      <div>
        <SearchBookBar ppSearchText={searchedTxt} ppHandleUpdate={doSearch} state={state} removeSearch={this.props.removeSearch} />
        <div className="search-results">
          <h2>Search Results</h2>
          {this.props.ppRenderSearchResults}
        </div>
      </div>
    );
  };
};
