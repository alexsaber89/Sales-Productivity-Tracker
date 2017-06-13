app.controller("employeeHomeController", ["$scope", "$http", function ($scope, $http) {

    $scope.productivityLog = true;
    $scope.ptoLog = false;

    $scope.showProductivityLog = showProductivityLog;
    $scope.showPTOLog = showPTOLog;

    function showProductivityLog() {
        $scope.productivityLog = true;
        $scope.ptoLog = false;
    };

    function showPTOLog() {
        $scope.ptoLog = true;
        $scope.productivityLog = false;
    };

}]);