import Ember from 'ember';

export default Ember.Service.extend({
  add(word, team, answerCorrect, time) {
    this.get('list').pushObject(new PastWord(word, team, answerCorrect, time));
  },
  changeWord() {
    let aRandomLyric = this.get('wordList').pop();
    this.set('aRandomLyric', aRandomLyric);
  },
  initialize(wordList) {
    wordList.sort(function() {
      return Math.random() - 0.5;
    });
    this.set('wordList', wordList);
    this.changeWord();
  },
  list: [],
  wordList: []
});

// Data structure containing information about each word tried
class PastWord {
  constructor(word, team, answerCorrect, time) {
    // string
    this.word = word;
    // string
    this.team = team;
    // boolean
    this.answerCorrect = answerCorrect;
    // string
    this.time = time;
  }
}