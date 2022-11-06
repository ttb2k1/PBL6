import axios from 'axios';
const API_URL = 'http://localhost:8080/api/v1/';

class LearnService {
  getLesson() {
    return axios.get(API_URL);
  }
}

export default new LearnService();
