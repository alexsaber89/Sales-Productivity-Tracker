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

    function getPTOFormsByEmployeeId(employeeId) {
        $http.get(`api/pto-forms-by-employee/${employeeId}`)
            .then(function(result) {
                console.log("PTO By Employee ID", result);
            });
    }

    function getPTOFormByPTOFormId(formId) {
        $http.get(`api/pto-forms-by-employee/${formId}`)
            .then(function(result) {
                console.log("PTO By PTO ID", result);
            });
    }

}]);