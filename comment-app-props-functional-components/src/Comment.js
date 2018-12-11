// functional component
import React, { Component } from 'react';
import { formatDate } from './Helper.js';

const Comment = props => {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
    
  );
};
export default Comment;

