app.controller("loginController", ["$scope", "authFactory", function ($scope, authFactory) {

    $scope.login = login;

    function login() {
        authFactory.login($scope.username, $scope.password);
    };

}]);