'use strict';
app.controller('loginController', ['$scope', '$location',
    'authService', '$rootScope', 'AppService', function ($scope, $location, authService, $rootScope, AppService) {
        window.helper.contentWayPoint();
        window.helper.fullHeight();

        $scope.loginData = {
            userName: "",
            password: ""
        };

        $scope.message = "";


        $rootScope.login = function () {

            authService.login($scope.loginData).then(function (response) {
                var data = response.data;
                $rootScope.User = {};

                AppService.GetUser(data.userName)
                    .then(function (response) {
                        $rootScope.User = response.data;
                    });

                $location.path('/orders');

            },
                function (err) {
                    $scope.message = err.error_description;
                });
        };

    }]);