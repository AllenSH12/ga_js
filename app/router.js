import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GaJsENV.locationType
});

Router.map(function() {
	this.route('search', { path: '/search/:query' });
});

export default Router;
