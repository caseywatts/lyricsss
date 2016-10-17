import Ember from 'ember';

export default Ember.Component.extend({
  timer: Ember.inject.service('timer-service'),
  actions: {
    resetTimer() {
      this.get('timer').reset();
    },
    toggleTimer() {
      this.get('timer').toggle();
    }
  }
});
