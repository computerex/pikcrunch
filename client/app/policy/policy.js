'use strict';

angular.module('pikcrunchApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/policy', {
        templateUrl: 'app/policy/policy.html',
        controller: 'PolicyCtrl'
      })
      .when('/policy/terms', {
      	templateUrl: 'app/policy/terms/terms.html',
      	controller: 'TermsCtrl'
      })
      .when('/policy/privacy', {
      	templateUrl: 'app/policy/privacy/privacy.html',
      	controller: 'PrivacyCtrl'
      });
  });
