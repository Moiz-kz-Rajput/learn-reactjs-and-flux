import React from 'react';
import Note from './Note.jsx';

class NoteList extends React.Component {
  render() {
    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
        {
          this.props.notes.map((note, index) => {
            return (
              <Note note={note} key={index} />
            )
          })
        }
      </div>
    )
  }
}

export default NoteList;