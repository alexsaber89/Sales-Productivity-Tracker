app.controller("employeeHomeController", ["$scope", "$http", "ptoRequestFormFactory", function ($scope, $http, ptoRequestFormFactory) {

    $scope.showProductivityLog = showProductivityLog;
    $scope.showPTOLog = showPTOLog;

    function showProductivityLog() {
        $scope.productivityLog = true;
        $scope.ptoLog = false;
        $('.submitted-productivity-tab').addClass('active');
        $('.submitted-pto-tab').removeClass('active');
    };

    function showPTOLog() {
        $scope.ptoLog = true;
        $scope.productivityLog = false;
        $('.submitted-pto-tab').addClass('active');
        $('.submitted-productivity-tab').removeClass('active');
    };

    function setDefaultTab() {
        $scope.productivityLog = true;
        $scope.ptoLog = false;
        $('.submitted-productivity-tab').addClass('active');
        $('.submitted-pto-tab').removeClass('active');
    };

    setDefaultTab();

}]);