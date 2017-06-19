app.factory("ptoRequestFormFactory", ["$q", "$http", function ($q, $http) {

    var service = {
        submitPTORequestForm: submitPTORequestForm,
        getPTOFormsByEmployeeId: getPTOFormsByEmployeeId,
        deletePTOFormByPTOFormId: deletePTOFormByPTOFormId
    }
    return service;

    function submitPTORequestForm(ptoRequestForm) {
        return $q((resolve, reject) => {
            $http.post("/api/pto-forms", ptoRequestForm)
             .then((response) => {
                 resolve(response);
             });
        });
    };

    function getPTOFormsByEmployeeId() {
        return $q((resolve, reject) => {
            $http.get("api/pto-forms-by-employeeID")
             .then((response) => {
                 resolve(response.data);
             });
        });
    };

    //TODO: add existing PTOFormID from ng-model
    //$q refactor
    //function getPTOFormByPTOFormId() {
    //    $http.get(`api/pto-form-by-formID`)
    //        .then(function(result) {
    //            console.log("PTO By PTO ID", result);
    //        });
    //};

    function deletePTOFormByPTOFormId(formId) {
        return $q((resolve, reject) => {
            $http.delete(`api/pto-form/${formId}`)
             .then((response) => {
                 resolve(response.data);
             });
        });
    };

}]);