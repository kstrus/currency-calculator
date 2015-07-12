currencyApp.directive("datefieldWidget", function () {
    var linkFn;
    linkFn = function (scope, element) {
        var field = angular.element(element.children()[0]);
        $(field).datepicker({
            format: "dd/mm/yyyy",
            todayBtn: "linked",
            orientation: "top auto",
            autoclose: true,
            endDate: "today"
        });
    };

    return {
        restrict: "E",
        link: linkFn,
        scope: {
        }
    };
});