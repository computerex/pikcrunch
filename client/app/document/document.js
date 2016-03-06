'use strict';

angular.module('pikcrunchApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/document', {
        templateUrl: 'app/document/document.html',
        controller: 'DocumentCtrl'
      });
  });
