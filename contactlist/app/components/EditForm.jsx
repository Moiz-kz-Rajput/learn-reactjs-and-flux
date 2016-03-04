import React from 'react';
import AppActions from '../actions/AppActions';

class EditForm extends React.Component {
  render() {
    return (
      <div className="well">
        <h3>Edit Contact</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" ref="name" onChange={(event) => this.handleChange('name', event)} value={this.props.contactToEdit.name} className="form-control" placeholder="Add name..."/>
          </div>
          <div className="form-group">
            <input type="text" ref="phone" onChange={(event) => this.handleChange('phone', event)} value={this.props.contactToEdit.phone} className="form-control" placeholder="Add phone..."/>
          </div>
          <div className="form-group">
            <input type="email" ref="email" onChange={(event) => this.handleChange('email', event)} value={this.props.contactToEdit.email} className="form-control" placeholder="Add email..."/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const contact = {
      id: this.props.contactToEdit.id,
      name: this.refs.name.value.trim(),
      phone: this.refs.phone.value.trim(),
      email: this.refs.email.value.trim()
    };

    AppActions.updateContact(contact);
  };

  handleChange = (fieldName, event) => {
    let newState = event.target.value;
    let selected = this.state.selected;
    selected.name = newState;
    this.setState({selected});
  }
}

export default EditForm;