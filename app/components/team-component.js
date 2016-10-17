import Ember from 'ember';

export default Ember.Component.extend({
  teams: Ember.inject.service('team-service'),
  timer: Ember.inject.service('timer-service'),
  words: Ember.inject.service('word-service'),
  actions: {
    correctAnswer() {
      this.get('words').add({
        word: this.get('words.currentWord'),
        team: this.get('teams.active'),
        answerCorrect: true,
        time: this.get('timer.elapsedTime')
      });
      this.get('teams').increaseScore(1);
      this.get('words').changeWord();
      this.get('teams').next();
      this.get('timer').reset();
      this.get('teams').updateRoundCounter();
    },
    wrongAnswer() {
      this.get('words').add({
        word: this.get('words.currentWord'),
        team: this.get('teams.active'),
        answerCorrect: false,
        time: this.get('timer.elapsedTime')
      });
      this.get('words').changeWord();
      this.get('teams').next();
      this.get('timer').reset();
      this.get('teams').updateRoundCounter();
    }
  }
});
