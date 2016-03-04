import React from 'react';
import AppStore from '../stores/AppStore';
import SearchForm from './SearchForm.jsx';
import MovieResults from './MovieResults.jsx';

function getAppState() {
  return {
    movies: AppStore.getMovieResults()
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    let movieResults = '';
    if (this.state.movies !== undefined && this.state.movies.length > 0) {
      movieResults = <MovieResults movies={this.state.movies} />;
    }
    return(
      <div>
        <SearchForm />
        {movieResults}
      </div>
    );
  }

  _onChange = () => {
    this.setState(getAppState());
  };
}

export default App;