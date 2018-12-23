import React from 'react';
import './Book.css';
import BtnBookShelfChanger from '../BtnBookShelfChanger/BtnBookShelfChanger';

const Book = (props) => {
  return (
    <div className="book">
      <div className="book-top">
        { props.book.imageLinks ? 
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url( ${props.book.imageLinks.smallThumbnail} )` }}></div> 
        : 
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url()` }}></div> 
        }

        <BtnBookShelfChanger />
      </div>
      <div className="book-title"><strong>Title:</strong> {props.book.title}</div>
      <div className="book-authors"><strong>Authors:</strong> {props.book.authors}</div>
      <div className="book-category"><strong>Category:</strong> {props.book.category}</div>
      <div className="book-shelf"><strong>Shelf:</strong> {props.book.shelf}</div>
      <div className="book-id"><strong>ID:</strong> {props.book.id}</div>
    </div>
  );
};

export default Book;

