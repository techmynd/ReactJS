import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import * as actionTypes from "./store/actions/types";

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   toggle: true,
    //   counter: 0,
    // };
  }

  // handleClick = () => {
  //   this.setState({
  //     toggle: !this.state.toggle,
  //   });
  // };

  // handleIncrement = () => {
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  // };

  renderTxt = () => {
    if (this.props.toggler) {
      return <p className='description'>lorem ipsum dolor set amet</p>;
    }
  };

  render() {
    return (
      <div className='App'>
        <button className='btn' onClick={this.props.doToggle}>
          Toggle
        </button>
        {this.renderTxt()}
        <div>
          <button className='btn' onClick={this.props.doIncrement}>
            Counter {this.props.count}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count.counter,
    toggler: state.toggler.toggle
  }
};

const mapDispatchToProps = dispatch => {
  return {
    doToggle: () => dispatch({type: actionTypes.ACTION_TOGGLE}),
    doIncrement: () => dispatch({type: actionTypes.ACTION_INCREMENT})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
