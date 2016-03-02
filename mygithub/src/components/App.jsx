import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'luhtonen',
      userData: [],
      userRepos: [],
      perPage: 5
    };
  }
  render() {
    return(
      <div>
        {this.props.clientId}
      </div>
    );
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};
App.defaultProps = {
  clientId: 'a3dff14c18490e671786',
  clientSecret: '573337655768833fc1e37f440879c652fe18c603'
};

export default App;