import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import WantToRead from './components/WantToRead/WantToRead';
import CurrentlyReading from './components/CurrentlyReading/CurrentlyReading';
import Read from './components/Read/Read';
import Header from './components/Header/Header';
import Navigation from './components/Header/Navigation';
import BtnSearch from './components/BtnSearch/BtnSearch';
import SearchResults from './components/SearchResults/SearchResults';
import { getAll } from './Api/BooksAPI';

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
      books: [],
    };
    // this.showSearch = this.showSearch.bind(this);
  }  


  componentDidMount() {
    getAll().then((data) => console.log(data));
  }


  // showSearch(){
  //   this.setState({ showSearchPage: !this.state.showSearchPage });
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="list-books-content">
            
           
            {/* Search Area Starts */}
            {/* <div className="search-area-wrap">
              { this.state.showSearchPage ? <SearchBookBar /> : null }
              { this.state.showSearchPage ? <SearchResults /> : null }
            </div> */}
            {/* Search Area Ends */}
            
            
            
            {/* Content Area Starts */}
            <div className="content-area-wrap">
              
              {/* <Header /> */}

              <Route exact path='/' component={Header}/>
              <Route path='/currently-reading' component={Header}/>
              <Route path='/want-to-read' component={Header}/>
              <Route path='/read' component={Header}/>

              {/* if is home, show all three components */}
              <Route exact path='/' component={Home}/>
              <Route exact path='/' component={CurrentlyReading}/>
              <Route exact path='/' component={WantToRead}/>
              <Route exact path='/' component={Read}/>
              <Route path='/currently-reading' component={CurrentlyReading}/>
              <Route path='/want-to-read' component={WantToRead}/>
              <Route path='/read' component={Read}/>
              <Route path='/search' component={SearchResults}/>
              {/* <BtnSearch onPress={this.showSearch} /> */}
              <BtnSearch />
              <Navigation />
            </div>
            {/* Content Area Ends */}


            
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
export default BooksApp;