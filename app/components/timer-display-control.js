import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    resetTimer() {
      this.get('timer').reset();
    },
    toggleTimer() {
      this.get('timer').toggle();
    }
  },
  timer: Ember.inject.service('timer-control')
});
