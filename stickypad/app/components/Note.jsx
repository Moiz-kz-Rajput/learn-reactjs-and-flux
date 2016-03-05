import React from 'react';

class Note extends React.Component {
  render() {
    return (
      <div className="column">
        <div className="note"><p>{this.props.note.text}</p></div>
      </div>
    )
  }
}

export default Note;