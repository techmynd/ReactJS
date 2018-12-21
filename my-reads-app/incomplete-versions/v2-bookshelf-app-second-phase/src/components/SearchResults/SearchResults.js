import React, { Component } from 'react';
import './SearchResults.css';
import SearchBookBar from '../SearchBookBar/SearchBookBar';
import { getAll } from '../../Api/BooksAPI';
import Book from '../Book/Book';

class SearchResults extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      bookResults: null,
    };
  }

  componentDidMount() {
    this.getAllBooks();
  }
  
  async getAllBooks() {
    const books = await getAll();
    
    this.setState({ bookResults: books });
    //console.log( this.state.bookResults );
  }

	render() {

   const { bookResults } = this.state;

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

                    {Array.isArray(bookResults) && bookResults.map((book) => (
                    
                                   
                        <li key={book.id}>
                          <Book 
                          ppBookURL={book.imageLinks.smallThumbnail} 
                          ppBookTitle={book.title}  
                          ppBookAuthors={book.publisher} 
                          ppBookCategory={book.categories} 
                          ppBookShelf={book.shelf}
                          ppBookID={book.id} />
                        </li>
                      ))
                    }
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