﻿'use strict';
app.factory('authService', ['$http', '$q',
    'localStorageService', function ($http, $q, localStorageService) {

        var serviceBase = 'http://localhost:5554/';
        var authServiceFactory = {};

        var _authentication = {
            isAuth: false,
            userName: ""
        };

        var _saveRegistration = function (registration) {

            _logOut();

            return $http.post(serviceBase + 'api/Account/Register', registration).then(function (response) {
                return response;

            

            });


        };
        
        var _login = function (loginData) {

            var data = "grant_type=password&username=" +
                loginData.userName + "&password=" + loginData.password;

            var deferred = $q.defer();

            $http({
                method: "POST",
                url: serviceBase + 'token',
                dataType: 'json',
                data: data,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function (response) {
                localStorageService.set('authorizationData',
                    { token: response.access_token, userName: loginData.userName });

                _authentication.isAuth = true;
                _authentication.userName = loginData.userName;


                deferred.resolve(response);
            }, function (error) {
                //Error
            });

            //$http.post(serviceBase + 'token', data, {
            //    headers:
            //        { 'Content-Type': 'application/x-www-form-urlencoded' }
            //}).succses(function (response) {

            //    localStorageService.set('authorizationData',
            //        { token: response.access_token, userName: loginData.userName });

            //    _authentication.isAuth = true;
            //    _authentication.userName = loginData.userName;


            //    deferred.resolve(response);

            //}).error(function (err, status) {
            //    _logOut();
            //    deferred.reject(err);
            //});

            return deferred.promise;
        };

        var _logOut = function () {

            localStorageService.remove('authorizationData');

            _authentication.isAuth = false;
            _authentication.userName = "";
        };

        var _fillAuthData = function () {

            var authData = localStorageService.get('authorizationData');
            if (authData) {
                _authentication.isAuth = true;
                _authentication.userName = authData.userName;
            }
        }

        authServiceFactory.saveRegistration = _saveRegistration;
        authServiceFactory.login = _login;
        authServiceFactory.logOut = _logOut;
        authServiceFactory.fillAuthData = _fillAuthData;
        authServiceFactory.authentication = _authentication;

        return authServiceFactory;
    }]);