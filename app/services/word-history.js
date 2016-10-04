import Ember from 'ember';

export default Ember.Service.extend({
  add(word, team, answerCorrect, time) {
    this.get('list').pushObject(new PastWord(word, team, answerCorrect, time));
  },
  list: []
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