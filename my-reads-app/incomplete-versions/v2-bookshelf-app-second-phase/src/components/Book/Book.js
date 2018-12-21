import React from 'react';
import './Book.css';
import BtnBookShelfChanger from '../BtnBookShelfChanger/BtnBookShelfChanger';

const Book = (props) => {
  
	// render() {
		return (
      <div className="book">
          <div className="book-top">
            {/* <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("props.ppBookURL")' }}></div> */}
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url( ${props.ppBookURL} )` }}></div>
            <BtnBookShelfChanger />
          </div>
          <div className="book-title"><strong>Title:</strong> {props.ppBookTitle}</div>
          <div className="book-authors"><strong>Authors:</strong> {props.ppBookAuthors}</div>
          <div className="book-category"><strong>Category:</strong> {props.ppBookCategory}</div>
          <div className="book-shelf"><strong>Shelf:</strong> {props.ppBookShelf}</div>
          <div className="book-id"><strong>ID:</strong> {props.ppBookID}</div>
          
      </div>
    );
  //};
};

export default Book;

