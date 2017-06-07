app.controller("navController", ["$scope", "$location", function ($scope, $location) {

    $scope.showLogin = () => {
        $location.url('/');
    };

    $scope.showRegister = () => {
        $location.url('/register');
    };

    $scope.showHome = () => {
        $location.url('/home');
    };

}]);