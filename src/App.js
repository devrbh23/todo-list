import React, {Component} from 'react';
import Todos from './components/Todos';

import './App.css';
import uuid from 'uuid';
import Input from './components/Input';

class App extends Component {
  state = {
    todos: [],
    title: '',
  };

  onClick = (id) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === id) {
          item.complete = !item.complete;
        }
        return item;
      }),
    });
    console.log(this.state.todos.complete);
  };

  delete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  onSubmit = (e) => {
    const newTodo = {
      id: uuid.v4(),
      title: this.state.title,
      complete: false,
    };
    this.setState({todos: [...this.state.todos, newTodo]});
    e.preventDefault();
  };
  onChange = (e) => this.setState({title: e.target.value});

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Input
          onSubmit={this.onSubmit}
          title={this.state.title}
          onChange={this.onChange}
        ></Input>

        <Todos
          todos={this.state.todos}
          onClick={this.onClick}
          delete={this.delete}
        />
      </div>
    );
  }
}

export default App;
