import React, {Component} from 'react';
import Todos from './components/Todos';
import Input from './components/Input';
import './App.css';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [],
  };

  // yesle id linchha ani yo yo kaam garchha

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

  Input = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      complete: false,
    };
    this.setState({todos: [...this.state.todos, newTodo]});
  };

  //yesle return gareko kuro screen ma dekhinchha
  render() {
    return (
      <div className="App">
        <Input Input={this.Input} />
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
