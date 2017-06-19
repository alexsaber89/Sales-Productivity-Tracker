app.controller("registerController", ["$scope", "authFactory", function ($scope, authFactory) {

    $scope.register = register;

    function register() {
        if ($scope.username && $scope.password && $scope.confirmPassword) {
            authFactory.register($scope.username, $scope.password, $scope.confirmPassword);
        }
    };

}]);