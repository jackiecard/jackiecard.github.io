angular.module('showcase.controllers').controller('alertShowcaseSourceController', ['$http', function($http) {
    
    var controller = this;
    
    this.onClickGetJs = function(){
       $http.get('components/alert/alertShowcaseController.js')
        .success(function(data){
            controller.source = data;
        });
    };
    
    this.onClickGetHtml = function(){
       $http.get('components/alert/alert-example.html')
        .success(function(data){
            controller.source = data;
        });
    };
    
    this.onClickGetTemplate = function(){
       $http.get('components/alert/alert-template.html')
        .success(function(data){
            controller.source = data;
        });
    };
    
    this.onClickGetJs();
}]);