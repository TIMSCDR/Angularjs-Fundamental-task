'use strict';

eventsApp.directive('gravatar', function(gravatarUrlBuilder){
	return{
		restrict:'E',
		template:'<img class="img-circle img-responsive"/>',
		replace:true,
		link:function(scope,element,attr,controller){
			attr.$observe('email', function(newValue, oldValue){
				if(newValue!=oldValue){
					attr.$set('src',gravatarUrlBuilder.buildGravatarUrl(newValue));
				}
			});
		}
	}
})