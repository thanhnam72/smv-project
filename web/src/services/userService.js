import axios from 'axios';

class UserService {
  login() {
    return axios.post(`${process.env.REACT_APP_API_URI}/movie/all`);
  }
}

export default UserService;