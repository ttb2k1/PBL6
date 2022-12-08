import axios from 'axios';
const BASE_URL = 'http://52.74.132.234:3000/api/v1/';

class Asssessment {
  postFile() {
    return axios.post(BASE_URL + 'evaluate');
  }

  getResult() {
    return axios.get(BASE_URL + 'detect');
  }
}

export default new Asssessment();
