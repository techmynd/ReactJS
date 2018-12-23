import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
// import WantToRead from './components/WantToRead/WantToRead';
// import CurrentlyReading from './components/CurrentlyReading/CurrentlyReading';
// import Read from './components/Read/Read';
import Header from './components/Header/Header';
import Navigation from './components/Header/Navigation';
import BtnSearch from './components/BtnSearch/BtnSearch';
import SearchResults from './components/SearchResults/SearchResults';
import { getAll } from './Api/BooksAPI';
import BookShelf from './components/BookShelf/BookShelf';

import './App.css'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      showSearchPage: false,
      bookResults: [],
      booksCurrentlyReading: [],
      booksWantToRead: [],
      booksRead: [] 
    };
    // this.showSearch = this.showSearch.bind(this);
  }  


  // componentDidMount() {
      // getAll().then((data) => console.log(data));
  // }

  // showSearch(){
  //   this.setState({ showSearchPage: !this.state.showSearchPage });
  // }

  componentDidMount() {
    // get all books
    this.getAllBooks();
  }
  
  // get all books
  async getAllBooks() {
    const books = await getAll();
    this.setState({ 
      bookResults: books 
    });
    //console.log( this.state.bookResults );
    this.getShelfBooks();
  }

  // update state with shelf based books
  getShelfBooks(){
    const allBooks = this.state.bookResults;
    //console.log(allBooks);
    let currentlyReading = allBooks.filter(book => book.shelf === "currentlyReading");
    //console.log(currentlyReading);
    let wantToRead = allBooks.filter(book => book.shelf === "wantToRead");
    //console.log(wantToRead);
    let read = allBooks.filter(book => book.shelf === "read");
    //console.log(read);
    this.setState({
      booksCurrentlyReading: currentlyReading, 
      booksWantToRead: wantToRead, 
      booksRead: read
    })
  }

  render() {
    //const { bookResults } = this.state;
    return (
      <BrowserRouter>
        <div className="app">
          <div className="list-books-content">

            <div className="content-area-wrap">

              <Route exact path='/' component={Header}/>
              <Route path='/currently-reading' component={Header}/>
              <Route path='/want-to-read' component={Header}/>
              <Route path='/read' component={Header}/>

              {/* if is home, show all three components */}
              <Route exact path='/' component={Home}/>

              <Route exact path='/' render={props => (
                  <BookShelf {...props} ppShelfName={"Currently Reading"}  ppBooksStack={this.state.booksCurrentlyReading}/>
              )} />

              <Route exact path='/' render={props => (
                  <BookShelf {...props} ppShelfName={"Want To Read"}  ppBooksStack={this.state.booksWantToRead}/>
              )} />

              <Route exact path='/' render={props => (
                  <BookShelf {...props} ppShelfName={"Read"}  ppBooksStack={this.state.booksRead}/>
              )} />
             
              {/* <Route exact path='/' component={CurrentlyReading}/>
              <Route exact path='/' component={WantToRead}/>
              <Route exact path='/' component={Read}/> */}

              <Route path='/currently-reading' render={props => (
                  <BookShelf {...props} ppShelfName={"Currently Reading"}  ppBooksStack={this.state.booksCurrentlyReading}/>
              )} />

              <Route path='/want-to-read' render={props => (
                  <BookShelf {...props} ppShelfName={"Want To Read"}  ppBooksStack={this.state.booksWantToRead}/>
              )} />

              <Route path='/read' render={props => (
                  <BookShelf {...props} ppShelfName={"Read"}  ppBooksStack={this.state.booksRead}/>
              )} />

              {/* <Route path='/want-to-read' component={WantToRead}/>
              <Route path='/read' component={Read}/> */}
              <Route path='/search' component={SearchResults}/>
             
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