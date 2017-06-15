app.factory("ptoRequestFormFactory", ["$q", "$http", function ($q, $http) {

    var service = {
        getCurrentEmployeeId: getCurrentEmployeeId,
        submitPTORequestForm: submitPTORequestForm,
        getAllPTOForms: getAllPTOForms,
        getPTOFormsByEmployeeId: getPTOFormsByEmployeeId
    }
    return service;

    function getCurrentEmployeeId() {
        return $q((resolve, reject) => {
            $http.get("/api/current-employee-id")
             .then((response) => {
                 resolve(response.data);
             });
        });
    };

    function submitPTORequestForm(ptoRequestForm) {
        console.log("ptoRequestForm from Factory", ptoRequestForm);
        return $q((resolve, reject) => {
            $http.post("/api/pto-forms", ptoRequestForm)
             .then((response) => {
                 resolve(response);
                 console.log("ptoRequestFormFactory.submitPTORequestForm response: ", response);
             });
        });
    };

    //TODO:  Move to manager pto factory
    //$q refactor
    function getAllPTOForms() {
        $http.get("/api/pto-forms")
            .then(function (result) {
                console.log("all pto forms", result);
            });
    };

    function getPTOFormsByEmployeeId(currentEmployeeId) {
        return $q((resolve, reject) => {
            $http.get(`api/pto-forms-by-employeeID/${currentEmployeeId}`)
             .then((response) => {
                 resolve(response);
             });
        });
    };

    //TODO: add existing PTOFormID from ng-model
    //$q refactor
    //function getPTOFormByPTOFormId() {
    //    $http.get(`api/pto-form`)
    //        .then(function(result) {
    //            console.log("PTO By PTO ID", result);
    //        });
    //};

    //TODO: add existing PTOFormID from ng-model
    //$q refactor
    //function deletePTOFormByPTOFormId() {
    //    $http.get(`api/pto-form`)
    //        .then(function (result) {
    //            console.log("PTO By PTO ID", result);
    //        });
    //};

}]);