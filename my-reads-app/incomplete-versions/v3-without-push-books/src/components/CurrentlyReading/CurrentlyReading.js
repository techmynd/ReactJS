import React, { Component } from 'react';
import './CurrentlyReading.css';
import Book from '../Book/Book';
import { getAll } from '../../Api/BooksAPI';

class CurrentlyReading extends Component {

  constructor(props){
    super(props);
    this.state = {
      bookResults: null,
    };
  }

  componentDidMount() {
//    this.getAllBooks();
  }
  
  // async getAllBooks() {
  //   const books = await getAll();
  //   this.setState({ bookResults: books });
  //   //console.log( this.state.bookResults );
  // }

  render() {
    const { bookResults } = this.state;
		return (
      <div className="">
         <div className="bookshelf">
         
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
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
    );
  };
};
export default CurrentlyReading;