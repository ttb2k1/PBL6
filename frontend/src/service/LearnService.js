import axios from 'axios';
const BASE_URL = '';

class LearnService {
  getVocabByName(name) {
    return axios.get(BASE_URL + '' + name);
  }
}

export default new LearnService();
