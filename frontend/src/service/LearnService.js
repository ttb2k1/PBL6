import axios from 'axios';
const BASE_URL = 'https://belearnkanji.herokuapp.com/api/v1/';

class LearnService {
  getVocabByName(name) {
    return axios.get(BASE_URL + '/search?name=' + name);
  }
}

export default new LearnService();
