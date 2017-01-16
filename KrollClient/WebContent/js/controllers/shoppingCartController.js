app.controller('shoppingCartController', function($scope, $http, $location,
		$globalVars, config) {
	
	
	$scope.baseUrl = config.apiUrl;
	$scope.login = $globalVars.login;
	$scope.shoppingCart = $globalVars.shoppingCart;
	$scope.numberOfItemsInCart = $scope.shoppingCart.orderItems.length;
	
	$scope.increaseQuantity = function(cartItem){
		cartItem.qty ++;
		cartItem.totalAmount = cartItem.item.price * cartItem.qty;
	};
	
	$scope.decreaseQuantity = function(cartItem){
		if(cartItem.qty > 1){
			cartItem.qty --;
			cartItem.totalAmount = cartItem.item.price * cartItem.qty;
		}
	};
	

	$scope.back = function() {
		window.history.back();
	};
});
