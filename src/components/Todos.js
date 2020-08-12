import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropType from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onClick={this.props.onClick}
        delete={this.props.delete}
      />
    ));
  }
}
Todos.PropType = {
  todos: PropType.array.isRequired,
};

export default Todos;
