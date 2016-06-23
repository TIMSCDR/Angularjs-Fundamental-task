'use strict';

describe('eventData', function(){
	var mockEventResource;
	beforeEach(module('eventsApp'));
	beforeEach(function(){
		mockEventResource = sinon.stub({get:function(){}});
		module(function($provide){
			$provide.value('resource', mockEventResource);
		})
	})
	describe('getEvent', function(){
		it('should call getresource.get with eventData',inject(function(eventData){
			eventData.getEvent(1);

			expect(mockEventResource.get(0)).toBe({id:1});
		}))
	})
})