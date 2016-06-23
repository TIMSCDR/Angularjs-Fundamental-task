'use strict';

eventsApp.controller('EditEventController',
		function EditEventController($scope, eventData){
			$scope.saveEvent= function(event,newEventForm){
				console.log(newEventForm);
				if(newEventForm.$valid){
					eventData.save(event)
					.then(
						function(response){
							console.log('success',response);
						},
						function(response){
							console.log('Failure',response);
						}
						);

						// window.alert('event '+ event.name + ' saved!');
				}
			};

			$scope.cancelEdit= function(){
				window.location="index.html"
			}
		}
	);