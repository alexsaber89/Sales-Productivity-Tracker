app.controller("employeeHomeController", ["$scope", "$http", "ptoRequestFormFactory", function ($scope, $http, ptoRequestFormFactory) {

    $scope.productivityLog = true;
    $scope.ptoLog = false;
    $('.submitted-productivity-tab').addClass('active');
    $('.submitted-pto-tab').removeClass('active');

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
        //getPTOFormsByEmployeeId();
    };

    //function getPTOFormsByEmployeeId() {
    //    ptoRequestFormFactory.getPTOFormsByEmployeeId().then(function (forms) {
    //        console.log("forms: ", forms.data);
    //        $scope.ptoRequestForms = forms.data;
    //    });
    //};

}]);