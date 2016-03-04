import React from 'react';
import AppActions from '../actions/AppActions';

class AddNoteForm extends React.Component {
  render() {
    return (
      <div>
        <h5>Add A Note</h5>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="large-12 columns">
              <label>Note Text
                <input type="text" ref="text" placeholder="Enter text..."/>
              </label>
              <button className="button">Add</button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  onSubmit = (e) => {
    e.preventDefault();

    const note = {
      text: this.refs.text.value.trim()
    };

    AppActions.addNote(note);
  };
}

export default AddNoteForm;