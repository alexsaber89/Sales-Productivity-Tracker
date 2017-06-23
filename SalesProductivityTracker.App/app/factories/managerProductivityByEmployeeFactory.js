app.factory("managerProductivityByEmployeeFactory", ["$q", "$http", function ($q, $http) {

    var service = {
        submitProductivityForm: submitProductivityForm,
        getAllProductivityForms: getAllProductivityForms,
        getProductivityFormsByEmployeeId: getProductivityFormsByEmployeeId
    }
    return service;

    function submitProductivityForm(productivityForm) {
        return $q((resolve, reject) => {
            $http.post("/api/productivity-forms", productivityForm)
             .then((response) => {
                 resolve(response);
             });
        });
    };

    function getAllProductivityForms() {
        return $q((resolve, reject) => {
            $http.get("api/manager-productivity-forms")
             .then((response) => {
                 resolve(response.data);
             });
        });
    };

    function getProductivityFormsByEmployeeId() {
        return $q((resolve, reject) => {
            $http.get("api/productivity-forms-by-employeeID")
             .then((response) => {
                 resolve(response.data);
             });
        });
    };

}]);