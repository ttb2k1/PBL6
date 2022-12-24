import axios from 'axios';
const BASE_URL = 'https://nguyencon.site/api/v1/';

class SearchService {
  getLesson() {
    return axios.get(BASE_URL);
  }
}

export default new SearchService();
