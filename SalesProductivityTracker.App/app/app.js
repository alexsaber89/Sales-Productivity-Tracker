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

app.run(["$http", function ($http) {

    var token = sessionStorage.getItem('token');

    if (token)
        $http.defaults.headers.common['Authorization'] = `bearer ${token}`;

}
]);