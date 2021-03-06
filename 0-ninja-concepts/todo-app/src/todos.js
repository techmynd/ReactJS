// function component // dumb component // stateless component
// note ({todos}) instead of (props)
import React from "react";

const Todos = ({ todos, deleteToDo }) => {
  const toDoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <button
            className="del-list"
            onClick={() => deleteToDo(todo.id)}
          >
            X
          </button>
        </div>
      );
    })
  ) : (
    <p className="info center">No to dos left</p>
  );
  return <div className="todos collection">{toDoList}</div>;
};

export default Todos;
