import React from 'react';
import AppActions from '../actions/AppActions';

class Contact extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.phone}</td>
        <td>{this.props.contact.email}</td>
        <td><a href="#" className="btn btn-default" onClick={this.handleEdit}>Edit</a>&nbsp;
        <a href="#" className="btn btn-danger" onClick={() => this.handleRemove(this.props.contact.id)}>Remove</a></td>
      </tr>
    )
  }

  handleRemove = (i, j) => {
    AppActions.removeContact(i);
  }
}

export default Contact;