angular.module('ringleader.service',[])

.factory('authService',function($http){
	return{
		register : function(data){
			return $http({
                url: 'http://72.5.146.113/portal-app/API/addRingLeader/',
                method: 'POST',
                params: $.param(data),
                dataType: "jsonp",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                }
            })
		},
		login : function(data){
			return $http({
                url: 'http://72.5.146.113/portal-app/API/signIn/',
                method: 'POST',
                params: $.param(data),
                dataType: "jsonp",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                }
            })
		}
	}
})