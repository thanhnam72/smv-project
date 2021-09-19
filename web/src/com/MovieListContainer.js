import _ from 'lodash';
import React, { Component } from 'react';
import MovieItem from './MovieItem';

class MovieListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }
  render() {
    return (
      <div className="movie-container">
        {_.map(this.state.movies, mv => <MovieItem movie={mv} />)}
      </div>
    );
  }
}

export default MovieListContainer;
