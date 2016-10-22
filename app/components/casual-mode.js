import Ember from 'ember';

export default Ember.Component.extend({
  timer: Ember.inject.service('timer-service'),
  words: Ember.inject.service('word-service'),
  actions: {
    nextWord() {
      this.get('words').changeWord();
      this.get('timer').reset();
    }
  },
  didInsertElement() {
    debugger;
    this.get('words').initialize(this.get('someWords'));
    this.get('timer').reset();
  }
});
