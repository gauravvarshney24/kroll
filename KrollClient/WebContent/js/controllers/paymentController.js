app.controller('paymentController', function($scope, $http, $location,
		$globalVars, config) {
	
	
	$scope.baseUrl = config.apiUrl;
	$scope.login = $globalVars.login;
	$scope.shoppingCart = $globalVars.shoppingCart;
	$scope.numberOfItemsInCart = $scope.shoppingCart.orderItems.length;
	
	
	
	$scope.back = function() {
		window.history.back();
	};
});
