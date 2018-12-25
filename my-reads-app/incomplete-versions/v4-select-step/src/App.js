import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Navigation from './components/Header/Navigation';
import BtnSearch from './components/BtnSearch/BtnSearch';
import SearchResults from './components/SearchResults/SearchResults';
import { getAll } from './Api/BooksAPI';
import { update } from './Api/BooksAPI';
import BookShelf from './components/BookShelf/BookShelf';

import './App.css'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchPage: false,
      bookResults: [],
      booksCurrentlyReading: [],
      booksWantToRead: [],
      booksRead: [] 
    };
    this.handleSelectFinal = this.handleSelectFinal.bind(this);
  }

  componentDidMount() {
    this.getAllBooks();
  }
  
  // get all books
  async getAllBooks() {
    const books = await getAll();
    this.setState({ 
      bookResults: books 
    });
    this.getShelfBooks();
  }

  // update state with shelf based books
  getShelfBooks(){
    const allBooks = this.state.bookResults;
    let currentlyReading = allBooks.filter(book => book.shelf === "currentlyReading");
    let wantToRead = allBooks.filter(book => book.shelf === "wantToRead");
    let read = allBooks.filter(book => book.shelf === "read");
    this.setState({
      booksCurrentlyReading: currentlyReading, 
      booksWantToRead: wantToRead, 
      booksRead: read
    })
  }

  handleSelectFinal= (book, shelf) => {
    //const theShelf = event.target.value;
    update(book, shelf).then(() => {
      this.setState(prevState => ({
        // Filter all books in state to find correct book match
        bookResults: prevState.bookResults.filter(b => {
          if (b.id === book.id) {
            // If book is found, set it's current shelf to a new one
            return (book.shelf = shelf);
          } else {
            return book;
          }
        })
      }));
      this.getShelfBooks();
    });
    this.getShelfBooks();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="list-books-content">
            <div className="content-area-wrap">
              <Route exact path='/' component={Header}/>
              <Route path='/currently-reading' component={Header}/>
              <Route path='/want-to-read' component={Header}/>
              <Route path='/read' component={Header}/>
              <Route exact path='/' component={Home}/>
              
              {/* <Route path='/search' component={SearchResults}  /> */}
              
              <Route path='/search' render={props => (
                  <SearchResults {...props} handleSelectOne={this.handleSelectFinal}  />
              )} />
              
              <Route exact path='/' render={props => (
                  <BookShelf {...props} ppShelfName={"Currently Reading"} ppBooksStack={this.state.booksCurrentlyReading} handleSelectOne={this.handleSelectFinal} />
              )} />
              <Route exact path='/' render={props => (
                  <BookShelf {...props} ppShelfName={"Want To Read"} ppBooksStack={this.state.booksWantToRead} handleSelectOne={this.handleSelectFinal}/>
              )} />
              <Route exact path='/' render={props => (
                  <BookShelf {...props} ppShelfName={"Read"} ppBooksStack={this.state.booksRead} handleSelectOne={this.handleSelectFinal}/>
              )} />
              <Route path='/currently-reading' render={props => (
                  <BookShelf {...props} ppShelfName={"Currently Reading"} ppBooksStack={this.state.booksCurrentlyReading} handleSelectOne={this.handleSelectFinal}/>
              )} />
              <Route path='/want-to-read' render={props => (
                  <BookShelf {...props} ppShelfName={"Want To Read"} ppBooksStack={this.state.booksWantToRead} handleSelectOne={this.handleSelectFinal}/>
              )} />
              <Route path='/read' render={props => (
                  <BookShelf {...props} ppShelfName={"Read"}  ppBooksStack={this.state.booksRead} handleSelectOne={this.handleSelectFinal}/>
              )} />
              <BtnSearch />
              <Navigation />
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
export default BooksApp;