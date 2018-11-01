import React from 'react';

const User = (props) => {
  let age = props.age >=0 ? props.age : "NA";
  if(props.children){
    return (
      <li>
        name: {props.children} | age: {age}
      </li>
    )
  } else {
    return(<li>Invalid Entry</li>)
  }
}

export default User;
