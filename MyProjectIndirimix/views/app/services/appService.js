'use strict';
app.factory('AppService', ['$http', function ($http) {
    var serviceBase = 'http://localhost:5554/';
    return {
        request: function (config) {
            var token = auth.getToken();
            if (config.url.indexOf(API) === 0 && token) {
                config.headers.Authorization = 'Bearer ' + token;
            }

            return config;
        },
        GetProducts: function () {
            return $http.get(serviceBase + "api/app/get_all_products");
        },
        GetProduct: function (id) {
            return $http.get(serviceBase + "api/app/get_product/" + id);
        },
        AddUser: function (model) {
            return $http.post(serviceBase + "api/app/add_user", model);
        },
        GetUser: function (email) {
            return $http.get(serviceBase + 'api/app/get_user?email=' + email);
        }
    };
}]);