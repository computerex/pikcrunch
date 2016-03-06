'use strict';

angular.module('pikcrunchApp')
  .controller('DocumentCtrl', function ($scope, Auth, documentService) {
  	if (Auth.isLoggedIn){
  		var user = Auth.getCurrentUser();
	    documentService.getDocuments(user).then(function(response){
	    	console.log('response');
	    	console.log(response.data);
	    	$scope.documents = response.data;
	    });
	}
	$scope.addDocument = function(){
		console.log("adding document");
		if ( Auth.isLoggedIn) {
			var user = Auth.getCurrentUser();
			var newdoc = {created:new Date(), text:$scope.docText, userid: user._id};
			documentService.addDocument(newdoc).then(function(response){
				$scope.documents.push(newdoc);
			});
		}
	}
  });
