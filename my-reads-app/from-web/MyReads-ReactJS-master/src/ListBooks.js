import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Book from './Book';

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  state = {
    books:[],
    search: '',
    results: []
  }

  render() {

    const { books, onHandleChange} = this.props
    // filter the books based on shelf value
    let currentBooks = books.filter((book) => book.shelf === "currentlyReading");
    let readBooks = books.filter((book) => book.shelf === "read");
    let wantBooks = books.filter((book) => book.shelf === "wantToRead");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
              <Book books={currentBooks} 
                    onHandleChange={onHandleChange}/>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <Book books={wantBooks} 
                      onHandleChange={onHandleChange}/>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <Book books={readBooks} 
                      onHandleChange={onHandleChange}/>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks