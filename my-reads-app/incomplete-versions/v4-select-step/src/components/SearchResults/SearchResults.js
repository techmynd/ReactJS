import React, { Component } from 'react';
import './SearchResults.css';
import SearchBookBar from '../SearchBookBar/SearchBookBar';
// import { getAll } from '../../Api/BooksAPI';
import * as BooksAPI from '../../Api/BooksAPI'
import Book from '../Book/Book';

export default class SearchResults extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchedTxt: '',
      searchedBooks: []
    };
    this.doSearch = this.doSearch.bind(this);
  }

  doSearch = (event) => {
    // get the search text and store in in state
    this.setState({ searchedTxt: event.target.value })
    // store the search query in variable
    // Get input value - not state value bcoz state will be previously stored
    let searchTerm = event.target.value;
    if(searchTerm && searchTerm !=='') { 
      BooksAPI.search(searchTerm).then((res) => {
        let receivedBooks = res;
        if(receivedBooks && receivedBooks !== null && receivedBooks !== '' && searchTerm !=='') {
          this.setState({ searchedBooks: receivedBooks })
        } else {
          this.setState({ searchedBooks: null })
        }
      })
    } else {
      this.setState({ searchedBooks: null })
    }
  }

  renderEmptyResult() {
    console.log(this.state.searchedBooks);
    if (this.state.searchedTxt !== '' && this.state.searchedBooks === null) {
      return <p className='txtred'>Sorry, No records found. Please try different search term ...</p>
    }
  }

  renderSearchResult() {
    if (this.state.searchedTxt) {
      return (
        <div className="list-books">
          <div className="search-books">
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  Array.isArray(this.state.searchedBooks) && this.state.searchedBooks.map((book) => (
                  <li key={book.id}>
                    <Book book={book} handleSelectTwo={this.props.handleSelectOne} />
                  </li>
                ))
                }
              </ol>
              {this.renderEmptyResult()}
            </div>
          </div>  
        </div>
      );
    } else {
      return <p>Please search from above...</p>
    }
  }

	render() {
		return (
      <div>
        <SearchBookBar ppSearchText={this.state.searchedTxt} ppHandleUpdate={this.doSearch} />
        <div className="search-results">
          <h2>Search Results</h2>
          {this.renderSearchResult()}
        </div>
      </div>
    );
  };
};
