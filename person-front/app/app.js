'use strict';

(function () {
    var app = angular.module('myApp', [
    'ui.router',
    'myApp.version'
    ]);

    var runAppFunction = function ($rootScope, $state, authEvents, $timeout, atenticacaoService) {
        $rootScope.$state = $state;

        $state.go('view1', {}, { reload: true });
    };

    app.run(
    [
        '$rootScope',
        '$state',
        '$timeout',
        runAppFunction
    ]);
})();
