'use strict';

eventsAppp.directive('datePicker',function(){
	return{
		restrict: 'A',
		link: function(scope, element){
			element.datepicker();
		}
	}
})