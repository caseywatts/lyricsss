import Ember from 'ember';
import PastWord from 'lyricsss/models/past-word';

export default Ember.Service.extend({
  pastWords: [],
  upcomingWords: [],
  add({word, team, answerCorrect, time}) {
    this.get('pastWords').pushObject(PastWord.create({
      word,
      team,
      answerCorrect,
      time
    }));
  },
  changeWord() {
    let currentWord = this.get('upcomingWords').pop();
    this.set('currentWord', currentWord);
  },
  // Must call this before any other functions. Feed it the word list.
  initialize(upcomingWords) {
    this.set('upcomingWords', this.get('randomize')(upcomingWords));
    this.changeWord();
  },
  randomize(words) {
    return words.sort(function() {
      return Math.random() - 0.5;
    });
  }
});
