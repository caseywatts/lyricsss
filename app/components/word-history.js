import Ember from 'ember';

export default Ember.Component.extend({
  wordHistory: Ember.inject.service('word-service'),
});
