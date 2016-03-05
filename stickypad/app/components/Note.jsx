import React from 'react';
import AppActions from '../actions/AppActions';

class Note extends React.Component {
  render() {
    return (
      <div className="column">
        <div onDoubleClick={() => this.removeNote(this.props.note._id)} className="note"><p>{this.props.note.text}</p></div>
      </div>
    )
  }

  removeNote = (noteId) => {
    AppActions.removeNote(noteId.$oid);
  };
}

export default Note;