import React, { Component } from 'react';
import User from './User';

class Users extends Component {
  // you can also set this in a constturcotr.
  state = {
    users:[
      {name:'John', age:20},
      {name:'Jill', age:30},
      {name:'Peter', age:40},
    ],
    title:'Users Lust'
  };

  makeMeYounger = () => {
    this.setState(
      {
        users:[
          {name:'John', age:10},
          {name:'Jill', age:20},
          {name:'Peter', age:30}
        ]
      }
    )
    console.log(this.state.users); //its becase setState is async
  }



  // makeMeYounger = () => {
  //   const newUsersState = this.state.users.map(function(obj) {
  // 		const temp = obj;
  //   	temp.age -= 10;
  //     return temp;
  //   });
  //   this.setState({
  //     newUsersState
  //   });
  //
  // }

  render(){

    return (
      <div>
        <h1> {this.state.title} </h1>
        <button onClick={this.makeMeYounger}>Make Us 10 Years Younger</button>
        <br/>
        <ul>
          <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
          <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
          <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
        </ul>
      </div>
    )
  }
}

export default Users;
