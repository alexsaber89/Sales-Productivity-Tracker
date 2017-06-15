app.controller("ptoRequestFormController", ["$scope", "$location", "ptoRequestFormFactory", function ($scope, $location, ptoRequestFormFactory) {

    $scope.submitPTORequestForm = submitPTORequestForm;

    function submitPTORequestForm(ptoRequestForm) {
        ptoRequestFormFactory.getCurrentEmployeeId().then(function (currentEmployeeId) {
            ptoRequestForm.user = currentEmployeeId;
            console.log("ptoRequestForm: ", ptoRequestForm);
            ptoRequestFormFactory.submitPTORequestForm(ptoRequestForm).then(function (submitPTORequestFormResponse) {
                console.log("ptoRequestFormController.submitPTORequestForm response: ", submitPTORequestFormResponse);
                $location.url('/home');
            });
        });
    };

}]);