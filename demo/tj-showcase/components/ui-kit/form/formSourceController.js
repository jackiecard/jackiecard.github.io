angular.module('showcase.controllers').controller('formSourceController', ['$http', function($http) {
    
    var controller = this;
    
    this.onClickGetHtml = function(){
       $http.get('components/ui-kit/form/form-example.html')
        .success(function(data){
            controller.source = data;
        });
    };
    
    this.onClickGetHtml2 = function(){
        $http.get('components/ui-kit/form/form-example-estilizado.html')
         .success(function(data){
             controller.source = data;
         });
     };
    
    this.onClickGetHtml2();
}]);