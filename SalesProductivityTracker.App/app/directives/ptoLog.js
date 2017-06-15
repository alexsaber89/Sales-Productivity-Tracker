angular.module("app.directives.ptoLog", [])
    .directive("ptoLog", function () {
        return {
            restrict: "E",
            scope: {
                ptoRequestForms: "<"
            },
            templateUrl: "app/templates/ptoLog.html",
            controller: function ($scope, ptoRequestFormFactory) {

                $scope.getPTOFormsByEmployeeId = getPTOFormsByEmployeeId;
                $scope.currentEmployeeId = null;

                getCurrentEmployeeId();

                function getCurrentEmployeeId() {
                    ptoRequestFormFactory.getCurrentEmployeeId().then(function (response) {
                        $scope.currentEmployeeId = response;
                        return response;
                    });
                };

                function getPTOFormsByEmployeeId() {
                    ptoRequestFormFactory.getCurrentEmployeeId().then(function (getCurrentEmployeeIdResponse) {
                        $scope.currentEmployeeId = getCurrentEmployeeIdResponse;
                        ptoRequestFormFactory.getPTOFormsByEmployeeId($scope.currentEmployeeId).then(function (forms) {
                            console.log("ptoRequestFormController.submitPTORequestForm response: ", response);
                            $location.url('/home');
                        });
                    });
                };
            }
        };
    });