import Ember from "ember";

export default Ember.Route.extend({
	model: function(params) {
		return {
			query: params.query
		};
	},
	setupController: function(controller, model) {
		var BASE_URL = 'http://www.omdbapi.com/?t=',
			request_url = BASE_URL + encodeURIComponent(model.query),
			request = Ember.$.getJSON(request_url);

		request.then(function(data) {
			controller.set('result', data);
		});
    controller.set('query', model.query);
  }
});