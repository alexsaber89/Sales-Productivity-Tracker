angular.module("app.directives.managerProductivityByEmployee", [])
    .directive("managerProductivityByEmployee", function () {
        return {
            restrict: "E",
            scope: {
                productivityForms: "<"
            },
            templateUrl: "app/templates/managerProductivityByEmployee.html",
            controller: function ($scope, $location, managerProductivityByEmployeeFactory) {

                $scope.getAllProductivityForms = getAllProductivityForms;
                $scope.setProductivityQuarter = setProductivityQuarter;
                $scope.formatProductivityForms = formatProductivityForms;

                $scope.quarters = [{
                    quarter: 1
                }, {
                    quarter: 2
                }, {
                    quarter: 3
                }, {
                    quarter: 4
                }];

                $scope.quarter = $scope.quarters[0].quarter;
                console.log("$scope.quarter: ", $scope.quarter);

                getAllProductivityForms();

                function getAllProductivityForms() {
                    managerProductivityByEmployeeFactory.getAllProductivityForms().then(function (forms) {
                        $scope.unformattedProductivityForms = forms;
                        formatProductivityForms();
                        $location.url('/manager-home');
                    });
                };

                function setProductivityQuarter(quarterNum) {
                    $scope.quarter = quarterNum.quarter;
                    console.log("$scope.quarter: ", $scope.quarter);
                };


                function formatProductivityForms() {
                    //let evaluatedMetric = 0;
                    let formattedProductivityForms = [];

                    let userIdArray = $scope.unformattedProductivityForms.map(function (form) {
                        return form.User.Id;
                    });

                    let uniqueUserIdArray = userIdArray.filter(function (elem, index, self) {
                        return index == self.indexOf(elem);
                    });

                    console.log("uniqueUserIdArray: ", uniqueUserIdArray);

                    $scope.quarterlyForms = $scope.unformattedProductivityForms.filter(function (form) {
                        return form.Quarter === $scope.quarter;
                    });

                    console.log("$scope.quarterlyForms: ", $scope.quarterlyForms);

                    function viewObjectCreator(userArray, formsArray) {
                        let viewObject = {};
                        let DailyCallCount = 0;
                        let DailyEmailCount = 0;
                        let DailyCasesCompleted = 0;
                        let BookedDailyRevenue = 0;

                        userArray.forEach(function (id) {
                            formsArray.forEach(function (form) {
                                if (id === form.User.Id) {
                                    viewObject.UserId = id;
                                    DailyCallCount += form.DailyCallCount;
                                    DailyEmailCount += form.DailyEmailCount;
                                    DailyCasesCompleted += form.DailyCasesCompleted;
                                    BookedDailyRevenue += form.BookedDailyRevenue;
                                }
                            });
                        });

                        viewObject.DailyCallCount = DailyCallCount;
                        viewObject.DailyEmailCount = DailyEmailCount;
                        viewObject.DailyCasesCompleted = DailyCasesCompleted;
                        viewObject.BookedDailyRevenue = BookedDailyRevenue;
                        formattedProductivityForms.push(viewObject);
                    };

                    viewObjectCreator(uniqueUserIdArray, $scope.quarterlyForms);

                    console.log("formattedProductivityForms: ", formattedProductivityForms);


                    //switch (metric) {
                    //    case "DailyCallCount":
                    //        var DailyCallCount = evaluatedMetric;
                    //        return DailyCallCount;
                    //        break;
                    //    case "DailyEmailCount":
                    //        var DailyEmailCount = evaluatedMetric;
                    //        return DailyEmailCount;
                    //        break;
                    //    case "DailyCasesCompleted":
                    //        var DailyCasesCompleted = evaluatedMetric;
                    //        return DailyCasesCompleted;
                    //        break;
                    //    case "BookedDailyRevenue":
                    //        var BookedDailyRevenue = evaluatedMetric;
                    //        return BookedDailyRevenue;
                    //        break;
                    //}

                };
            }
        };
    });