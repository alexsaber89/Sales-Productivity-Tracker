app.controller("productivityFormController", ["$scope", "$http", "$location", function ($scope, $http, $location) {

    $scope.submitProductivityReport = submitProductivityReport;

    function submitProductivityReport(productivityForm) {
        var timestamp = new Date().toString();
        console.log("timestamp: ", timestamp);
        console.log("productivityDate: ", productivityForm.productivityDate);
        console.log("bookedDailyRevenue: ", productivityForm.bookedDailyRevenue);
        console.log("dailyCasesCompleted: ", productivityForm.dailyCasesCompleted);
        console.log("dailyCallCount: ", productivityForm.dailyCallCount);
        console.log("dailyEmailCount: ", productivityForm.dailyEmailCount);
    }

}]);