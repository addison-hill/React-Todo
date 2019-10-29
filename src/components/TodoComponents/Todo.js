import React from 'react';


const Todo = props => {
  return (
    <div
      className={props.item.completed ? 'item completed' : 'item'}
      onClick={() => props.toggleCompleted(props.item.id)} >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;