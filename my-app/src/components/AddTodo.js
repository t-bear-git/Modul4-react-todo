import React from 'react';

class AddTodo extends React.Component {
  state = {
    title: '',
  };

  onChange = (e) => this.setState({ title: e.target.value });
  render() {
    return (
      <form style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add todo ..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

export default AddTodo;
