angular.module("app.directives.ptoLog", [])
    .directive("ptoLog", function () {
        return {
            restrict: "E",
            scope: {
                ptoRequestForms: "<"
            },
            templateUrl: "app/templates/ptoLog.html",
            controller: function ($scope, $http, ptoRequestFormFactory) {

                $scope.getPTOFormsByEmployeeId = getPTOFormsByEmployeeId;
                getPTOFormsByEmployeeId();

                function getPTOFormsByEmployeeId() {
                    ptoRequestFormFactory.getPTOFormsByEmployeeId().then(function (forms) {
                        console.log("forms: ", forms.data);
                        $scope.ptoRequestForms = forms.data;
                    });
                };

            }
        };
    });