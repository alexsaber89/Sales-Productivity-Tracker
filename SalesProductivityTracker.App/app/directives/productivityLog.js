angular.module("app.directives.productivityLog", [])
    .directive("productivityLog", function () {
        return {
            restrict: "E",
            scope: {
                productivityForms: "<"
            },
            templateUrl: "app/templates/productivityLog.html",
            controller: function ($scope, $location, productivityFormFactory) {

                $scope.getProductivityFormsByEmployeeId = getProductivityFormsByEmployeeId;

                getProductivityFormsByEmployeeId();

                function getProductivityFormsByEmployeeId() {
                    productivityFormFactory.getProductivityFormsByEmployeeId().then(function (forms) {
                        $scope.productivityForms = forms;
                        $location.url('/home');
                    });
                };
            }
        };
    });