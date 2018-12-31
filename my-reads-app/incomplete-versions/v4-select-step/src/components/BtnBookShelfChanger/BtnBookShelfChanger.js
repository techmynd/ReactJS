import React, { Component } from 'react';
import './BtnBookShelfChanger.css';

class BtnBookShelfChanger extends Component {
  
render() {
  
  // console.log(this.props.ppBookShelff);
  //// const currentShelf = this.props.ppBookShelff;
  // console.log(currentShelf);
  //// const BookID = this.props.ppBookIDD;
  // console.log(BookID);

  const booksObject = this.props.ppBookObject;

  return (

      // onChange={(event) => this.props.handleSelectThree(event)}

      <div className="book-shelf-changer">

        <select 
        id={this.props.ppBookIDD}
        value={this.props.ppBookShelff ? this.props.ppBookShelff : "none"}
        onChange={event => this.props.handleSelectThree(booksObject, event.target.value)}
        >

          <option value="">Move to...</option>
          
          {this.props.ppBookShelff === "currentlyReading" ?  
            <option value="currentlyReading" disabled>Currently Reading</option>
          : 
            <option value="currentlyReading">Currently Reading</option>
          }

          {this.props.ppBookShelff === "wantToRead" ?  
          <option value="wantToRead" disabled>Want to Read</option>
          : 
          <option value="wantToRead">Want to Read</option>
          }

          {this.props.ppBookShelff === "read" ?  
          <option value="read" disabled>Read</option>
          : 
          <option value="read">Read</option>
          }

          <option value="none">None</option>
        </select>
      </div>
    );
  };
};
export default BtnBookShelfChanger;