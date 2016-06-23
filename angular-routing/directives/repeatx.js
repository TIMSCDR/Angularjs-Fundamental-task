'use strict';

eventsApp.directive('repeatX',function(){
	return{
		compile:function(element,attr){
			for(var i=0; i< Number(attr.repeatX)-1;i++){
				element.after(element.clone().attr('repeat-x',0));
			}
			return function(scope, element,attr,controller){
					attr.$observe('text',function(newValue){
						if(newValue === 'hello world'){
							element.css('color','red');
						}
					});
			}
		}
	}
})