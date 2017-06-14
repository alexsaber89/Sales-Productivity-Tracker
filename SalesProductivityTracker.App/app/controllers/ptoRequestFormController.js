app.controller("ptoRequestFormController", ["$scope", "$location", "ptoRequestFormFactory", function ($scope, $location, ptoRequestFormFactory) {

    $scope.submitPTORequestForm = submitPTORequestForm;

    function submitPTORequestForm(ptoRequestForm) {
        ptoRequestFormFactory.submitPTORequestForm(ptoRequestForm).then(function () {
            console.log("forms: ", forms.data);
            $location.url('/home');
        });
    };

}]);