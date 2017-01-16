app.controller('orderController', function($scope, $http, $location,
		$globalVars, config) {
	
	
	$scope.baseUrl = config.apiUrl;
	$scope.login = $globalVars.login;
	$scope.shoppingCart = $globalVars.shoppingCart;
	$scope.numberOfItemsInCart = $scope.shoppingCart.orderItems.length;
	
			
	var address = '';
	var person = '';
	if($scope.login.person != undefined){
		person = $scope.login.person;
	}
	
	if(person != undefined && person.address != undefined){
		address = $scope.login.person.address;
	}
		
			
	$scope.order = {
			receiverName: person.fullName,
			contactNumber: person.mobileNumber,
			email: person.email,
			address:{
				addressLine1: address.addressLine1,
				addressLine2: address.addressLine2,
				city: address.city,
				province: address.province,
				postCode: address.postCode
			},
			cart: {
				id: $scope.shoppingCart.id
			}
	};

	$scope.makeOrder = function() {

		var url = config.apiUrl + 'order/makeOrder/'+$scope.shoppingCart.id;
		var orderData = $scope.order;
		
		$http({
			url : url,
			data : orderData,
			method : 'post',
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function successCallBack(response) {
			//$scope.syncShoppingCartData(response.data);
			//$scope.isItemSelected($scope.products);
			$location.path("/payment")
		}, function errorCallBack(error) {
			alert(JSON.stringify(error));
		});

	};
	
	
	$scope.back = function() {
		window.history.back();
	};
});
