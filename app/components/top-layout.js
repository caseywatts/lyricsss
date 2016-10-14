import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    nextWord() {
      this.get('wordHistory').changeWord();
      this.get('timer').reset();
    }
  },
  click() {
    this.splashScreenToCards();
    this.get('timer').reset();
  },
  didInsertElement() {
    this.get('wordHistory').initialize(this.get('someWords'));
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
  },
  teams: Ember.inject.service('team-service'),
  timer: Ember.inject.service('timer-service'),
  wordHistory: Ember.inject.service('word-service')
});
