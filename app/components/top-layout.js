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
  click() {
    this.splashScreenToCards();
  },
  didInsertElement() {
    this.get('words').initialize(this.get('someWords'));
    this.get('timer').reset();
  },
  init() {
    this._super(...arguments);
    this.set('showSplashScreen', true);
    this.set('showCards', false);
  },
  splashScreenToCards() {
    this.set('showSplashScreen', false);
    this.set('showCards', true);
  },
  touchEnd() {
    this.click();
  }
});
