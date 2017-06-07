app.controller("navController", ["$scope", "$location", function ($scope, $location) {

    $scope.showProductivityForm = () => {
        $location.url('productivityform');
    };

    $scope.showRegister = () => {
        $location.url('/register');
    };

    $scope.showHome = () => {
        $location.url('/home');
    };

}]);