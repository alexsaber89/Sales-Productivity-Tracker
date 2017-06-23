angular.module("app.directives.managerNavbar", [])
    .directive("managerNavbar", function () {
        return {
            restrict: "E",
            templateUrl: "app/templates/managerNavbar.html",
            controller: function ($scope, $location) {

                $scope.logout = () => {
                    $location.url('/');
                };

                $scope.showHome = () => {
                    $location.url('/manager-home');
                };

            }
        };
    });