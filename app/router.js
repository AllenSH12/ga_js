import Ember from 'ember';

var Router = Ember.Router.extend({
  location: GaJsENV.locationType
});

Router.map(function() {
	this.route('search', { path: '/search/:query' });
	this.resource('movies', function() {
		this.route('detail', { path: '/:movie_id' });
	});
});

export default Router;
