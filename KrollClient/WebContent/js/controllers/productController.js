app.controller('productController', function($scope, $http, $location,
		$globalVars, config) {
	$scope.baseUrl = config.apiUrl;

	$scope.back = function() {
		window.history.back();
	};
});