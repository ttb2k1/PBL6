import axios from 'axios';

const BASE_URL = 'https://nguyencon.site/api/v1/';

class LearnService {
  getVocabByName(name) {
    return axios.get(BASE_URL + 'search?name=' + name);
  }

  postCanvas(file){
    return axios.post(BASE_URL + 'detect', file)
  }
}

export default new LearnService();
