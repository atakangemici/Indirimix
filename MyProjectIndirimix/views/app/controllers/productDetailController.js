'use strict';
app.controller('productDetailController', ['$scope', '$http', '$location', 'AppService', function ($scope, $http, $location, AppService) {

    var path = $location.path();
    var pathSplit = path.split('/');
    var id = parseInt(pathSplit[2]);

    AppService.GetProduct(id)
        .then(function (response) {
            $scope.product = response.data;
            window.helper.contentWayPoint();
            window.helper.fullHeight();
            window.helper.loader();
            window.helper.burgerMenu();
            window.helper.carousel();
        });



}]);