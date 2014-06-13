'use strict';

/**
 * @ngdoc service
 * @name fkIntranetAppApp.Fkappservice
 * @description
 * # Fkappservice
 * Service in the fkIntranetAppApp.
 */
angular.module('fkIntranetAppApp')
  .service('Fkappservice', function Fkappservice() {

	  var data = [],
	  
	  getDataRemote = function() {
	  	  $http({
			  method: 'GET',
			  url: 'http://www.fonteinkerkhaarlem.nl/intranet/people/export.json'
	  	  })
		  .success(function(data) {
			  this.data = data;
		  })
		  .error(function(data, status, headers, config) {
			  console.log("error fetching json data: " + status);
		  });
	  },
	  
	  getData = function() {
		  if (data === []) {
			  getDataRemote();		  
		  }
		  return data;
	  };
	  
	  return {
		  search: function(keyword) {
			  console.log("Searching using keyword " + keyword);
			  return getData().filter(function(person) {
				  return (keyword == person.name);					  
			  });
		  }
	  };
  });
