import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get('http://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((res) => this.setState({ todos: res.data }));
  }
  // Toggle 'completed' property for todo item
  markComplete = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({ todos: newTodos });
  };

  // Delete Todo
  deleteTodo = (id) => {
    axios
      .delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => this.setState({ todos: newTodos }));
    // Filter out the todo that is deleted.
    const newTodos = this.state.todos.filter((todo) => {
      const isDeletedTodo = todo.id === id;
      return !isDeletedTodo;
    });

    // Set state with new todos.
    // this.setState({ todos: newTodos });
  };

  // Add Todo
  addTodo = (title) => {
    axios
      .post('http://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              path="/Modul4-react-todo/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
