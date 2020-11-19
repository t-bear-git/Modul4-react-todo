import React from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Gör nåt',
        completed: false,
      },
      {
        id: 2,
        title: 'Rasta hunden',
        completed: false,
      },
      {
        id: 3,
        title: 'Laga mat',
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    // Toggle 'completed' property for todo item
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({ todos: newTodos });
  };

  deleteTodo = (id) => {
    // Filter out the todo that is deleted.
    const newTodos = this.state.todos.filter((todo) => {
      const isDeletedTodo = todo.id === id;
      return !isDeletedTodo;
    });

    // Set state with new todos.
    this.setState({ todos: newTodos });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
