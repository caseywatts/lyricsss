import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.set('someWords', this.randomize(this.get('someWords')));
    setWord(this);
    this.set('toggleIcon', 'glyphicon-pause');
    this.set('redScore', 0);
    this.set('blueScore', 0);
    this.set('activeTeam', 'blue');
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
      setWord(this);
      resetTimer(this);
      this.set('toggleIcon', 'glyphicon-pause');
    },
    resetTimer() {
      resetTimer(this);
    },
    toggleTimer() {
      if (this.$('.timer').data('state') === 'running') {
        this.$('.timer').timer('pause');
        this.set('toggleIcon', 'glyphicon-play');
      } else {
        this.$('.timer').timer('resume');
        this.set('toggleIcon', 'glyphicon-pause');
      }
    },
    incrementScore() {
      changeScore(this, 1);
    },
    decrementScore() {
      changeScore(this, -1);
    },
    nextTeam() {
      if (this.get('activeTeam') === 'red') {
        this.set('activeTeam', 'blue');
      } else {
        this.set('activeTeam', 'red');
      }
    }
  }
});

function setWord(_this) {
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