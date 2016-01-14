angular.module('showcase.controllers').controller('tableSourceController', ['$http', function($http) {
    
    var controller = this;
    
    this.onClickGetHtml = function(){
       $http.get('components/ui-kit/table/padrao.html')
        .success(function(data){
            controller.source = data;
        });
    };
    
    this.onClickGetHtml();
}]);