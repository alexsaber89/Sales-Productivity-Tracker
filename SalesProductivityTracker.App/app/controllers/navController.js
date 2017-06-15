app.controller("navController", ["$scope", "$location", function ($scope, $location) {

    $scope.showLogin = () => {
        $location.url('/');
    };

    $scope.showHome = () => {
        $location.url('/home');
    };

    $scope.showProductivityForm = () => {
        $location.url('productivityform');
    };

    $scope.showPTORequestForm = () => {
        $location.url('/requestpto');
    };

}]);