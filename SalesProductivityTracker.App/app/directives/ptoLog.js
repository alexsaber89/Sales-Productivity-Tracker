angular.module("app.directives.ptoLog", [])
    .directive("ptoLog", function () {
        return {
            restrict: "E",
            scope: {
                ptoRequestForms: "<"
            },
            templateUrl: "app/templates/ptoLog.html",
            controller: function ($scope, $location, ptoRequestFormFactory) {

                $scope.getPTOFormsByEmployeeId = getPTOFormsByEmployeeId;

                getPTOFormsByEmployeeId();

                //function getCurrentEmployeeId() {
                //    ptoRequestFormFactory.getCurrentEmployeeId().then(function (response) {
                //        $scope.currentEmployeeId = response;
                //        return response;
                //    });
                //};

                function getPTOFormsByEmployeeId() {
                    ptoRequestFormFactory.getPTOFormsByEmployeeId().then(function (forms) {
                        console.log("ptoRequestFormController.submitPTORequestForm forms: ", forms);
                        $scope.ptoRequestForms = forms;
                        $location.url('/home');
                    });
                };
            }
        };
    });