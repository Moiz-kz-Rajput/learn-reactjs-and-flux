import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';

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

  // Get user data from GitHub
  getUserData() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: ((data) => {
        this.setState({
          userData: data
        });
        console.log(data);
      }),
      error: ((xhr, status, err) => {
        this.setState({username: null});
        alert(err);
      })
    });
  }

  componentDidMount() {
    this.getUserData();
  }

  render() {
    return(
      <div>
        <Profile userData={this.state.userData} />
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