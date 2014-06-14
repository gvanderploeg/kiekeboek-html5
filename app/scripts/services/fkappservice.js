'use strict';

/**
 * @ngdoc service
 * @name fkIntranetAppApp.Fkappservice
 * @description
 * # Fkappservice
 * Service in the fkIntranetAppApp.
 */
angular.module('gvanderploeg.FkIntranetApp')
  .service('Fkappservice', function Fkappservice($http) {

	  var data = [],
	  
	  getDataRemote = function(callback) {
	  	  $http({
			  method: 'GET',
			  url: 'http://www.fonteinkerkhaarlem.nl/intranet/people/export.json'
	  	  })
		  .success(function(data) {
			  this.data = data;
			  callback(data);
		  })
		  .error(function(data, status, headers, config) {
			  console.log("error fetching json data: " + status + ", " + data + ", " + headers + ", " + config);
		  });
	  },
	  
	  getData = function(callback) {
		  getDataRemote(callback); 
	  };
	  
	  return {
		  search: function(keyword, callback) {
			  console.log("Searching using keyword " + keyword);
			  getData(function(data) {
				  var filtered = data.filter(function(person) {
				  				  return (keyword == person.name);					  
				  });
				  callback(filtered);
			  });
		  }
	  };
  });
