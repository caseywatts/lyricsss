import Ember from 'ember';

export default Ember.Component.extend({
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
  click() {
    this.splashScreenToCards();
  }
});
