app.controller("ptoRequestFormController", ["$scope", "$location", "ptoRequestFormFactory", function ($scope, $location, ptoRequestFormFactory) {

    $scope.submitPTORequestForm = submitPTORequestForm;
    let currentEmployeeId = getCurrentEmployeeId();

    function getCurrentEmployeeId() {
        ptoRequestFormFactory.getCurrentEmployeeId().then(function (response) {
            return response;
        });
    };

    function submitPTORequestForm(ptoRequestForm) {
        ptoRequestFormFactory.submitPTORequestForm(ptoRequestForm).then(function (response) {
            console.log("ptoRequestFormController.submitPTORequestForm response: ", response);
            $location.url('/home');
        });
    };

}]);