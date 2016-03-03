import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is your name?',
          choices: [
            {
              id: 'a',
              text: 'Arno'
            },
            {
              id: 'b',
              text: 'Eduard'
            },
            {
              id: 'c',
              text: 'Kristian'
            },
            {
              id: 'd',
              text: 'Lauri'
            }
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'What is your mothers name?',
          choices: [
            {
              id: 'a',
              text: 'Janna'
            },
            {
              id: 'b',
              text: 'Karoliina'
            },
            {
              id: 'c',
              text: 'Ekaterina'
            }
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'What is your fathers name?',
          choices: [
            {
              id: 'a',
              text: 'Arno'
            },
            {
              id: 'b',
              text: 'Lauri'
            },
            {
              id: 'c',
              text: 'Kristian'
            },
            {
              id: 'd',
              text: 'Eino'
            }
          ],
          correct: 'd'
        },
        {
          id: 4,
          text: 'What is your friends name?',
          choices: [
            {
              id: 'a',
              text: 'Alex'
            },
            {
              id: 'b',
              text: 'Bobby'
            },
            {
              id: 'c',
              text: 'Jose'
            }
          ],
          correct: 'a'
        }
      ],
      score: 0,
      current: 1
    };
  }

  setCurrent(current) {
    this.setState({current});
  }

  setScore(score) {
    this.setState({score});
  }

  render() {
    if (this.state.current > this.state.questions.length) {
      var scorebox = <Results {...this.state} />;
    } else {
      var scorebox = <Scorebox {...this.state} />;
    }

    return (
      <div>
        {scorebox}
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
      </div>
    )
  }
}

export default App;