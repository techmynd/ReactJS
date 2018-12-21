import React, { Component } from 'react';
import './WantToRead.css';
import Book from '../Book/Book';

class WantToRead extends Component {
  
  render() {
		return (
      <div className="">
          <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                  <Book />
                  </li>
                </ol>
              </div>
            </div>
      </div>
    );
  };
};
export default WantToRead;