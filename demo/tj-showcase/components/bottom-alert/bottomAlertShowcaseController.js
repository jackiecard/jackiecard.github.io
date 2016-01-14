'use strict';

angular.module('showcase.controllers').controller('bottomAlertShowcaseController', ['bottomAlert', function(bottomAlert) {
    
    this.onClickAlertaSucesso = function(){
        bottomAlert.success("Mensagem de Sucesso");
    };
    
    this.onClickAlertaAtencao = function(){
        bottomAlert.warning("Mensagem de Atenção");
    };
    
    this.onClickAlertaErro = function(){
        bottomAlert.error("Mensagem de Erro");
    };
    
    this.onClickAlertaInfo = function(){
        bottomAlert.info("Mensagem de Info");
    };
                
}]);