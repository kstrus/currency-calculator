currencyApp.controller("mainController", ["$scope", "$filter", "$location", "currencyService", "dateService", function ($scope, $filter, $location, currencyService, dateService) {
    $scope.currency1 = currencyService.currency1;
    $scope.currency2 = currencyService.currency2;
    $scope.date = $filter("date")(dateService.date, "dd/MM/yyyy");

    $scope.$watch(function () {
        currencyService.currency1 = $scope.currency1;
        currencyService.currency2 = $scope.currency2;
        dateService.date = $scope.date;
    });

    $scope.submit = function () {
        $location.path("/rates");
    };
}]);

currencyApp.controller("ratesController", ["$scope", "$filter", "currencyService", "dateService", "ratesService", function ($scope, $filter, currencyService, dateService, ratesService) {
    $scope.currency1 = currencyService.currency1;
    $scope.currency2 = currencyService.currency2;
    $scope.date = dateService.date;

    if ($scope.date === "") {
        var today = new Date();
        $scope.date = $filter("date")(today, "dd/MM/yyyy");
    }

    $scope.getDay = function () {
        return this.date.slice(0, 2);
    };

    $scope.getMonth = function () {
        return this.date.slice(3, 5);
    };

    $scope.getYear = function () {
        return this.date.slice(6, 10);
    };

    $scope.ratesOnDate = ratesService.getRates($scope.getDay(), $scope.getMonth(), $scope.getYear());
}]);