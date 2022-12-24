import axios from 'axios';

const BASE_URL = 'https://nguyencon.site/api/v1/';

class AsssessmentService {
  postFile(file) {
    return axios.post(BASE_URL + 'evaluate', file);
  }

  getResult() {
    return axios.get(BASE_URL + 'detect');
  }
}

export default new AsssessmentService();
