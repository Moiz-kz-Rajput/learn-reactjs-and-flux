import React from 'react';
import AppActions from '../actions/AppActions';

class AddForm extends React.Component {
  render() {
    return (
      <div className="well">
        <h3>Add Contact</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" ref="name" className="form-control" placeholder="Add name..."/>
          </div>
          <div className="form-group">
            <input type="text" ref="phone" className="form-control" placeholder="Add phone..."/>
          </div>
          <div className="form-group">
            <input type="email" ref="email" className="form-control" placeholder="Add email..."/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const contact = {
      name: this.refs.name.value.trim(),
      phone: this.refs.phone.value.trim(),
      email: this.refs.email.value.trim()
    };

    AppActions.saveContact(contact);
  }
}

export default AddForm;