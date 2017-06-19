var app = angular.module("SalesProductivityTracker", ["ngRoute", "app.directives.employeeNavbar", "app.directives.productivityLog", "app.directives.ptoLog", "app.directives.managerProductivityByEmployee", "app.directives.managerPtoByEmployee"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/",
        {
            templateUrl: "app/partials/Login.html"
        })
        .when("/home",
        {
            templateUrl: "app/partials/EmployeeHome.html"
        })
        .when("/register",
        {
            templateUrl: "app/partials/Register.html"
        })
        .when("/productivityform",
        {
            templateUrl: "app/partials/ProductivityForm.html"
        })
        .when("/requestpto",
        {
            templateUrl: "app/partials/PTORequestForm.html"
        })
        .when("/manager-home",
        {
            templateUrl: "app/partials/ManagerHome.html"
        })
        .otherwise("/");
}]);

app.run(["$http", "$rootScope", "$location", "authFactory", function ($http, $rootScope, $location, authFactory) {

    $rootScope.token = sessionStorage.getItem('token');

    if ($rootScope.token) {
        $http.defaults.headers.common['Authorization'] = `bearer ${$rootScope.token}`;
        authFactory.determineIfManager().then(function (isManager) {
            $rootScope.isManager = isManager;
            if (isManager) {
                $location.url('/manager-home');
            } else {
                $location.url('/home');
            }
        });
    }

    $rootScope.$on('$routeChangeStart', function (event, currRoute, prevRoute) {
        if (currRoute.originalPath === "/" || currRoute.originalPath === "/register" || currRoute.originalPath === "/manager-home") {
            return;
        }

        if (!$rootScope.token) {
            event.preventDefault();
            $location.path("/");
        }
        
    });
}]);