import React, {Component} from 'react';

export class Input extends Component {
  state = {
    title: '',
  };

  onSubmit = (e) => {
    if (this.state.title === '') {
      alert('required');
    } else {
      this.setState({[e.target.name]: e.target.value});
      e.preventDefault();
    }
  };
  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          style={{
            width: '19.56%',
          }}
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" value="add task" />
      </form>
    );
  }
}

export default Input;
