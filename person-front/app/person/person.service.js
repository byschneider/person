(function () {
    'use strict';
    var basketService = function ($q,
        $http) {

        var urlPerson = 'http://localhost:3000/api/v1/person';

        var handleResponse = function (response, defer) {
            if (response.status === 200) {
                defer.resolve(response.data);
            }
            else {
                defer.reject({
                    valido: false,
                    mensagens: response.mensagens
                });
            }
        };

        var callApiPost = function (url, data) {
            var defer = $q.defer();

            $http.post(url, data).then(
                function (response) {
                    handleResponse(response, defer);
                }, function (response) {
                    handleResponse(response, defer);
                });

            return defer.promise;
        };

        var callApiPut = function (url, data) {
            var defer = $q.defer();

            $http.put(url, data).then(
                function (response) {
                    handleResponse(response, defer);
                }, function (response) {
                    handleResponse(response, defer);
                });

            return defer.promise;
        };

        var callApiGet = function (url) {
            var defer = $q.defer();

            $http.get(url).then(
                function (response) {
                    handleResponse(response, defer);
                }, function (response) {
                    handleResponse(response, defer);
                });

            return defer.promise;
        };

        var listPerson = function () {
            return callApiGet(urlPerson);  
        };

        var createPerson = function (person) {
            return callApiPost(urlPerson, person);
        };

        return {
            createPerson: createPerson,
            listPerson: listPerson
        };
    };
    angular.module('myApp')
        .service('person.service',
        [
            '$q',
            '$http',
            basketService
        ]);
})();
