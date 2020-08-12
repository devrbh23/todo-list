import React, {Component} from 'react';
import PropType from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: 'gray',
      textDecoration: this.props.todo.complete ? 'line-through' : 'none',
      width: '25%',
      display: 'flex',
      justifyContent: 'space-between',
      border: 'solid',
    };
  };

  render() {
    const {id} = this.props.todo;
    return (
      <div>
        <input type="checkbox" onClick={this.props.onClick.bind(this, id)} />
        <p style={this.getStyle()}>{this.props.todo.title}</p>
        <button onClick={this.props.delete.bind(this, id)}>x</button>
      </div>
    );
  }
}

TodoItem.PropType = {
  todo: PropType.object.isRequired,
};

export default TodoItem;
