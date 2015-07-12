currencyApp.service("currencyService", function () {
    this.currency1 = "PLN";
    this.currency2 = "EUR";
});

currencyApp.service("dateService", function () {
    this.date = new Date();
});

currencyApp.service("ratesService", ["$resource", function ($resource) {
    this.getRates = function (day, month, year) {
        var path = "https://openexchangerates.org/api/historical/";
        path+=year + "-" + month + "-" + day + ".json";
        var ratesAPI = $resource(path, {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        return ratesAPI.get({
            app_id: "6e8211081a46446e942ba9478c21fb39"
        });
    }; 
}]);