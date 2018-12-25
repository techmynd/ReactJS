import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book';

class SearchBooks extends Component {
    static propTypes = {
      books: PropTypes.array,
      onHandleChange: PropTypes.func.isRequired
    }
    
    state = {
      books:[],
      search: '',
      results: []
    }

    // on searching for books set the state of search
    updateSearch = (search) => {
      this.setState({
          search: search
      })
      // if a search term exists then use the search api method to get results.
      if (search){
        BooksAPI.search(search.trim(), 50).then((results) => {
          // if no results or there is an error set state to this otherwise call bookShelf function to show results and set the state of results
          if(!results || results.error){
              this.setState({results: []})
          } else {
              this.bookShelf(results)
              this.setState({results:results}) 
          }
        }     
        // Fallback error if API call fails         
       )} else {
        this.setState({results: []})
      }      
    }

    bookShelf = (results) => {
      // look through results
      for (let result of results){
        // set the result.shelf to none by default
        result.shelf = "none"
        // look through the books
        for (let book of this.props.books)
          // if the results and books id match
          if (result.id === book.id) {
              // set the results.shelf to book.shelf
              result.shelf = book.shelf
          }            
      }
    }

    render(){
        const { onHandleChange} = this.props
        const { results } = this.state
        return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                  placeholder="Search by title or author"
                  value={this.state.search}
                  onChange={(event) => this.updateSearch(event.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <Book books={results} 
                     onHandleChange={onHandleChange}/>
            </div>
        </div>
        )
    }
}

export default SearchBooks