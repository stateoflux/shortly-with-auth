// array houses the dependencies necessary to for the app to run
'use strict';

angular.module('shortlyApp', [
  'ngRoute',
  'shortlyApp.controllers'
  ])  // setter
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './client/templates/main.html',
        controller: 'MainController'
      })
      .when('/shorten', {
        templateUrl: './client/templates/shorten.html',
        controller: 'ShortenController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
