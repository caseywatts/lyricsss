import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.set('someWords', this.randomize(this.get('someWords')));
    changeWord(this);
    this.set('timerIconState', 'glyphicon-pause');
    this.set('redScore', 0);
    this.set('blueScore', 0);
    this.set('activeTeam', 'blue');

    jQuery(window).bind("focus", function(event){
      this.Ember.$('.timer').timer('resume');
      // this.Ember.set('timerIconState', 'glyphicon-play');
    }).bind("blur", function(event){
      this.Ember.$('.timer').timer('pause');
      // this.Ember.setProperties('timerIconState', 'glyphicon-play');
    });
  },
  didInsertElement() {
    resetTimer(this);
  },
  randomize(words) {
    return words.sort(function () {
      return Math.random() - 0.5;
    });
  },
  actions: {
    nextWord() {
      changeWord(this);
      resetTimer(this);
      this.set('timerIconState', 'glyphicon-pause');
    },
    resetTimer() {
      resetTimer(this);
    },
    toggleTimer() {
      if (this.$('.timer').data('state') === 'running') {
        this.$('.timer').timer('pause');
        this.set('timerIconState', 'glyphicon-play');
      } else {
        this.$('.timer').timer('resume');
        this.set('timerIconState', 'glyphicon-pause');
      }
    },
    incrementScore() {
      changeScore(this, 1);
      changeWord(this);
      nextTeam(this);
      resetTimer(this);
    },
    decrementScore() {
      changeScore(this, -1);
      changeWord(this);
      nextTeam(this);
      resetTimer(this);
    }//,
    // nextTeam() {
    //   nextTeam(this);
    //   changeWord(this);
    //   resetTimer(this);
    // }
  }
});

function changeWord(_this) {
  let aRandomLyric = _this.get('someWords').pop();
  _this.set('aRandomLyric', aRandomLyric);
}

function resetTimer(_this) {
  _this.$('.timer').timer('remove');
  _this.$('.timer').timer({
    countdown: true,
    duration: '30s'
  });
}

function changeScore(_this, amount) {
  if (_this.get('activeTeam') === 'red') {
    _this.incrementProperty('redScore', amount);
  } else {
    _this.incrementProperty('blueScore', amount);
  }
}

function nextTeam(_this) {
  if (_this.get('activeTeam') === 'red') {
    _this.set('activeTeam', 'blue');
  } else {
    _this.set('activeTeam', 'red');
  }
}