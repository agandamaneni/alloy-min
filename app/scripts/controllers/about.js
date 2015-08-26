'use strict';

/**
 * @ngdoc function
 * @name alloyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the alloyApp
 */
angular.module('alloyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
