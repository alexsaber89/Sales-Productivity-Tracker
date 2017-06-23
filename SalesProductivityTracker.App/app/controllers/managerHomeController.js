app.controller("managerHomeController", ["$scope", function ($scope) {

    $scope.showEmployeeProductivity = showEmployeeProductivity;
    $scope.showEmployeePTO = showEmployeePTO;

    function showEmployeeProductivity() {
        $scope.employeeProductivity = true;
        $scope.employeePTO = false;
        $('.employee-productivity-tab').addClass('active');
        $('.employee-pto-tab').removeClass('active');
    };

    function showEmployeePTO() {
        $scope.employeePTO = true;
        $scope.employeeProductivity = false;
        $('.employee-pto-tab').addClass('active');
        $('.employee-productivity-tab').removeClass('active');
    };

    function setDefaultTab() {
        $scope.employeeProductivity = true;
        $scope.employeePTO = false;
        $('.employee-productivity-tab').addClass('active');
        $('.employee-pto-tab').removeClass('active');
    };

    setDefaultTab();

}]);