currencyApp.directive("datefieldWidget", function () {
    var linkFn;
    linkFn = function (scope, element) {
        var field = angular.element(element.children()[0]);
        $(field).datepicker({
            format: "dd/mm/yyyy",
            todayBtn: "linked",
            orientation: "top auto",
            autoclose: true,
            endDate: "today",
            startDate: "01/01/2000"
        });
    };

    return {
        restrict: "E",
        link: linkFn,
        scope: {}
    };
});