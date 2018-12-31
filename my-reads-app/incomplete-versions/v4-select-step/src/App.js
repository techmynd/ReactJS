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
import * as BooksAPI from './Api/BooksAPI'
import Book from './components/Book/Book';

import './App.css'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchPage: false,
      bookResults: [],
      booksCurrentlyReading: [],
      booksWantToRead: [],
      booksRead: [],
      searchedTxt: '',
      searchedBooks: []
    };
    this.handleSelectFinal = this.handleSelectFinal.bind(this);
    this.doSearch = this.doSearch.bind(this);
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

      this.setState(prevState => ({
        // Filter all books in state to find correct book match
        searchedBooks: prevState.searchedBooks.filter(b => {
          if (b.id === book.id) {
            // If book is found, set it's current shelf to a new one
            return (book.shelf = shelf);
          } else {
            return book;
          }
        })
      }));


      //this.getShelfBooks();
      this.getAllBooks();
    });
    //this.getShelfBooks();
    this.getAllBooks();
  }

  removeSearch = () => {
    // let searchTerm = '';
    this.setState({
      searchedTxt: ''
    })
  }

  doSearch = (event) => {

    // for shelf name info for search results
    let bookResults = this.state.bookResults;
    let displayResults = [];

   // get the search text and store in in state
    this.setState({ searchedTxt: event.target.value })
    // store the search query in variable
    // Get input value - not state value bcoz state will be previously stored
    let searchTerm = event.target.value;
    if(searchTerm && searchTerm !=='') { 
      BooksAPI.search(searchTerm).then((res) => {
        let receivedBooks = res;
        if(receivedBooks && receivedBooks !== null && receivedBooks !== '' && searchTerm !=='') {

          
          if(Array.isArray(receivedBooks)){
          receivedBooks.forEach(result => {
          const matchingResults = bookResults.filter(book => book.id === result.id);
          //console.log(matchingResults.length);
            if (matchingResults.length > 0) {
              /* The spread operator makes sure matching results are copied together with all their properties over to 
              the displayResults array. 
              Without it, we get an error about those results missing their unique key identifier. */
              displayResults.push(...matchingResults);
            } else {
              displayResults.push(result);
            }
          });  
        }



          this.setState({ searchedBooks: displayResults })
        } else {
          this.setState({ searchedBooks: null })
        }
      })
    } else {
      this.setState({ searchedBooks: null })
    }
  }

  renderSearchResult() {
    if (this.state.searchedTxt && this.state.searchedBooks) {
      return (
        <div className="list-books">
          <div className="search-books">
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  Array.isArray(this.state.searchedBooks) && this.state.searchedBooks.map((book) => (
                  <li key={book.id + book.id + Math.random()}>
                    <Book book={book} handleSelectTwo={this.handleSelectFinal} state={this.state} />
                  </li>
                ))
                }
              </ol>
              {this.renderEmptyResult()}
            </div>
          </div>  
        </div>
      );
    } else {
      return <p>Please search from above...</p>
    }
  }

  renderEmptyResult() {
    //console.log(this.state.searchedBooks);
    if (this.state.searchedTxt !== '' && this.state.searchedBooks === null) {
      return <p className='txtred'>Sorry, No records found. Please try different search term ...</p>
    }
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
                  <SearchResults {...props} handleSelectOne={this.handleSelectFinal} state={this.state} 
                  ppSearchText={this.state.searchedTxt} doSearch={this.doSearch} ppRenderSearchResults={this.renderSearchResult()} 
                  removeSearch={this.removeSearch}
                  />
              )} />
              
              <Route exact path='/' render={props => (
                  <BookShelf {...props} ppShelfName={"Currently Reading"} ppBooksStack={this.state.booksCurrentlyReading} handleSelectOne={this.handleSelectFinal} state={this.state} />
              )} />
              <Route exact path='/' render={props => (
                  <BookShelf {...props} ppShelfName={"Want To Read"} ppBooksStack={this.state.booksWantToRead} handleSelectOne={this.handleSelectFinal} state={this.state}/>
              )} />
              <Route exact path='/' render={props => (
                  <BookShelf {...props} ppShelfName={"Read"} ppBooksStack={this.state.booksRead} handleSelectOne={this.handleSelectFinal} state={this.state}/>
              )} />
              <Route path='/currently-reading' render={props => (
                  <BookShelf {...props} ppShelfName={"Currently Reading"} ppBooksStack={this.state.booksCurrentlyReading} handleSelectOne={this.handleSelectFinal} state={this.state}/>
              )} />
              <Route path='/want-to-read' render={props => (
                  <BookShelf {...props} ppShelfName={"Want To Read"} ppBooksStack={this.state.booksWantToRead} handleSelectOne={this.handleSelectFinal} state={this.state}/>
              )} />
              <Route path='/read' render={props => (
                  <BookShelf {...props} ppShelfName={"Read"}  ppBooksStack={this.state.booksRead} handleSelectOne={this.handleSelectFinal} state={this.state}/>
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