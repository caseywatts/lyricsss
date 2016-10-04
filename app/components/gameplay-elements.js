import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    nextWord() {
      this.get('wordHistory').changeWord();
      this.get('timer').reset();
    },
    resetTimer() {
      this.get('timer').reset();
    },
    toggleTimer() {
      this.get('timer').toggle();
    }
  },
  didInsertElement() {
    this.get('timer').reset();
    this.get('wordHistory').initialize(this.get('someWords'));
  },
  teams: Ember.inject.service('team-tracking'),
  timer: Ember.inject.service('timer-control'),
  wordHistory: Ember.inject.service('word-history')
});