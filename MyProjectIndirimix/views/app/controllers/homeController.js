'use strict';
app.controller('homeController', ['$scope', 'AppService', '$window', '$rootScope', '$modal', 'authService', '$timeout', function ($scope, AppService, $window, $rootScope, $modal, authService, $timeout) {

    $rootScope.savedSuccessfully = false;
    $rootScope.message = "";

    $rootScope.registration = {
        Email: "",
        Password: "",
        ConfirmPassword: "",
        Username: "",
        UserSurName: ""
    };

    $rootScope.signUp = function () {

        authService.saveRegistration($scope.registration).then(function (response) {

            $rootScope.savedSuccessfully = true;
            $rootScope.message = "User has been registered successfully, you will be redicted to login page in 2 seconds.";
            AppService.AddUser($rootScope.registration)
                .then(function (response) {
                    var userAdd = response.data;
                    $rootScope.loginform = true;
                });
            startTimer();

        },
            function (response) {
                var errors = [];
                for (var key in response.data.modelState) {
                    for (var i = 0; i < response.data.modelState[key].length; i++) {
                        errors.push(response.data.modelState[key][i]);
                    }
                }
                $rootScope.message = "Failed to register user due to:" + errors.join(' ');
            });
    };

    var startTimer = function () {
        var timer = $timeout(function () {
            $timeout.cancel(timer);
        }, 2000);
    };


    $rootScope.loginData = {
        userName: "",
        password: ""
    };

    $rootScope.message = "";


    $rootScope.login = function () {

        authService.login($scope.loginData).then(function (response) {
            var data = response.data;
            $rootScope.User = {};

            AppService.GetUser(data.userName)
                .then(function (response) {
                    $rootScope.User = response.data;

                });


        },
            function (err) {
                $scope.message = err.error_description;
            });
    };

    $rootScope.loginform = true;

    $rootScope.registerClick = function () {
        $rootScope.loginform = false;
    };

    $rootScope.loginClick = function () {
        $rootScope.loginform = true;
    };

    AppService.GetProducts()
        .then(function (response) {
            $scope.products = response.data;
            window.helper.contentWayPoint();
            window.helper.fullHeight();
            window.helper.loader();
            window.helper.burgerMenu();
            window.helper.carousel();
        });
    $scope.open = function () {
        $scope.formModal = $scope.formModal || $modal.open({
            scope: $scope,
            templateUrl: '/views/app/views/userloginmodal.html',
            animation: '',
            backdrop: 'static',
            show: false
        });

        $scope.formModal.then(function () {
            $scope.formModal.show();
        });
    }



    $scope.productDetail = function (id) {
        $window.location.href = 'productdetail/' + id;
        console.log(id);
    };


    //$scope.loginModal = function () {
    //    $scope.message = "Show Form Button Clicked";
    //    console.log($scope.message);

    //    var modalInstance = $uibModal.open({
    //        templateUrl: '/views/app/views/userloginmodal.html',
    //        controller: ModalInstanceCtrl,
    //        scope: $scope,
    //        resolve: {
    //            userForm: function () {
    //                return $scope.userForm;
    //            }
    //        }
    //    });

    //    modalInstance.result.then(function (selectedItem) {
    //        $scope.selected = selectedItem;
    //    }, function () {
    //        $log.info('Modal dismissed at: ' + new Date());
    //    });
    //};

    //var ModalInstanceCtrl = function ($scope, $modalInstance, userForm) {
    //    $scope.form = {}
    //    $scope.submitForm = function () {
    //        if ($scope.form.userForm.$valid) {
    //            console.log('user form is in scope');
    //            $modalInstance.close('closed');
    //        } else {
    //            console.log('userform is not in scope');
    //        }
    //    };

    //    $scope.cancel = function () {
    //        $modalInstance.dismiss('cancel');
    //    };
    //};

}]);
