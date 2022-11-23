import axios from 'axios';

const BASE_URL = '';

class LessonService {
  getLevel(levelId) {
    return axios.get(BASE_URL + '' + levelId);
  }

  getVocabulary(levelId, vocabId) {
    return axios.get(BASE_URL + '' + levelId, vocabId);
  }
}

export default new LessonService();
