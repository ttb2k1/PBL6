import axios from 'axios';

const BASE_URL = 'http://52.74.132.234:3000/api/v1/';


class LearnService {
  getVocabByName(name) {
    return axios.get(BASE_URL + '/search?name=' + name);
  }
}

export default new LearnService();
