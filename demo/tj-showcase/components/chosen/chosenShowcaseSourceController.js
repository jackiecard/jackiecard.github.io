angular.module('showcase.controllers').controller('chosenShowcaseSourceController', ['$http', function($http) {
    
    var controller = this;
    
    this.onClickGetJs = function(){
       $http.get('components/chosen/chosenShowcaseController.js')
        .success(function(data){
            controller.source = data;
        });
    };
    
    this.onClickGetHtml = function(){
       $http.get('components/chosen/chosen-example.html')
        .success(function(data){
            controller.source = data;
        });
    };
    
    this.onClickGetJs();
}]);