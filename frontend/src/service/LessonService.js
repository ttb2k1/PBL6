import axios from 'axios';

const BASE_URL = 'https://belearnkanji.herokuapp.com/api/v1/';

class LessonService {
  getVocabularyById(levelId, vocabId) {
    return axios.get(BASE_URL + '' + levelId, vocabId);
  }

  geByLevel(levelId) {
    return axios.get(BASE_URL + 'lesson?level=' + levelId);
  }

  getDetail(id){
    return axios.get(BASE_URL + 'detail?kanji=' + id)
  }
}

export default new LessonService();
