app.controller('loginController', function($scope, $http, $location, $globalVars, config) {

	$scope.msg = "";
	$scope.baseUrl = config.apiUrl;

	$scope.doLogin = function() {
		var url = config.apiUrl + 'login/verify';
		var data = $scope.login;
		$scope.login.userType = 0;
		$http({
			url : url,
			data : data,
			method : 'post',
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(
			function successCallBack(response) {
				if (response.data.id === '0') {
					$scope.showAlert = true;
					$scope.msg = "Invalid Login Id or Password!";
				}
				if (response.data.id > 0) {
					$scope.msg = "Success!";
					$globalVars.login = response.data;
					$location.path("/home");
				}
			},
			function errorCallBack(error) {
				alert(error);
				$scope.msg = "Technical Problem. Work is going on will be back in a momment";
			});
	};

	$scope.back = function() {
		window.history.back();
	};
});
