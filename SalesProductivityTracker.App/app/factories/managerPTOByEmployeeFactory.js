app.factory("managerPTOByEmployeeFactory", ["$q", "$http", function ($q, $http) {

    var service = {
        getAllPTOForms: getAllPTOForms,
        approvePTOFormByPTOFormId: approvePTOFormByPTOFormId
    }
    return service;

    function getAllPTOForms() {
        return $q((resolve, reject) => {
            $http.get("/api/manager-pto-forms")
             .then((response) => {
                 resolve(response.data);
             });
        });
    };

    function approvePTOFormByPTOFormId(formId) {
        return $q((resolve, reject) => {
            $http.post(`api/manager-pto-form/${formId}`)
             .then((response) => {
                 resolve(response.data);
             });
        });
    };

}]);