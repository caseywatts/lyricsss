import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.set('someWords', this.randomize(this.get('someWords')));
  },
  aRandomLyric: '~Lyricsss~', // default "lyric" displayed
  click() {
    console.log(this.get('someWords'));
    let aRandomLyric = this.get('someWords').pop();
    this.set('aRandomLyric', aRandomLyric);
  },
  randomize(words) {
    return words.sort(function () {
      return Math.random() - 0.5;
    });
  }
});
