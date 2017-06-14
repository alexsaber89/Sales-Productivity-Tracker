app.controller("employeeHomeController", ["$scope", "$http", "ptoRequestFormFactory", function ($scope, $http, ptoRequestFormFactory) {

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
        //getPTOFormsByEmployeeId();
    };

    //function getPTOFormsByEmployeeId() {
    //    ptoRequestFormFactory.getPTOFormsByEmployeeId().then(function (forms) {
    //        console.log("forms: ", forms.data);
    //        $scope.ptoRequestForms = forms.data;
    //    });
    //};

}]);