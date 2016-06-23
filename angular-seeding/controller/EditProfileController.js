'use strict';

eventsApp.controller('EditProfileController',
	function EditProfileController($scope, gravatarUrlBuilder){
		// $scope.user={};
		$scope.getGravatarUrl= function(email){
			console.log(email);
			return gravatarUrlBuilder.buildGravatarUrl(email);
		}	
});