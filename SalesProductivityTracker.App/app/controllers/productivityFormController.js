app.controller("productivityFormController", ["$scope", "$http", "$location", function ($scope, $http, $location) {

    $scope.submitProductivityReport = submitProductivityReport;

    function submitProductivityReport(productivityForm) {
        console.log("productivityDate: ", productivityForm.productivityDate);
        console.log("bookedDailyRevenue: ", productivityForm.bookedDailyRevenue);
    }

}]);