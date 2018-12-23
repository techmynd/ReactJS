import React, { Component } from 'react';
import './BookShelf.css';
import Book from '../Book/Book';

class BookShelf extends Component {

  componentDidMount() {
    // console.log(this.props.ppBooksStack);
    //  console.log(this.props.ppShelfName);
  }
  
  render() {
    // const { bookResults } = this.props.ppBooksStack;
		return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.ppShelfName}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
            {Array.isArray(this.props.ppBooksStack) && this.props.ppBooksStack.map((book) => (
                <li key={book.id}>
                  {/* <Book 
                  ppBookURL={book.imageLinks.smallThumbnail} 
                  ppBookTitle={book.title}  
                  ppBookAuthors={book.publisher} 
                  ppBookCategory={book.categories} 
                  ppBookShelf={book.shelf}
                  ppBookID={book.id} /> */}
                  <Book book={book} />
                </li>
              ))
            }
        </ol>
        </div>
    </div> 
    );
  };
};
export default BookShelf;