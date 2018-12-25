import React from 'react';
import Book from '../Book/Book';
import './BookShelf.css';

const BookShelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.ppShelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {Array.isArray(props.ppBooksStack) && props.ppBooksStack.map((book) => (
              <li key={book.id}>
                <Book book={book} handleSelectTwo={props.handleSelectOne} />
              </li>
            ))
          }
        </ol>
      </div>
    </div> 
  );
};

export default BookShelf;
