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


                getPTOFormsByEmployeeId();

                function getCurrentEmployeeId() {
                    ptoRequestFormFactory.getCurrentEmployeeId().then(function (response) {
                        return response;
                    });
                };

                function getPTOFormsByEmployeeId() {
                    ptoRequestFormFactory.getPTOFormsByEmployeeId(currentEmployeeId).then(function (forms) {
                        console.log("forms: ", forms.data);
                        $scope.ptoRequestForms = forms.data;
                    });
                };

            }
        };
    });