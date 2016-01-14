angular.module('showcase.controllers').controller('richTextShowcaseSourceController', ['$http', function($http) {
    
    var controller = this;
    
    this.onClickGetJs = function(){
       $http.get('components/rich-text/richTextShowcaseController.js')
        .success(function(data){
            controller.source = data;
        });
    };
    
    this.onClickGetHtml = function(){
       $http.get('components/rich-text/rich-text-example.html')
        .success(function(data){
            controller.source = data;
        });
    };
    
    this.onClickGetJs();
}]);