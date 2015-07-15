angular.module('RoutingApp', ['ngRoute'])
	.config( ['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/about', {
				templateUrl: 'about.html'
			})
			.when('/home', {
				templateUrl: 'home.html'
			})
			.when('/register', {
				templateUrl: 'register.html'
			})
			.when('/forgotpassword', {
				templateUrl: 'forgotpassword.html'
			})

			.otherwise({
				redirectTo: '/'
			});
	}]);
