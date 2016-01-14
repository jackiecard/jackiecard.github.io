'use strict';

angular.module('showcase.controllers').controller('chosenShowcaseController', [function() {
    
    var controller = this;
    
    controller.paises = [];
    
    controller.selecionado = null;
    controller.selecionadoMultiple = null;
    controller.selecionadoObjetos = null;
    
    controller.paises = [
        {id: 1, nome: 'Alemanha'},
        {id: 2, nome: 'Argentina'},
        {id: 3, nome: 'Brasil'},
        {id: 4, nome: 'Estados Unidos'},
        {id: 5, nome: 'França'},
        {id: 6, nome: 'Itália'},
        {id: 6, nome: 'Japão'}
    ];
                
    
    controller.idComarcaSelecionada = null;
    controller.comarcaSelecionada = null;
    
}]);