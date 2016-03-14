import React from 'react';

class Result extends React.Component {
  render() {
    return (
      <div>
        <p className="content lead" dangerouslySetInnerHTML={{__html: this.props.result.Result}}></p>
      </div>
    )
  }
}

export default Result;