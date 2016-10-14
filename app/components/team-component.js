import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    correctAnswer() {
      this.get('wordHistory').add(
        this.get('wordHistory').get('currentWord'),
        this.get('teams').get('active'),
        true,
        this.get('timer').get('elapsedTime')
      );
      this.get('teams').increaseScore(1);
      this.get('wordHistory').changeWord();
      this.get('teams').next();
      this.get('timer').reset();
      this.get('teams').updateRoundCounter();
    },
    wrongAnswer() {
      this.get('wordHistory').add(
        this.get('wordHistory').get('currentWord'),
        this.get('teams').get('active'),
        false,
        this.get('timer').get('elapsedTime')
      );
      this.get('wordHistory').changeWord();
      this.get('teams').next();
      this.get('timer').reset();
      this.get('teams').updateRoundCounter();
    }
  },
  teams: Ember.inject.service('team-service'),
  timer: Ember.inject.service('timer-service'),
  wordHistory: Ember.inject.service('word-service')
});
