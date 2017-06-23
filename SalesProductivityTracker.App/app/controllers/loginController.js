app.controller("loginController", ["$scope", "authFactory", function ($scope, authFactory) {

    $scope.login = login;
    $scope.logout = logout;

    logout();

    function login() {
        if ($scope.username && $scope.password) {
            authFactory.login($scope.username, $scope.password);
        } else {
            alert("Please login with a valid username and password.");
        }
    };

    function logout() {
        authFactory.logout();
    };

}]);