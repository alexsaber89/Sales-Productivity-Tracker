var app = angular.module("SalesProductivityTracker", ["ngRoute", "app.directives.productivityLog", "app.directives.ptoLog"]);

app.config([
    "$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/",
            {
                templateUrl: "app/partials/Login.html",
                controller: "loginController"
            })
            .when("/home",
            {
                templateUrl: "app/partials/EmployeeHome.html",
                controller: "employeeHomeController"
            })
            .when("/register",
            {
                templateUrl: "app/partials/Register.html",
                controller: "registerController"
            })
            .when("/productivityform",
            {
                templateUrl: "app/partials/ProductivityForm.html",
                controller: "productivityFormController"
            })
            .when("/requestpto",
            {
                templateUrl: "app/partials/PTORequestForm.html",
                controller: "ptoRequestFormController"
            });

    }
]);

app.run(["$http", "$rootScope", "$location", function ($http, $rootScope, $location) {

    $rootScope.token = sessionStorage.getItem('token');

    if ($rootScope.token) {
        $http.defaults.headers.common['Authorization'] = `bearer ${$rootScope.token}`;
    }

    $rootScope.$on('$routeChangeStart', function (event, currRoute, prevRoute) {
        console.log("currRoute: ", currRoute);
        if (currRoute.originalPath === "/" || currRoute.originalPath === "/register") {
            return;
        }

        if (!$rootScope.token) {
            event.preventDefault();
            $location.path("/");
        }
        
    });
}]);