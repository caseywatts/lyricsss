import Ember from 'ember';

export default Ember.Service.extend({
  iconState: 'glyphicon-pause',
  seconds: 0,
  timeLimit: 30, // Starting time on _timer, in seconds
  _timer: null,
  timeUp: false,
  _countdown() {
    if (this.get('seconds') <= 0) {
      this.set('timeUp', true);
    } else {
      this.incrementProperty('seconds', -1);
      this._timer = Ember.run.later(this, '_countdown', 1000);
    }
  },
  elapsedTime() {
    return this.get('timeLimit') - this.get('seconds');
  },
  pause() {
    Ember.run.cancel(this.get('_timer'));
    this.set('_timer', null);
    this.set('iconState', 'glyphicon-play');
  },
  reset() {
    Ember.run.cancel(this.get('_timer'));
    this.set('seconds', this.get('timeLimit') + 1);
    this._countdown();
    this.set('iconState', 'glyphicon-pause');
    this.set('timeUp', false);
  },
  resume() {
    this._countdown();
    this.set('iconState', 'glyphicon-pause');
  },
  toggle() {
    if (this.get('_timer')) {
      this.pause();
    } else {
      this.resume();
    }
  },
});
