'use strict';

angular.module('pikcrunchApp.auth', [
  'pikcrunchApp.constants',
  'pikcrunchApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
