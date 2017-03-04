import Ember from 'ember';

export default Ember.Component.extend({
  teams: Ember.inject.service('team-service'),
  timer: Ember.inject.service('timer-service'),
  words: Ember.inject.service('word-service'),
  actions: {
    nextWord() {
      this.get('words').changeWord();
      this.get('timer').reset();
    }
  },
  didInsertElement() {
    Ember.$.getJSON("data/752MostCommonLyricWordsInDictionary.json").then((someWords) => {
      this.get('words').initialize(someWords);
      this.get('timer').reset();
    });
  }
});
