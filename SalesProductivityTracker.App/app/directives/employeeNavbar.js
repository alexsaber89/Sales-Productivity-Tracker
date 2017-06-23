angular.module("app.directives.employeeNavbar", [])
    .directive("employeeNavbar", function () {
        return {
            restrict: "E",
            templateUrl: "app/templates/employeeNavbar.html",
            controller: function ($scope, $location) {

                $scope.logout = () => {
                    $location.url('/');
                };

                $scope.showHome = () => {
                    $location.url('/home');
                };

                $scope.showProductivityForm = () => {
                    $location.url('productivityform');
                };

                $scope.showPTORequestForm = () => {
                    $location.url('/requestpto');
                };

            }
        };
    });