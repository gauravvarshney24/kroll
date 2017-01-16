var app = angular.module("myApp", [ 'ngRoute' ]);
app.config(function($routeProvider) {
	$routeProvider.when("/home", {
		controller : 'homeController',
		templateUrl : "home.html"
	}).when("/login", {
		controller : 'loginController',
		templateUrl : "login.html"
	}).when("/shoppingCart", {
		controller : 'shoppingCartController',
		templateUrl : "shoppingCart.html"
	}).when("/order", {
		controller : 'orderController',
		templateUrl : "order.html"
	}).when("/payment", {
		controller : 'paymentController',
		templateUrl : "payment.html"
	}).when("/product", {
		controller : 'productController',
		templateUrl : "product.html"
	}).otherwise({
		redirectTo : '/login'
	});
});

app.constant('config', {
	apiUrl : "http://localhost:8080/KrollServer/app/"
});

app.service('$globalVars', function() {
	var login = "";
	var shoppingCart = "";
	return {
		setLogin : function(value) {
			login = value;
		},
		getLogin : function() {
			return login;
		},
	};

	return {
		setShoppingCart : function(value) {
			shoppingCart = value;
		},
		getShoppingCart : function() {
			return shoppingCart;
		},
	};
});
