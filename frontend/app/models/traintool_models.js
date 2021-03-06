/* jshint camelcase: false */
TrainTool.Exercise = DS.Model.extend({
	body_part:DS.attr('string'),
	comment:DS.attr('string'),
	created:DS.attr('date'),
	equipament:DS.attr('string'),
	execution:DS.attr('string'),
	name:DS.attr('string'),
	reps:DS.attr('array'),
	day_id: DS.belongsTo('day')
});

TrainTool.Day = DS.Model.extend({
	created:DS.attr('date'),
	description:DS.attr('string'),
	workout_id: DS.belongsTo('workout'),
	exercises: DS.hasMany('exercise'),
  proper_time : DS.attr('number')
});

TrainTool.Workout = DS.Model.extend({
  name:DS.attr('string'),
	comment:DS.attr('string'),
	created:DS.attr('date'),
	description:DS.attr('string'),
	objective:DS.attr('string'),
	days:DS.hasMany('day')
});