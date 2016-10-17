import Ember from 'ember';

// Data structure containing information about each word tried
export default Ember.Object.extend({
  // boolean
  answerCorrect: null,
  icons: {
    correct: 'glyphicon glyphicon-ok',
    incorrect: 'glyphicon glyphicon-remove'
  },
  // string
  team: null,
  // string
  time: null,
  // string
  word: null,
  correctnessIcon: Ember.computed('answerCorrect', function() {
    if (this.get('answerCorrect') === true) {
      return this.get('icons.correct');
    } else if (this.get('answerCorrect') === false) {
      return this.get('icons.incorrect');
    } else {
      return;
    }
  })
});
