app.factory("authFactory", ["$http", "$location", "$rootScope", function ($http, $location, $rootScope) {

    var service = {
        login: login,
        register: register
    }
    return service;

    function login(_username, _password) {
            $http({
                method: 'POST',
                url: "/Token",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: { grant_type: "password", username: _username, password: _password }
            })
             .then((response) => {
                 sessionStorage.setItem('token', response.data.access_token);
                 $rootScope.token = response.data.access_token;
                 $http.defaults.headers.common['Authorization'] = `bearer ${response.data.access_token}`;
                 $location.url('/home');
             });
    };

    function register(_username, _password, _confirmPassword) {
            $http({
                method: 'POST',
                url: "/api/account/register",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: { Email: _username, Password: _password, ConfirmPassword: _confirmPassword }
            })
                .then(function (result) {
                    login(_username, _password);
                });
    };

}]);