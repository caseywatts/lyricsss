import Ember from 'ember';

export default Ember.Component.extend({
  aRandomLyric: 'Lyricsss',
  someWords: ['a', 'b', 'c'],
  click() {
    let aRandomLyric = this.someWords.pop();
    this.set('aRandomLyric', aRandomLyric)
  }
});
