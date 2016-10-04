import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    correctAnswer() {
      this.get('wordHistory').add(
        this.get('aRandomLyric'),
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
        this.get('aRandomLyric'),
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
  teams: Ember.inject.service('team-tracking'),
  timer: Ember.inject.service('timer-control'),
  wordHistory: Ember.inject.service('word-history')
});
