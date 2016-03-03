import React from 'react';

class Question extends React.Component {
  onChange() {
    return;
  }

  render() {
    const {question} = this.props;
    return (
      <div className="well">
        <h3>{question.text}</h3>
        <ul className="list-group">
          {
            question.choices.map(choice => {
              return(
                <li className="list-group-item" key={choice.id}>
                  {choice.id} <input type="radio" onchange={this.onChange.bind(this)} name={question.id} value={choice.id} /> {choice.text}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Question;