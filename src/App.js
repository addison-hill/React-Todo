import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const data = [
  {
    task: 'Organize Garage',
    id: 0,
    completed: false 
  },
  {
    task: 'Bake Cookies',
    id: 1,
    completed: false 
  },
  {
    task: 'Wash Car',
    id: 2,
    completed: false 
  },
  {
    task: 'Take Dog on Walk',
    id: 3,
    completed: false 
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: data
    };
  }

  addItem = task => {
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  toggleCompleted = id => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  clearCompleted = id => {
    this.setState({
      tasks: this.state.tasks.filter(item => item.completed !== true)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>ToDo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList 
        clearCompleted={this.clearCompleted}
          toggleCompleted={this.toggleCompleted}
          tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
