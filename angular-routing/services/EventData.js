eventsApp.factory('eventData', function($resource, $q, $timeout){
	var resource=$resource('data/:id'+'.json',{id:'@id'});
	return{
		getEvent: function(eventId) {
			var deferred=$q.defer();
			 $timeout(function(){
			 	 resource.get({id:eventId},
			 	function(event){
			 		deferred.resolve(event);

			 	},
			 	function(response){
			 		deferred.reject(response);
			 	});
			 },5000);
				 return deferred.promise;
			
			},
		save: function(event){
			var deferred=$q.defer();
			event.id=99;
			resource.save(event,
				function(response){
			 		deferred.resolve(response);
			 		

			 	},
			 	function(response){
			 		deferred.reject(response);
			 	});
			return deferred.promise;
		},
		getAllEvents: function(){

		
			
			return resource.query({id:'event'});

		}
	};
});