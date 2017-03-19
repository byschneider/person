'use strict';

(function () {

    var view1ControllerFunction = function () {

    };

    var route = function ($stateProvider) {
        $stateProvider.state('view1', {
            url: '/view1',
            templateUrl: 'view1/view1.html',
            controller: 'view1.controller'
        });
    };

  angular.module('myApp')
  .config(['$stateProvider', route])
  .controller('view1.controller',
  [
    view1ControllerFunction
  ]);
})();