/*jshint camelcase: false */
TrainTool.ExercisesController = Ember.ArrayController.extend({
  sortProperties: ['created'],
  sortAscending: false,
  actions:{
    createExercise:function(){
      // Get values from inputs
      var name = this.get('exercise-name');
      var comment = this.get('exercise-comment');
      var equipament = this.get('exercise-equipament');
      var execution = this.get('exercise-execution');
      var reps = this.get('exercise-reps');
      var body_part = this.get('exercise-bodypart');
      // Reps must be a Array of integer, so split in each sequence
      // of non numerals.
      if(typeof reps === 'string'){
        reps = reps.split(/\D+/);
      }
      var exercise = this.store.createRecord('exercise', {
        name:name === null ? '' : name,
        body_part:body_part,
        comment:comment === null ? '' : comment,
        equipament:equipament === null ? '' : equipament,
        execution:execution === null ? '' : execution,
        reps:reps === null ? '' : reps
      });
      exercise.save();
    }
  }
});

TrainTool.ExercisesPageController = TrainTool.ExercisesController.extend();

TrainTool.ExerciseInListController = Ember.ObjectController.extend({
  actions:{
    //Toggle the details of an exercise
    toggleDetails:function(){
      this.toggleProperty('showDetails');
    }
  },
  showDetails:false
});

TrainTool.ExerciseController = Ember.ObjectController.extend({});

TrainTool.TrainsNewController = Ember.ObjectController.extend({
  selectedDay : null,
  actions : {
    newDay : function(){
      var day = this.store.createRecord('day');
      this.get('days').pushObject(day);
      this.send('selectDay', day);
    },

    selectDay : function(day){
      this.get('days').forEach(function(day){
        day.set('selected', false);
      });

      day.set('selected', true);
      this.set('selectedDay', day);
    }
  }
});

TrainTool.DayController = Ember.ObjectController.extend({
  displayedName : function(){
    var name = this.get('name');
    return name === undefined || name === '' ? 'Sem nome' : name;
  }.property('name'),

  withoutName : function(){
    var name = this.get('name');
    return name === undefined || name === '';
  }.property('name')
});