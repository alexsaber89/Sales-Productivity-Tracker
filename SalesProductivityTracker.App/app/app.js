var app = angular.module("SalesProductivityTracker", ["ngRoute", "app.directives.productivityLog", "app.directives.ptoLog", "app.directives.managerProductivityByEmployee"]);

app.config([
    "$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/",
            {
                templateUrl: "app/partials/Login.html"
                //controller: "loginController"
            })
            .when("/home",
            {
                templateUrl: "app/partials/EmployeeHome.html"
                //controller: "employeeHomeController"
            })
            .when("/register",
            {
                templateUrl: "app/partials/Register.html"
                //controller: "registerController"
            })
            .when("/productivityform",
            {
                templateUrl: "app/partials/ProductivityForm.html"
                //controller: "productivityFormController"
            })
            .when("/requestpto",
            {
                templateUrl: "app/partials/PTORequestForm.html"
                //controller: "ptoRequestFormController"
            })
            .when("/manager-home",
            {
                templateUrl: "app/partials/ManagerHome.html"
                //controller: "managerHomeController"
            });

    }
]);

app.run(["$http", "$rootScope", "$location", "authFactory", function ($http, $rootScope, $location, authFactory) {

    $rootScope.token = sessionStorage.getItem('token');

    if ($rootScope.token) {
        $http.defaults.headers.common['Authorization'] = `bearer ${$rootScope.token}`;
        authFactory.determineIfManager().then(function (isManager) {
            console.log("isManager: ", isManager);
            $rootScope.isManager = isManager;
            if (isManager) {
                console.log("isManager is true, manager-home route attempted");
                $location.url('/manager-home');
            } else {
                $location.url('/home');
            }
        });
    }

    $rootScope.$on('$routeChangeStart', function (event, currRoute, prevRoute) {
        console.log("currRoute: ", currRoute);
        console.log("currRoute.originalPath: ", currRoute.originalPath);
        if (currRoute.originalPath === "/" || currRoute.originalPath === "/register" || currRoute.originalPath === "/manager-home") {
            console.log("manager-home route attempted");
            return;
        }

        if (!$rootScope.token) {
            event.preventDefault();
            $location.path("/");
            console.log("route prevented");
        }
        
    });
}]);