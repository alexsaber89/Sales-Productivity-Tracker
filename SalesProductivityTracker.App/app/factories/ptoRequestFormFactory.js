app.factory("ptoRequestFormFactory", ["$q", "$http", function ($q, $http) {

    var service = {
        submitPTORequestForm: submitPTORequestForm,
        getAllPTOForms: getAllPTOForms,
        getPTOFormsByEmployeeId: getPTOFormsByEmployeeId
    }
    return service;

    //TODO:  Model logic after getPTOFormsByEmployeeId()
    function submitPTORequestForm(ptoRequestForm) {
        $http.post("/api/pto-forms", ptoRequestForm)
            .then(function (result) {
                console.log("pto form submitted", result);
            });
    }

    //TODO:  Move to manager pto service
    function getAllPTOForms() {
        $http.get("/api/pto-forms")
            .then(function (result) {
                console.log("all pto forms", result);
            });
    }

    function getPTOFormsByEmployeeId() {
        return $q((resolve, reject) => {
            $http.get("api/pto-forms-by-employeeID")
             .then((response) => {
                 resolve(response);
             });
        });
    };

    //TODO: add existing PTOFormID from ng-model
    //function getPTOFormByPTOFormId() {
    //    $http.get(`api/pto-form`)
    //        .then(function(result) {
    //            console.log("PTO By PTO ID", result);
    //        });
    //}

    //TODO: add existing PTOFormID from ng-model
    //function deletePTOFormByPTOFormId() {
    //    $http.get(`api/pto-form`)
    //        .then(function (result) {
    //            console.log("PTO By PTO ID", result);
    //        });
    //}

}]);