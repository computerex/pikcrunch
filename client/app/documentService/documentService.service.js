'use strict';

angular.module('pikcrunchApp')
  .service('documentService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getDocuments = function(user) {
    	console.log(user);
    	var url = '/api/users/' + user._id + '/documents';
    	console.log(url);
    	return $http.get(url);
    }

    this.addDocument = function(document) {
    	console.log(document);
    	var url = '/api/documents';
    	return $http.post(url, document);
    }

  });
