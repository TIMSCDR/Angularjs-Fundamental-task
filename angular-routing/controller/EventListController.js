'use strict';

eventsApp.controller('EventListController',
 function($scope, $location, eventData){
	$scope.events = eventData.getAllEvents();
	console.log(eventData.getAllEvents());
	
	
});