'use strict';

eventsApp.filter('durations',function(){

return function(duration){
	switch(duration){
		case 1:
		return "Half hours";
		case 2:
		return "1 hours";
		case 3:
		return "Half day";
		case 4:
		return "Full day";
	}

}
});