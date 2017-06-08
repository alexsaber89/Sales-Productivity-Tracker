app.controller("navController", ["$scope", "$location", function ($scope, $location) {

    $scope.showLogin = () => {
        $location.url('/');
    };

    $scope.showProductivityForm = () => {
        $location.url('productivityform');
    };

    $scope.showPTORequestForm = () => {
        $location.url('/requestpto');
    };

}]);