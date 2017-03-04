import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('route-splash-page', { path: '' });
  this.route('route-play-game', { path: 'play' });
  this.route('route-instructions', { path: 'instructions' });
});

export default Router;
