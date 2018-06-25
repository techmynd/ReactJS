import React, { Component } from 'react';
import './SimpleDataBinding.css';

class SimpleDataBinding extends Component {

  constructor() {
  super();
  this.state = {value : ''}
  }

  /* 
  handleChange = (e) =>{
    this.setState({value: e.target.value});
  }
  // use e or event
  */

  handleChange = (event) =>{
    this.setState({value: event.target.value});
  }

  render() {
    return (
    <div>
        <h4>Type in the field below to see the result</h4>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <div>{this.state.value}</div>
    </div>
   );
  };

};
export default SimpleDataBinding;