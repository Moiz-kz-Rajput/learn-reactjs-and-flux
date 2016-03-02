import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'luhtonen',
      userData: [],
      userRepos: [],
      perPage: 10
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
      }),
      error: ((xhr, status, err) => {
        this.setState({username: null});
        alert(err);
      })
    });
  }

  // Get user repos
  getUserRepos() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
      dataType: 'json',
      cache: false,
      success: ((data) => {
        this.setState({
          userRepos: data
        });
      }),
      error: ((xhr, status, err) => {
        this.setState({username: null});
        alert(err);
      })
    });
  }

  handleFormSubmit(username) {
    this.setState({username}, function () {
      this.getUserData();
      this.getUserRepos();
    });
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    return(
      <div>
        <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
        <Profile {...this.state} />
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