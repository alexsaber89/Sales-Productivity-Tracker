app.controller("ptoRequestFormController", ["$scope", "$http", "$location", function ($scope, $http, $location) {

    $scope.submitPTORequestForm = submitPTORequestForm;
    $scope.getAllPTOForms = getAllPTOForms;
    $scope.getPTOFormsByEmployeeId = getPTOFormsByEmployeeId;
    $scope.getPTOFormByPTOFormId = getPTOFormByPTOFormId;

    function submitPTORequestForm(ptoRequestForm) {
        console.log("timestamp: ", timestamp);
        console.log("requestedPTODate: ", ptoRequestForm.requestedPTODate);
        console.log("ptoType: ", ptoRequestForm.ptoType);
        console.log("notes: ", ptoRequestForm.notes);
    }

    function getAllPTOForms() {
        $http.get("/api/pto-forms")
            .then(function(result) {
                console.log("all pto forms", result);
            });
    }

    function getPTOFormsByEmployeeId(employeeId) {
        $http.get(`api/pto-forms-by-employee/${employeeId}`)
            .then(function (result) {
                console.log("PTO By Employee ID", result);
            });
    }

    function getPTOFormByPTOFormId(formId) {
        $http.get(`api/pto-forms-by-employee/${formId}`)
            .then(function (result) {
                console.log("PTO By PTO ID", result);
            });
    }

}]);