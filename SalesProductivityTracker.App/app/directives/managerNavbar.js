angular.module("app.directives.managerNavbar", [])
    .directive("managerNavbar", function () {
        return {
            restrict: "E",
            //scope: {
            //    productivityForms: "<"
            //},
            templateUrl: "app/templates/managerNavbar.html",
            controller: function ($scope, $location) {

                $scope.logout = () => {
                    $location.url('/');
                };

                $scope.showHome = () => {
                    $location.url('/manager-home');
                };

                //$scope.showProductivityForm = () => {
                //    $location.url('productivityform');
                //};

                //$scope.showPTORequestForm = () => {
                //    $location.url('/requestpto');
                //};

            }
        };
    });