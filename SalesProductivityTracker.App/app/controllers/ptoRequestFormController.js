app.controller("ptoRequestFormController", ["$scope", "$http", "$location", function ($scope, $http, $location) {

    $scope.submitPTORequestForm = submitPTORequestForm;
    $scope.getAllPTOForms = getAllPTOForms;
    $scope.getPTOFormsByEmployeeId = getPTOFormsByEmployeeId;
    $scope.getPTOFormByPTOFormId = getPTOFormByPTOFormId;

    function submitPTORequestForm(ptoRequestForm) {
        $http.post("/api/pto-forms", ptoRequestForm)
            .then(function (result) {
                console.log("pto form submitted", result);
            });
    }

    function getAllPTOForms() {
        $http.get("/api/pto-forms")
            .then(function(result) {
                console.log("all pto forms", result);
            });
    }

    function getPTOFormsByEmployeeId() {
        $http.get("api/pto-forms-by-employeeID")
            .then(function(result) {
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