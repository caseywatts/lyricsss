import Ember from 'ember';

export default Ember.Component.extend({
  words: Ember.inject.service('word-service'),
});
