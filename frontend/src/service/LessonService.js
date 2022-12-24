import axios from 'axios';

const BASE_URL = 'https://nguyencon.site/api/v1/';

class LessonService {
  getAllLevel() {
    return axios.get(BASE_URL + 'listlesson');
  }

  getVocabularyById(levelId, vocabId) {
    return axios.get(BASE_URL + '' + levelId, vocabId);
  }

  getLessonByLevel(levelId) {
    return axios.get(BASE_URL + 'lesson/' + levelId);
  }

  getDetail(id) {
    return axios.get(BASE_URL + 'detail/' + id);
  }
}

export default new LessonService();
