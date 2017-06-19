angular.module("app.directives.managerProductivityByEmployee", [])
    .directive("managerProductivityByEmployee", function () {
        return {
            restrict: "E",
            scope: {
                productivityForms: "<"
            },
            templateUrl: "app/templates/managerProductivityByEmployee.html",
            controller: function ($scope, $location, managerProductivityByEmployeeFactory) {

                $scope.getAllProductivityForms = getAllProductivityForms;

                getAllProductivityForms();

                function getAllProductivityForms() {
                    managerProductivityByEmployeeFactory.getAllProductivityForms().then(function (forms) {
                        $scope.productivityForms = forms;
                        console.log("productivity forms: ", forms);
                        $location.url('/manager-home');
                    });
                };
            }
        };
    });