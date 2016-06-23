'use strict';

eventsApp.directive('dateKeys', function(){
	// Runs during compile
	return {
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		link: function(scope, element, attrs, controller) {
			element.on('keydown',function(event) {
				/* Act on the event */
				console.log('pressed');
				if(isNumericKeyCode(event.keyCode) || isForwardSlashKeyCode(event.keyCode) || isNavigationKeyCode(event.keyCode)){
					console.log('pressed loop');
					return true;
				}
				return false;
			});
			
		}
	};
	function isNumericKeyCode(keyCode){
		return (event.keyCode >= 48 && event.keyCode <= 57)
		|| (event.keyCode >= 96 && event.keyCode <= 105);
	}
	function isForwardSlashKeyCode(keyCode){
		return event.keyCode === 191;
	}
	function isNavigationKeyCode(keyCode){
		switch(keyCode){
			case 8://backspace
			case 35://end
			case 36://home
			case 37://left
			case 38://up
			case 39://right
			case 40://down
			case 45://ins
			case 46: //del
				return true;
			default:
				return false;
		}
	}

});