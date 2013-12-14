'use strict';

angular.module('shortlyApp.controllers', [])
.controller('MainController', function($scope, $http) {  // injecting the $http service
  $http({
    method: 'GET',
    url: '/links'
  })
  .then(function(data) {
    console.log(data);
    $scope.links = data.data;
  });
})
.controller('ShortenController', function($scope, $http) {
  $scope.createLink = function() {
    console.log(this.linkForm.url.$valid);
    if (this.linkForm.url.$valid) {
      $http({
        method: 'POST',
        url: '/links',
        data: JSON.stringify({ url: this.url })
      })
      .then(function(data) {
        console.log('post request for links is complete');
      });
    }
    this.url = '';
  };
});