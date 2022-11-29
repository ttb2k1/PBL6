import axios from 'axios';
const BASE_URL = 'http://52.74.132.234:3000/api/v1/';


class SearchService {
  getLesson() {
    return axios.get(BASE_URL);
  }
}

export default new SearchService();
