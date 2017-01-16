app.controller('homeController', function($scope, $http, $location,
		$globalVars, config) {

	$scope.baseUrl = config.apiUrl;
	$scope.login = $globalVars.login;
	$scope.shoppingCart = $globalVars.shoppingCart;
	$scope.numberOfItemsInCart = '0'
	$scope.products = '';

	$scope.showItems = true;

	
	/**
	 * Loading ShoppingCart of customer to check if there is any item in cart.
	 */
	var url = config.apiUrl + 'cart/findByLoginId/'+$scope.login.loginId;
	$http.get(url).then(function(response) {
		$scope.syncShoppingCartData(response.data)
	});
	
	
	/**
	 * Listing all the item selling by a company
	 */
	var url = config.apiUrl + 'product/findAllMasterProducts/1';
	$http.get(url).then(function(response) {
		$scope.products = response.data;
		$scope.isItemSelected($scope.products);
	});
	
	
	/**
	 * Adding an item to a active shopping cart of a customer 
	 */
	$scope.addItem = function(itemId) {
		var loginId = $scope.login.loginId;
		var url = config.apiUrl + 'cart/addItemToCart/'+loginId+'/'+itemId+'/1';
		
		$http({
			url : url,
			data : '',
			method : 'post',
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function successCallBack(response) {
			$scope.syncShoppingCartData(response.data);
			$scope.isItemSelected($scope.products);
		}, function errorCallBack(error) {
			alert(JSON.stringify(error));
		});
	};
	
	
	/**
	 * Utility: Synchronizing Shopping Cart information to all the 
	 * variables that is related to shopping cart in this scope.
	 */
	$scope.syncShoppingCartData = function(data){
		//alert(JSON.stringify(data));
		$globalVars.shoppingCart = data;
		$scope.shoppingCart = $globalVars.shoppingCart;

		if($scope.shoppingCart.orderItems != undefined){
			$scope.numberOfItemsInCart = $scope.shoppingCart.orderItems.length;
		}
		
	};
	
	
	/**
	 * Utility: Checking which listing items are already selected or exists in 
	 * customer's ShoppingCart
	 */
	$scope.isItemSelected = function(products) {
		angular.forEach($scope.shoppingCart.orderItems, function(cartItemValue, cartItemKey) {
			angular.forEach(products, function(productsValue, productsKey) {
				angular.forEach(productsValue.items, function(itemValue, itemKey) {
				//alert(cartItemValue.item.name+" | "+itemValue.name);
					if (cartItemValue.item.id === itemValue.id) {
						itemValue.selected = true;
						//alert(itemValue.id + " | "+itemValue.name + " | "+itemValue.selected);
					}
				});
			});
		});
	};

	
	/**
	 * Utility: Go to previous screen.
	 */
	$scope.back = function() {
		window.history.back();
	};

});
