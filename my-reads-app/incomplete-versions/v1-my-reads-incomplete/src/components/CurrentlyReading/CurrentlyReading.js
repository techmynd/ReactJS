import React, { Component } from 'react';
import './CurrentlyReading.css';
import Book from '../Book/Book';

class CurrentlyReading extends Component {
	
	constructor(props) {
    super(props);
    
  }
  
  render() {
		return (
      <div className="">
         <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
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
export default CurrentlyReading;