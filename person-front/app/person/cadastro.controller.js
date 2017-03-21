'use strict';

(function () {

    var cadastroControllerFunction = function ($scope,
        personService
    ) {
        var sendForm = function () {
            personService.createPerson($scope.model)
                .then(function (response) {
                    alert('sucesso');
                }, function (response) {
                    alert('algo deu errado');
                }
                );
        };

        $scope.sendForm = sendForm;
    };

    var route = function ($stateProvider) {
        $stateProvider.state('cadastro', {
            url: '/cadastro',
            templateUrl: 'person/cadastro.html',
            controller: 'cadastro.controller'
        });
    };

    angular.module('myApp')
        .config(['$stateProvider', route])
        .controller('cadastro.controller',
        [
            '$scope',
            'person.service',
            cadastroControllerFunction
        ]);
})();