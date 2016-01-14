'use strict';
angular.module('showcase.services').factory('pessoaHttpService',[ '$http', function($http){
    
	function _insert(pessoa){
    	return $http.post('/tjsc-showcase/rest/pessoa/', pessoa);
    }

	function _update(pessoa){
    	return $http.put('/tjsc-showcase/rest/pessoa/', pessoa);
    }

	function _deleteById(id){
    	return $http.delete('/tjsc-showcase/rest/pessoa/' + id);
    }
	
	function _getById(id){
    	return $http.get('/tjsc-showcase/rest/pessoa/' + id );
    }

    function _getByNome(seletor){
    	return $http.get('/tjsc-showcase/rest/pessoa/lista');
    }

    function _getNascimento(id){
    	return $http.get('/tjsc-showcase/rest/pessoa/' + id + '/nascimento');
    }
    
    function _getError(){
    	return $http.get('/tjsc-showcase/rest/pessoa/erro');
    }

    return{
    	insert: _insert,
    	update: _update,
    	remove: _deleteById,
    	getById : _getById,
    	getByNome : _getByNome,
    	getNascimento : _getNascimento,
    	getError : _getError
    }
    
}]);