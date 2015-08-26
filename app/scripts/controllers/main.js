'use strict';

/**
 * @ngdoc function
 * @name alloyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alloyApp
 */
angular.module('alloyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
