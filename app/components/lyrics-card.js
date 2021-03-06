import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set('someWords', this.randomize(this.get('someWords')));
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
    let aRandomLyric = this.get('someWords').pop();
    this.set('aRandomLyric', aRandomLyric);
  },
  randomize(words) {
    return words.sort(function () {
      return Math.random() - 0.5;
    });
  }
});
