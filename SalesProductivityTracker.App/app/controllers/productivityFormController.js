app.controller("productivityFormController", ["$scope", "$location", "productivityFormFactory", function ($scope, $location, productivityFormFactory) {

    $scope.submitProductivityForm = submitProductivityForm;

    function submitProductivityForm(productivityForm) {
        productivityFormFactory.submitProductivityForm(productivityForm).then(function (submitProductivityFormResponse) {
            $location.url('/home');
        });
    };

}]);