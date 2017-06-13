app.service("ptoRequestFormService", ["$http", function ($http) {

    this.submitPTORequestForm = submitPTORequestForm;
    this.getAllPTOForms = getAllPTOForms;
    this.getPTOFormsByEmployeeId = getPTOFormsByEmployeeId;
    //this.getPTOFormByPTOFormId = getPTOFormByPTOFormId;
    //this.deletePTOFormByPTOFormId = deletePTOFormByPTOFormId;

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
        $http.get("api/pto-forms-by-employeeID")
            .then(function (result) {
                console.log("PTO By Employee ID", result);
            });
    }

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