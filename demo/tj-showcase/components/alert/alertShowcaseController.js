'use strict';
angular.module('showcase.controllers').controller('alertShowcaseController', ['dialog', 'bottomAlert', function(dialog, bottomAlert) {
    
    this.onClickDialogMensagem = function(){
        dialog.message('Mensagem', 'Mensagem de Alerta');
    };
    
    this.onClickDialogSucesso = function(){
        dialog.success('Sucesso!', 'Mensagem de sucesso');
    };
    
    this.onClickDialogConfirm = function(){
        dialog.confirm('Aviso','Tem certeza disso?')
                .then(function (value) {
                    bottomAlert.info('Confirmou. Value: ' + value);
                });
    };
    
    this.onClickDialogError = function(){
        dialog.error('Mensagem de erro')
                .then(function (value) {
                });
    };
    
    this.onClickDialogTemplate = function(){
        dialog.template('components/alert/alert-template.html')
                .then(function (value) {
                    bottomAlert.info('Clicou em: ' + value);
                });
    };
                
}]);