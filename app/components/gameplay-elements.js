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
      this.changeWord();
      this.get('teams').next();
      this.get('timer').reset();
      this.get('teams').updateRoundCounter();
    },
    nextWord() {
      this.changeWord();
      this.get('timer').reset();
    },
    resetTimer() {
      this.get('timer').reset();
    },
    toggleTimer() {
      this.get('timer').toggle();
    },
    wrongAnswer() {
      this.get('wordHistory').add(
        this.get('aRandomLyric'),
        this.get('teams').get('active'),
        false,
        this.get('timer').get('elapsedTime')
      );
      this.changeWord();
      this.get('teams').next();
      this.get('timer').reset();
      this.get('teams').updateRoundCounter();
    }
  },
  changeWord() {
    let aRandomLyric = this.get('someWords').pop();
    this.set('aRandomLyric', aRandomLyric);
  },
  didInsertElement() {
    this.get('timer').reset();
    this.get('someWords').sort(function() {
      return Math.random() - 0.5;
    });
    this.changeWord();

    $(window).bind('focus', function() {
      this.get('timer').resume();
      // this.Ember.set('timerIconState', 'glyphicon-play'); //This doesn't work, maybe I can fix it sometime
    }).bind('blur', function() {
      this.get('timer').pause();
      // this.Ember.setProperties('timerIconState', 'glyphicon-play'); //This doesn't work, maybe I can fix it sometime
    });
  },
  teams: Ember.inject.service('team-tracking'),
  timer: Ember.inject.service('timer-control'),
  wordHistory: Ember.inject.service('word-history')
});