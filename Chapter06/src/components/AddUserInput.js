import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class AddUserInput extends Component {
  static propTypes = {
    addUser: PropTypes.func.isRequired
  }

  render () {
    return (
      <input
        type="text"
        autoFocus="true"
        className={classnames('form-control')}
        placeholder="Type the name of the user to add"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addUser(name);
      this.setState({ name: '' });
    }
  }

}
