'use strict';

eventsApp.directive('mySample', function($compile){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'C', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<input type="text" ng-model="sampleData"/> {{sampleData}}<br/>'
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		// link: function(scope, element, attrs, controller) {
		// 	var markup="<input type='text' ng-model='sampleData'/>{{sampleData}}<br/>";
		// 	angular.element(element).html($compile(markup)(scope));
		// }
	};
});