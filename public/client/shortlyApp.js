// array houses the dependencies necessary to for the app to run
'use strict';

angular.module('shortlyApp', [
  'ngRoute',
  'shortlyApp.controllers'
  ])  // setter
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './client/templates/links.html',
        controller: 'LinksController'
      })
      .when('/shorten', {
        templateUrl: './client/templates/shorten.html',
        controller: 'ShortenController'
      })
      .when('/signup', {
        templateUrl: './client/templates/signup.html',
        controller: 'SignupController'
      })
      .when('/login', {
        templateUrl: './client/templates/login.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
