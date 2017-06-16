app.controller("ptoRequestFormController", ["$scope", "$location", "ptoRequestFormFactory", function ($scope, $location, ptoRequestFormFactory) {

    $scope.submitPTORequestForm = submitPTORequestForm;

    function submitPTORequestForm(ptoRequestForm) {
        ptoRequestFormFactory.submitPTORequestForm(ptoRequestForm).then(function (submitPTORequestFormResponse) {
            $location.url('/home');
        });
    };

}]);