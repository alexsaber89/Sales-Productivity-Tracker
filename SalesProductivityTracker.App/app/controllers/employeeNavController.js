app.controller("employeeNavController", ["$scope", "$location", function ($scope, $location) {

    $scope.logout = () => {
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