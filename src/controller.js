angular.module("ringleader.controller",[])

.controller('mainController',function($scope){

})

.controller('loginController',function($scope,authService){
	$scope.login = function(data){
		authService.login(data).then(function(response){
			alert(response.status + " ------ "+JSON.stringify(response));
		},function(err){
			if (err) { 
				console.log(err);
			}
		})
	}

})

.controller('registerController',function($scope,authService){
	$scope.register = function(data){
		authService.register(data).then(function(response){
			alert(response.status + " ------ "+JSON.stringify(response));
		},function(err){
			if (err) { 
				console.log(err);
			}
		})
	}
})