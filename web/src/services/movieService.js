import axios from 'axios';

class MovieService {
  getMovies() {
    return axios.get(`${process.env.REACT_APP_API_URI}/movie/all`);
  }
}

export default MovieService;