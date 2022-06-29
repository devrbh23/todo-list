import React, {Component} from 'react';

export class Input extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          style={{
            width: '19.56%',
          }}
          type="text"
          name="title"
          value={this.props.title}
          onChange={this.props.onChange}
        />
        <input type="submit" value="add task" />
      </form>
    );
  }
}

export default Input;
