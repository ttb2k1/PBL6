import axios from 'axios';

const BASE_URL = 'http://52.74.132.234:3000/api/v1/';

class LessonService {
  getAllLevel(){
    return axios.get(BASE_URL + 'listlesson')
  }

  getVocabularyById(levelId, vocabId) {
    return axios.get(BASE_URL + '' + levelId, vocabId);
  }

  getLessonByLevel(levelId) {
    return axios.get(BASE_URL + 'lesson/' + levelId);
  }

  getDetail(id){
    return axios.get(BASE_URL + 'detail/' + id)
  }
}

export default new LessonService();
