import React from 'react';
import Movie from './Movie.jsx';

class MovieResults extends React.Component {
  render() {
    return (
      <div>
        <h3 className="text-center">Results</h3>
        {
          this.props.movies.map(function (movie, i) {
            return (
              <Movie movie={movie} key={i} />
            )
          })
        }
      </div>
    );
  }
}
export default MovieResults;
