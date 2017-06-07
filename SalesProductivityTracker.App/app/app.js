var app = angular.module("SalesProductivityTracker", ["ngRoute"]);

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
                templateUrl: "app/partials/EmployeeHome-ProductivityLog.html",
                controller: "productivityLogController"
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
            });

    }
]);

app.run(["$http", function ($http) {

    var token = sessionStorage.getItem('token');

    if (token)
        $http.defaults.headers.common['Authorization'] = `bearer ${token}`;

}
]);