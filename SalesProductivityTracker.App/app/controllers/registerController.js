app.controller("registerController", ["$scope", "authFactory", function ($scope, authFactory) {

    $scope.register = register;

    function register() {
        authFactory.register($scope.username, $scope.password, $scope.confirmPassword);
    };

}]);