import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON("data/752MostCommonLyricWordsInDictionary.json");
  }
});
