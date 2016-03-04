import React from 'react';
import Contact from './Contact.jsx';

class ContactList extends React.Component {
  render() {
    return (
      <div>
        <h3>Contacts</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.contacts.map((contact, index) => {
              return (
                <Contact contact={contact} key={index} />
              )
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ContactList;