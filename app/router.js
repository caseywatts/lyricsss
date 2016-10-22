import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('main', { path: '' });
  this.route('casual-mode', { path: '/casual' });
  this.route('competative-mode', { path: '/competative' });
});

export default Router;
