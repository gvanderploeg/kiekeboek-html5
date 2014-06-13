'use strict';

angular.module('gvanderploeg.FkIntranetApp')

  .controller('MainCtrl', function($scope, $location, version) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;

  });
