import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component {
  render() {
    const todoElements = this.props.todos.map((todo) => {
      // return <div>{todo.title}</div>;
      return <TodoItem key={todo.id} todo={todo} />;
    });

    return todoElements;
  }
}

export default Todos;
