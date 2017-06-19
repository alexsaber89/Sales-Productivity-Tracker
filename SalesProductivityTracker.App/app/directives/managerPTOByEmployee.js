angular.module("app.directives.managerPtoByEmployee", [])
    .directive("managerPtoByEmployee", function () {
        return {
            restrict: "E",
            scope: {
                ptoRequestForms: "<"
            },
            templateUrl: "app/templates/managerPTOByEmployee.html",
            controller: function ($scope, $location, managerPTOByEmployeeFactory) {
                console.log("app.directives.managerPtoByEmployee");
                $scope.getAllPTOForms = getAllPTOForms;
                $scope.approvePTOFormByPTOFormId = approvePTOFormByPTOFormId;

                getAllPTOForms();

                function getAllPTOForms() {
                    console.log("GET ALL PTO FORMS");
                    managerPTOByEmployeeFactory.getAllPTOForms().then(function (forms) {
                        $scope.ptoRequestForms = forms;
                        $location.url('/manager-home');
                    });
                };

                function approvePTOFormByPTOFormId(formId) {
                    managerPTOByEmployeeFactory.approvePTOFormByPTOFormId(formId).then(function (response) {
                        getAllPTOForms();
                    });
                }
            }
        };
    });