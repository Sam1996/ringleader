var app = angular.module('ringleader',['ui.router','ngResource','ringleader.controller','ringleader.service'])

.config(function($stateProvider,$urlRouterProvider,$httpProvider,$sceDelegateProvider){
	$stateProvider
		.state("main",{
			url : "/",
			templateUrl : "views/main.html",
			controller: "mainController" 
		})
		.state("login",{
			url : "/login",
			templateUrl : "views/login.html",
			controller: "loginController" 
		})
		.state("register",{
			url : "/register",
			templateUrl : "views/register.html",
			controller: "registerController" 
		});
	$urlRouterProvider.otherwise("/");
	$httpProvider.defaults.useXDomain = true;
  	
})

// app.run(['$http', function($http) {
//     $http.defaults.headers.common['Authorization'] = 'Basic';
// }]);