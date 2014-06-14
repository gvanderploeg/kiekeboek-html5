'use strict';

angular.module('gvanderploeg.FkIntranetApp')

  .controller('MainCtrl', ['$scope', '$location', 'Fkappservice', 'version', function($scope, $location, Fkappservice, version) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;
	$scope.keywords = 'Foobar';
	$scope.persons = [];
	
	$scope.search = function() {
		console.log("Keywords is: " + $scope.keywords);
		Fkappservice.search($scope.keywords, function(itemsFound) { 
			$scope.persons = itemsFound;
		
			console.log("$scope.persons is: " + $scope.persons);
		});
	};
  }]);
