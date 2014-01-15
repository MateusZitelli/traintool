import endpoints

from protorpc import messages
from protorpc import message_types
from protorpc import remote

from api.models import MyModel
from api.models import Exercise, ExerciseDay, ExercisesLink
from api.models import Day
from api.models import Workout



@endpoints.api(name="gupapi",version="v1", description="TrainTool Open Api",
            allowed_client_ids=[endpoints.API_EXPLORER_CLIENT_ID],
            audiences=[endpoints.API_EXPLORER_CLIENT_ID])
class GupApi(remote.Service):
    """ GymUP Open API """

    @MyModel.method(user_required=True,
                    path='mymodel',
                    http_method='POST',
                    name='mymodel.insert')
    def MyModelInsert(self,my_model):
        my_model.owner = endpoints.get_current_user()
        my_model.put()
        return my_model

    @MyModel.query_method(user_required=True,
                        path="mymodels",
                        http_method='GET',
                        name='mymodels.list')
    def MyModelList(self,query):
        return query

    #TESTING THE AUTH ABOVE


    @Exercise.query_method(query_fields=('limit','order','pageToken',),
                            path='exercises',
                            http_method="GET",
                            name='exercises.list')
    def ExercisesList(self,query):
        """ Queries the entire DB for retrieving the Exercises """
        return query


    @Exercise.method(request_fields=('id',),
                    path="exercise",
                    http_method="GET",
                    name="exercise.get")
    def ExerciseGet(self,exercise):
        """ Queries the DB for an Exercise with the given ID. """
        if not exercise.from_datastore:
            raise endpoints.NotFoundException('exercise not found')
        return exercise


    @Exercise.method(response_fields=('id',),
                    path='exercise',
                    http_method='POST',
                    name='exercise.post')
    def ExercisePost(self,exercise):
        """ Updates or Creates an Exercise in the Db """
        owner = endpoints.get_current_user()
        if owner:
            exercise.owner = owner 
        exercise.put()
        return exercise


    @Exercise.method(request_fields=('id',),
                    path="exercise",
                    http_method="DELETE",
                    name="exercise.delete")
    def ExerciseDelete(self,exercise):
        """ Deletes an Exercise from the Db if the ID matches one. """
        if not exercise.from_datastore:
            raise endpoints.NotFoundException('exercise not found')
        try:
            exercise.key.delete()
        except:
            raise endpoints.BadRequestException('exercise found but an error '+ 
                'an error happened while deleting')
        return exercise


    #EXERCISEDAY

    @ExerciseDay.method(request_fields=('id',),
                        path="exerciseday",
                        http_method='GET',
                        name='exerciseday.get')
    def ExerciseDayGet(self,exerciseday):
        if not exerciseday.from_datastore:
            raise endpoints.NotFoundException('exerciseday not found')
        return exerciseday


    @ExerciseDay.query_method(query_fields=('limit','pageToken',),
                            path='exercisedays',
                            http_method='GET',
                            name='exercisedays.list')
    def ExerciseDaysList(self,query):
        return query


    @ExerciseDay.method(request_fields=('id',),
                        path='exerciseday',
                        http_method='DELETE',
                        name='exerciseday.delete')
    def ExerciseDayDelete(self,exerciseday):
        if not exerciseday.from_datastore:
            raise endpoints.NotFoundException('exerciseday not found')
        return exerciseday


    @ExerciseDay.method(response_fields=('id',),
                        path='exerciseday',
                        http_method='POST',
                        name='exerciseday.post')
    def ExerciseDayPost(self,exerciseday):
        exerciseday.put()
        return exerciseday


    #EXERCISE LINK

    @ExercisesLink.query_method(query_fields=('limit','pageToken',),
                                path='exerciseslinks',
                                http_method='GET',
                                name='exerciseslinks.list')
    def ExercisesLinksList(self,query):
        return query


    #DAY


    @Day.query_method(query_fields=('limit','pageToken',),
                    collection_fields=('name','description','exercises_links',),
                    path='days',
                    http_method="GET",
                    name='days.list')
    def DaysList(self,query):
        return query


    @Day.method(request_fields=('id',),
                path='day',
                http_method="DELETE",
                name="day.delete")
    def DayDelete(self,day):
        if not day.from_datastore:
            raise endpoints.NotFoundException('day not found')
        try:
            day.key.delete()
        except:
            raise endpoints.BadRequestException(
                'day found but an error occurred')


    @Day.method(request_fields=('id',),
                path='day',
                http_method='GET',
                name='day.get')
    def DayGet(self,day):
        if not day.from_datastore:
            raise endpoints.NotFoundException('day not found')
        return day


    @Day.method(response_fields=('id',),
                path='day',
                http_method='POST',
                name='day.post')
    def DayPost(self,day):
        day.put()
        return day
