'use strict';

angular.module('gvanderploeg.FkIntranetApp')

  .controller('MainCtrl', ['$scope', '$location', 'Fkappservice', 'version', function($scope, $location, Fkappservice, version) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;
	
	$scope.persons = Fkappservice.search($scope.keyword);

  }]);
