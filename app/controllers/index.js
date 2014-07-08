import Ember from "ember";

export default Ember.ObjectController.extend({
	search: '',
	actions: {
		query: function() {
			var queryString = this.get('search');
			this.transitionToRoute('search', { query: queryString });
		}
	}
});