import React, { Component } from 'react';
import './SearchResults.css';
import SearchBookBar from '../SearchBookBar/SearchBookBar';
// import { getAll } from '../../Api/BooksAPI';
import * as BooksAPI from '../../Api/BooksAPI'
import Book from '../Book/Book';

class SearchResults extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      searchedTxt: '',
      searchedBooks: []
    };

    this.doSearch = this.doSearch.bind(this);
  }

  componentDidMount() {

  }

  doSearch = (event) => {
    
    // get the search text and store in in state
    this.setState({
      searchedTxt: event.target.value
    })
    
    // test
    // console.log(this.state.searchedTxt);
    
    // store the search query in variable
    // Get input value - not state value bcoz state will be previously stored
    let searchTerm = event.target.value;
    console.log(searchTerm);
    // test
    // console.log(this.state.searchedTxt);

      if(searchTerm && searchTerm !=='') { 

              // BooksAPI.search(searchTerm).then((res) => {
              BooksAPI.search(searchTerm).then((res) => {
                
                let receivedBooks = res;
                if(receivedBooks && receivedBooks !== null && receivedBooks !== '' && searchTerm !=='') {
                      //console.log(receivedBooks);
                      //console.log(searchTerm);
                        this.setState({ 
                        searchedBooks: receivedBooks
                      })
                } else {
                      // const noResults = "No records found ... please try different keyword";
                }

              })

      } else {
        this.setState({ 
          searchedBooks: ''
        })
      }

      
      //console.log(this.state.searchedBooks);

  }

  componentWillUnmount(){
    this.state = {
      searchedTxt: '',
      searchedBooks: []
    };
  }

	render() {

		return (
      <div>
        <SearchBookBar ppSearchText={this.state.searchedTxt} ppHandleUpdate={this.doSearch} />
        <div className="search-results">
          <h2>Search Results</h2>
          
          {this.state.searchedTxt ? 

                    <div className="list-books">
                        <div className="search-books">
                          <div className="search-books-results">
                            <ol className="books-grid">

                              {Array.isArray(this.state.searchedBooks) && this.state.searchedBooks.map((book) => (
                                            
                                  <li key={book.id}>
                                    <Book book={book} />
                                  </li>
                                ))
                              }

                              {
                                Array.isArray(this.state.searchedBooks) ? '' : <p className='txtred'>Sorry, No records found. Please try different search term ...</p>
                              }

                            </ol>
                          </div>
                        </div>  
                      </div>

          : 
          <p>Please search from above...</p>
          }


        </div>
      </div>
    );
  };
};

export default SearchResults;