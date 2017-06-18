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
                    //console.log("getAllProductivityForms (directive)");
                    managerProductivityByEmployeeFactory.getAllProductivityForms().then(function (forms) {
                        $scope.productivityForms = forms;
                        $location.url('/manager-home');
                    });
                };
            }
        };
    });