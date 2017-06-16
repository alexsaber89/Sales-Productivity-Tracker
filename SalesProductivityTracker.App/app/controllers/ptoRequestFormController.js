app.controller("ptoRequestFormController", ["$scope", "$location", "ptoRequestFormFactory", function ($scope, $location, ptoRequestFormFactory) {

    $scope.submitPTORequestForm = submitPTORequestForm;

    function submitPTORequestForm(ptoRequestForm) {
        ptoRequestFormFactory.submitPTORequestForm(ptoRequestForm).then(function (submitPTORequestFormResponse) {
            console.log("ptoRequestFormController.submitPTORequestForm response: ", submitPTORequestFormResponse);
            $location.url('/home');
        });
    };

}]);