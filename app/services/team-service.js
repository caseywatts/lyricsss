import Ember from 'ember';

export default Ember.Service.extend({
  active: 'blue',
  blueScore: 0,
  // Changes score of current team.
  increaseScore(amount) {
    if (this.get('active') === 'red') {
      this.incrementProperty('redScore', amount);
    } else {
      this.incrementProperty('blueScore', amount);
    }
  },
  next() {
    if (this.get('active') === 'red') {
      this.set('active', 'blue');
    } else {
      this.set('active', 'red');
    }
  },
  redScore: 0,
  rounds: 0,
  _tries: 0, // Number of times the 'correct' or 'wrong' buttons are clicked. = Rounds * numTeams
  updateRoundCounter() {
    this.incrementProperty('_tries', 1);
    this.set('rounds', parseInt(this.get('_tries') / 2));
  }
});
