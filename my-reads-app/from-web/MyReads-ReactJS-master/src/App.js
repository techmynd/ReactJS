import React from 'react'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: [],
    search: '',
    results: [],
    status:'none'
  }

  // on mount get all books and set state
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  // handle select change function
  handleChange = (book, shelf) => {
    // on change update the api
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      // set the state 
      this.setState(previousState => ({
        // update the books shelf value
        books: previousState.books.filter(shelf=> shelf.id !== book.id).concat([book])
      }))
      this.setState({status: book.shelf})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onHandleChange={this.handleChange}
          />
        )}/>
        
        <Route path='/search' render={({ history }) => (
          <SearchBooks
            books={this.state.books}
            onHandleChange={this.handleChange}
          />
        )}/>
      
      </div>
    )
  }
}

export default BooksApp
