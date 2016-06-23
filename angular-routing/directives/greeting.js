'use strict';

eventsApp.directive('greeting', function(){
	return{
		restrict: 'E',
		replace: true,
		transclude:true,
		template: "<button class='btn btn-default' ng-click='sayHello()'>Say Hello</button>",
		controller: function($scope){
			var greetings=['hello'];
			$scope.sayHello=function(){
				alert(greetings.join());
				console.log(greetings);

			}
			this.addGreeting = function(greeting){
				greetings.push(greeting);
				console.log(greeting);
			}
		}
	}
})
.directive('finnish',function(){
	return {
		restrict: 'A',
		require:'^greeting',
		link:function(scope,element,attr,controller){
			controller.addGreeting('hei');
		}
	}
})
.directive('eindi',function(){
	return{
		restrict: 'A',
		require:'^greeting',
		link:function(scope,element,attr,controller){
			controller.addGreeting('Namaste');
		}
	}
})
.directive('darathi',function(){
	return{
		restrict: 'A',
		require:'^greeting',
		link:function(scope,element,attr,controller){
			controller.addGreeting('Namaskar');
		}
	}
})
