import React, { Component } from 'react';
import './BtnSearch.css';
import { Link } from "react-router-dom";

class BtnSearch extends Component {
    
    render() {
		return (
        <div className="open-search">
            {/* <button onClick={() => this.setState({ showSearchPage: true })}>Search books</button> */}
            {/* <button onClick={() => this.props.onPress()}>Search books</button> */}
            <Link to="/search"><button>Search books</button></Link>
        </div>
        );
    };
};

export default BtnSearch;

