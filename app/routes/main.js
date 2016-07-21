import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON("data/5000MostCommonLyricWords.json");
  }
});
