import Ember from "ember";

export default Ember.ObjectController.extend({
	query: '',
	result: '',
	actions: {
		query: function() {
			this.transitionToRoute('search', { query: this.get('query') });
		}
	}
});