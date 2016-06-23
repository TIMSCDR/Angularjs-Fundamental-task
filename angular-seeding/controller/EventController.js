'use strict';

eventsApp.controller('EventController',
		function EventController($scope, eventData,$location, $anchorScroll){
			$scope.boolValue=false;
			// $scope.snippet='<span style="color:red">hi there</span>';
			$scope.mystyle={color:'red'};
			$scope.myclass="blue";
			$scope.buttonDisabled=true;
			$scope.sortorder='name';
			 // $scope.event=eventData.getEvent();
			 // $scope.event.then(
			 // 	function(event){console.log(event);},
			 // 	function(response){console.log(response);}
			 // 	);
			eventData.getEvent()
			.then(
				function(data){
				console.log(data);
				$scope.event= data;
			},
			function(response){
				console.log(response);
			});
			// console.log($scope.event);
			// $scope.event=eventData.getEvent();
			// $scope.event.then(function(event){
			// 	console.log(event);
			// }, function(status){
			// 	console.log(status);
			// });


			
		
		$scope.increment=function(session){
			
			session.upVoteCount++;
			
		};

		$scope.decrement=function(session){
			
			session.upVoteCount--;
		};

		$scope.scrollToSession=function(id){
			alert("entered");
			$location.hash(id);
			$anchorScroll();
		};
		
}
	);
