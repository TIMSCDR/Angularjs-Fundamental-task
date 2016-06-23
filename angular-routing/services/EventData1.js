eventsApp.factory('eventData', function($resource, $q){
	var resource=$resource('data/event/event.json');
	return{
		getEvent: function() {
			var deferred=$q.defer();
			 
			 resource.get({id:1},
			 	function(event){
			 		deferred.resolve(event);

			 	},
			 	function(response){
			 		deferred.reject(response);
			 	});
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
			console.log("getttin")
			var deferred = $q.defer()
			console.log("in getting all ")
			return resource.query()
			.$promise.then(function(res){
				delete res.$resolved
				delete res.$promise
				return res
			})
		}
	};
});