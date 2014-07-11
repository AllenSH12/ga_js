import Ember from 'ember';

export default Ember.ObjectController.extend({
	actorsArray: function() {
		var actors = this.get('model.Actors');
		return actors.split(',');
	}.property('model.Actors')
});