app.factory("authFactory", ["$http", "$q", "$location", "$rootScope", function ($http, $q, $location, $rootScope) {

    var service = {
        login: login,
        logout: logout,
        register: register,
        determineIfManager: determineIfManager
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
                 $rootScope.isManager = response.data.isManager;
                 $http.defaults.headers.common['Authorization'] = `bearer ${response.data.access_token}`;

                 determineIfManager().then(function (isManager) {
                     $rootScope.isManager = isManager;
                     if (isManager) {
                         $location.url('/manager-home');
                     } else {
                         $location.url('/home');
                     }
                 });
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

    function determineIfManager() {
        return $q((resolve, reject) => {
            $http.get("api/is-manager")
             .then((response) => {
                 resolve(response.data);
             });
        });
    };

    function logout() {
        $rootScope.token = null;
        sessionStorage.clear();
    };

}]);