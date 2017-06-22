﻿angular.module("app.directives.managerProductivityByEmployee", [])
    .directive("managerProductivityByEmployee", function () {
        return {
            restrict: "E",
            scope: {
                productivityForms: "<"
            },
            templateUrl: "app/templates/managerProductivityByEmployee.html",
            controller: function ($scope, $location, managerProductivityByEmployeeFactory) {

                $scope.getAllProductivityForms = getAllProductivityForms;
                $scope.formatForms = formatForms;
                $scope.setProductivityQuarter = setProductivityQuarter;
                $scope.quarters = [{
                    quarter: 1
                }, {
                    quarter: 2
                }, {
                    quarter: 3
                }, {
                    quarter: 4
                }];

                function setProductivityQuarter(quarterNum) {
                    $scope.quarter = quarterNum.quarter;
                    formatForms($scope.unformattedForms, $scope.quarter)
                };

                getAllProductivityForms();

                function getAllProductivityForms() {
                    managerProductivityByEmployeeFactory.getAllProductivityForms().then(function (forms) {
                        $scope.unformattedForms = forms;
                        formatForms(forms, 1);
                        $location.url('/manager-home');
                    });
                };

                function formatForms(forms, quarter) {

                    // Extract all userId's into an array
                    let userIdArray = forms.map(function (form) {
                        return form.User.Id;
                    });

                    // Remove duplicate userId's from previous array
                    let uniqueUserIdArray = userIdArray.filter(function (elem, index, self) {
                        return index == self.indexOf(elem);
                    });

                    // For each userId, calculate that user's quarterly metrics
                    // Place each employee's metrics object into an array
                    let productivityTableObjects = [];

                    uniqueUserIdArray.forEach(function (userId) {
                        let employee = {};
                        let employeeNameObj = getUserNameById(forms, userId);
                        employee.UserId = userId;
                        employee.QuarterlyCallCount = getMetricsForEmployeeByQuarter(forms, userId, "DailyCallCount", quarter);
                        employee.QuarterlyEmailCount = getMetricsForEmployeeByQuarter(forms, userId, "DailyEmailCount", quarter);
                        employee.QuarterlyCasesCompleted = getMetricsForEmployeeByQuarter(forms, userId, "DailyCasesCompleted", quarter);
                        employee.BookedQuarterlyRevenue = getMetricsForEmployeeByQuarter(forms, userId, "BookedDailyRevenue", quarter);
                        employee.FirstName = employeeNameObj.FirstName;
                        employee.LastName = employeeNameObj.LastName;
                        productivityTableObjects.push(employee);
                    });

                    // Finally, sort metrics objects by employee last name
                    let sortedProductivityTableObjects = sortProductivityObjectsByLastName(productivityTableObjects);

                    $scope.sortedProductivityTableObjects = sortedProductivityTableObjects;
                };

                const getMetricsForEmployeeByQuarter = function (forms, employeeId, metric, quarter) {

                    const quarterReportsForEmployee = forms.filter(function (report) {
                        return report.User.Id === employeeId && report.Quarter === quarter;
                    });

                    const metricSum = quarterReportsForEmployee.reduce(function (acc, obj) {
                        return acc + obj[metric];
                    }, 0);

                    return metricSum;
                };

                const getUserNameById = function (forms, employeeId) {

                    const formObject = forms.find(function (report) {
                        return report.User.Id === employeeId;
                    });

                    let employeeNameObj = {};
                    employeeNameObj.FirstName = formObject.User.FirstName;
                    employeeNameObj.LastName = formObject.User.LastName;

                    return employeeNameObj;
                };

                const sortProductivityObjectsByLastName = function (productivityObjects) {

                    productivityObjects.sort(function (a, b) {
                        let nameA = a.LastName.toUpperCase();
                        let nameB = b.LastName.toUpperCase();
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }

                        return 0;
                    });

                    return productivityObjects;
                };
















                //function formatProductivityForms(quarter) {

                //    let desiredQuarter;

                //    if (quarter === 0) {
                //        desiredQuarter = 1;
                //    } else {
                //        desiredQuarter = quarter;
                //    }

                //    let formattedProductivityForms = [];

                //    // Extract all userId's into an array
                //    let userIdArray = $scope.unformattedProductivityForms.map(function (form) {
                //        return form.User.Id;
                //    });

                //    // Remove duplicate userId's from previous array
                //    let uniqueUserIdArray = userIdArray.filter(function (elem, index, self) {
                //        return index == self.indexOf(elem);
                //    });

                //    // Extract desired quarter's forms into an array
                //    let quarterlyForms = $scope.unformattedProductivityForms.filter(function (form) {
                //        return form.Quarter === desiredQuarter;
                //    });

                //    // For each userId, add up metrics and return final user object
                //    let viewObjArray = [];

                //    for (let i = 0; i < uniqueUserIdArray.length; i++) {
                //        let viewObj = viewObjectCreator(uniqueUserIdArray[0], quarterlyForms);
                //        viewObjArray.push(viewObj);
                //    };

                //    function viewObjectCreator(userId, formsArray) {
                //        let viewObject = {};
                //        let DailyCallCount = 0;
                //        let DailyEmailCount = 0;
                //        let DailyCasesCompleted = 0;
                //        let BookedDailyRevenue = 0;

                //        formsArray.forEach(function (form) {
                //            if (userId === form.User.Id) {
                //                DailyCallCount += form.DailyCallCount;
                //                DailyEmailCount += form.DailyEmailCount;
                //                DailyCasesCompleted += form.DailyCasesCompleted;
                //                BookedDailyRevenue += form.BookedDailyRevenue;
                //            }
                //        });

                //        viewObject.DailyCallCount = DailyCallCount;
                //        viewObject.DailyEmailCount = DailyEmailCount;
                //        viewObject.DailyCasesCompleted = DailyCasesCompleted;
                //        viewObject.BookedDailyRevenue = BookedDailyRevenue;
                //        return viewObject;
                //    };

                //    console.log("formatProductivityForms viewObjArray: ", viewObjArray);
                //};
            }
        };
    });