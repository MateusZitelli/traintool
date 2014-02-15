/*globals TrainTool*/
TrainTool.ExercisesController = Ember.ArrayController.extend({
	actions:{
		createExercise:function(){
			var name = this.get('exName');
			var comment = this.get('exComment');
			var equipament = this.get('exEquipament');
			var execution = this.get('exExecution');
			var reps = this.get('exReps');
			var creation = new Date();
			if(typeof reps === 'string'){
				reps = reps.split(/\D+/);
			}
			var exercise = this.store.createRecord('exercise',
			{
				name:name,
				comment:comment,
				equipament:equipament,
				execution:execution,
				reps:reps,
				creation:creation
			});
			exercise.save();
		}
	}
});

TrainTool.ExerciseController = Ember.ObjectController.extend({
	actions:{
		toggleDetails:function(){
			this.set('showDetails', !this.get('showDetails'));
		}
	},
	showDetails:false
});