'use strict';

(function () {

    var view2ControllerFunction = function () {

    };

    var route = function ($stateProvider) {
        $stateProvider.state('view2', {
            url: '/view2',
            templateUrl: 'view2/view2.html',
            controller: 'view2.controller'
        });
    };

  angular.module('myApp')
  .config(['$stateProvider', route])
  .controller('view2.controller',
  [
    view2ControllerFunction
  ]);
})();