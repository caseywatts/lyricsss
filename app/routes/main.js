import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return $.getJSON("data/mostCommonWords.json")
  },
  afterModel(model) {
    model = model.slice(0,10);
  }
});
