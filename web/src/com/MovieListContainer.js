import _ from 'lodash';
import React, { Component } from 'react';
import MovieItem from './MovieItem';
import MovieService from '../services/movieService';

class MovieListContainer extends Component {
  movieService = new MovieService();

  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  async componentDidMount() {
    var result = await this.movieService.getMovies();

    console.log(result);
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
