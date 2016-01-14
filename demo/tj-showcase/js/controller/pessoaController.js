'use strict';

angular.module('showcase.controllers').controller('pessoaController',
		['$scope', 'pessoaHttpService', '$routeParams', '$location', 'bottomAlert', 'dialog',  
		 	function($scope, pessoaHttpService, $routeParams, $location, bottomAlert, dialog) {

			
	$scope.pickerAberto = false;
	
	$scope.abrePicker = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.pickerAberto = true;
    };
    
    $scope.listaPessoa = function(){                	
		pessoaHttpService.getByNome()
			.success(function(data){
				$scope.lista = data;              
			})
			.error(function(response, status, header, config){ 
				dialog.error(response);
  			})
  			;
    };
    
    $scope.pessoa = {};
    
    $scope.savePessoa = function() {
    	if($scope.pessoa.id > 0){
    		pessoaHttpService.update($scope.pessoa)
        	.success(function(data){
        		$scope.listaPessoa();
        		dialog.message("Sucesso!", "Pessoa alterada com sucesso!");              
			})
			.error(function(response, status, header, config){ 
				dialog.error(response);
			})
			;
    	}
    	else{
	        pessoaHttpService.insert($scope.pessoa)
	        	.success(function(data){
	        		$scope.listaPessoa();
	        		dialog.message("Sucesso!", "Pessoa cadastrada com sucesso!");              
				})
				.error(function(response, status, header, config){ 
					dialog.error(response);
				})
				;
    	}
    };
    
    $scope.deletePessoa = function(id) {
        pessoaHttpService.remove(id)
        	.success(function(data){
        		$scope.listaPessoa();
        		dialog.message("Sucesso!", "Pessoa deletada com sucesso!");              
			})
			.error(function(response, status, header, config){ 
				dialog.error(response);
			})
			;
    };
    
    $scope.updatePessoa = function(id) {
    	pessoaHttpService.getById(id)
    	.success(function(data){
    		$scope.pessoa = data;            
		})
		.error(function(response, status, header, config){ 
			dialog.error(response);
		})
		;
    };

	$scope.listaPessoa();
	
                     
}]);