app.controller("registerController", ["$scope", "authFactory", function ($scope, authFactory) {

    $scope.register = register;

    function register() {
        if ($scope.username && $scope.password && $scope.confirmPassword && $scope.firstName && $scope.lastName) {
            authFactory.register($scope.username, $scope.password, $scope.confirmPassword, $scope.firstName, $scope.lastName);
        } else {
            alert("Please register a valid username and password.");
        }
    };

}]);