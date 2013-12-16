'use strict';

angular.module('shortlyApp.controllers', ['shortlyApp.services'])
  .controller('LinksController', function($scope, $rootScope, $http, $location, LinkService) {  // injecting the $http service
    // redirect to login if user has not logged in yet.
    if (!$rootScope.loggedIn) {
      $location.path('/login');
    } else {
      LinkService.getLinks()
        .then(function(data) {
          $scope.links = data;
        });
    }
  })
  .controller('ShortenController', function($scope, $http, LinkService) {
    $scope.createLink = function() {
      if (this.linkForm.url.$valid) {
        LinkService.createLink(this.url)
          .then(function(data) {
            console.log('post request for links is complete');
          })
      }
      this.url = '';
    };
  })
  .controller('LoginController', function($scope, $rootScope, $http, $location) {  // injecting the $http service
    $scope.login = function() {
      $http({
        method: 'POST',
        url: '/api/login',
        params: {
          username: this.user.username,
          password: this.user.password
        }
      })
      .then(function(data) {
        console.log(data);
        $rootScope.loggedIn = true;
        $location.path('/links');
      });
    };
  })
  .controller('SignupController', function($scope, $http, $location) {  // injecting the $http service
    $scope.signup = function() {
      $http({
        method: 'POST',
        url: '/api/signup',
        params: { 
          username: this.user.username,
          password: this.user.password
        }
      })
      .then(function(data) {
       $location.path('/login');
      });
    };
  });