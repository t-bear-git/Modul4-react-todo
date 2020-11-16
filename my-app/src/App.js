import React from 'react';
import Todos from './components/Todos';
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

  render() {
    return <Todos todos={this.state.todos} />;
  }
}

export default App;
