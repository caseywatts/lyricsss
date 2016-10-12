import Ember from 'ember';

// Data structure containing information about each word tried
export default Ember.Object.extend({
  // boolean
  answerCorrect: null,
  correctnessGlyphicon: Ember.computed('answerCorrect', function() {
    if (this.get('answerCorrect') === true) {
      return 'glyphicon glyphicon-ok';
    } else if (this.get('answerCorrect') === false) {
      return 'glyphicon glyphicon-remove';
    } else {
      return;
    }
  }),
  // string
  team: null,
  // string
  time: null,
  // string
  word: null
});