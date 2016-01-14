'use strict';
angular.module('showcase.controllers').controller('spinnerShowcaseController', ['$scope', '$http', 'spinner', 'dialog',
                                                                                function($scope, $http, spinner, dialog) {
	// Chamada Ajax
	$scope.sendAjax = function() {
		spinner.start();
		$http.get('http://jboss-dev:8080/tjsc-core/rest/comarca').then(function(response) {
		    //sucesso
			dialog.message("Sucesso!", "Request feita com sucesso!");
		    }, function(response) {
			    //erro
			    dialog.error(response);
		});
		spinner.stop();	
	  }	
	
	// Amostra do spinner
	$scope.amostra = function(){
		spinner.start();
		
		// Fecha o Spinner com um click duplo.
		spinner.dblClick();	
	}
                
}]);