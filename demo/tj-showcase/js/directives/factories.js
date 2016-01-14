
angular.module('tjsc.components')

.factory('spinner', ['$http', '$document', function ($http, $document) {
	function _start(){
	    angular.element(document).find('body').addClass('overlay');		
	};	
	function _stop(){
		angular.element(document).find('body').removeClass('overlay');
	};	
	function _dblClick(){
		$document.on("dblclick", function(){
			_stop();
		});
	};
	return {
        start: _start,
        dblClick: _dblClick,
        stop: _stop
    }
}])

.factory('dialog', ['$modal', function ($modal) {
    
    function _messageDialog(titulo, mensagem) {  
        var modalDefaults = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: 'template/tj/alert/message.html' 
        };
        var modalOptions = {
            closeButtonText: 'Fechar',
            actionButtonText: 'OK',
            title: titulo,
            message: mensagem
        };
        
        _showModal( modalDefaults, modalOptions );
    };
    
    function _successDialog(titulo, mensagem) {  
        var modalDefaults = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: 'template/tj/alert/success.html' 
        };
        var modalOptions = {
            closeButtonText: 'Fechar',
            actionButtonText: 'OK',
            title: titulo,
            message: mensagem
        };
        
        _showModal( modalDefaults, modalOptions );
    };
    
    function _errorDialog(response) {  
        var modalDefaults = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: 'template/tj/alert/error.html' 
        };
        
        var resp = ["Não há registros sobre o erro: response = null."];
        if(response.message != null){
        	resp =[response.message, response.className];
        };
        
        var modalOptions = {
            closeButtonText: 'Fechar',
            actionButtonText: 'OK',
            title: "Atenção!",
            message: resp		
        };
        
        _showModal( modalDefaults, modalOptions );
    };
    
    
    function _confirmDialog(titulo, mensagem) {
        var modalDefaults = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: 'template/tj/alert/confirm.html' 
        };
        var modalOptions = {
            closeButtonText: 'Cancelar',
            actionButtonText: 'Sim',
            title: titulo,
            message: mensagem
        };
        return _showModal( modalDefaults, modalOptions );
    };
    
    function _templateDialog(templateUrl) {
        var modalDefaults = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: templateUrl 
        };
        var modalOptions = {};
        return _showModal( modalDefaults, modalOptions );
    };
    
    function _showModal(modalDefaults, modalOptions) {
            if (!modalDefaults) {
                modalDefaults = {};
            }
            modalDefaults.backdrop = 'static';
            return _show(modalDefaults, modalOptions);
        };
        
    function _show(modalDefaults, modalOptions) {

        if (!modalDefaults.controller) {
            modalDefaults.controller = function ($scope, $modalInstance) {
                $scope.modalOptions = modalOptions;
                $scope.ok = function (result) {
                    $modalInstance.close(result);
                };
                $scope.cancel = function (result) {
                    $modalInstance.dismiss('cancel');
                };
            }
        }
        return $modal.open(modalDefaults).result;
    };
        
    return {
        message: _messageDialog,
        success: _successDialog,
        error: _errorDialog,
        confirm: _confirmDialog,
        template: _templateDialog
    }
                   

}]);

angular.module("tjsc.components").run(["$templateCache", function($templateCache) {
    
  $templateCache.put("template/tj/alert/message.html",
        "<div class='modal-header'> " +
        "    <h3 class='modal-title'>{{modalOptions.title}}</h3> " +
        "</div>  " +
        "<div class='modal-body'>   " +
            "<p>{{modalOptions.message}}</p>   " +
        "</div> " +
        "<div class='modal-footer'> " +
        "    <button class='btn btn-primary' ng-click='ok()'>{{modalOptions.actionButtonText}}</button>        " +
        "</div> "
    );
  
   $templateCache.put("template/tj/alert/success.html",
	        "<div class='modal-header success-modal'> " +
	        "    <h3 class='modal-title'><span class='glyphicon glyphicon-ok'></span> {{modalOptions.title}}</h3> " +
	        "</div>  " +
	        "<div class='modal-body'>   " +
	            "<p>{{modalOptions.message}}</p>   " +
	        "</div> " +
	        "<div class='modal-footer'> " +
	        "    <button class='btn btn-primary' ng-click='ok()'>{{modalOptions.actionButtonText}}</button>        " +
	        "</div> "
	    ); 
  
  	$templateCache.put("template/tj/alert/error.html",
	        "<div class='modal-header error-modal'> " +
	        "    <h3 class='modal-title'><span class='glyphicon glyphicon-exclamation-sign'></span> {{modalOptions.title}}</h3> " +
	        "</div>  " +
	        "<div class='modal-body'>   " +
        		'<p>Ocorreu um erro no sistema.</p>' +
        		'<div class="collapse" id="collapseError">' +
	        		'<textarea style="width: 100%; min-height: 80px;">' +
	        		'{{modalOptions.message[0]}}' +
	        		'</textarea>' +
	            '<p>{{modalOptions.message[1]}}</p>' +
        		'</div>' +
	        "</div> " +
	        "<div class='modal-footer'> " +
		        '<button class="btn btn-default" data-toggle="collapse" href="#collapseError" aria-expanded="false"' +
	    		'aria-controls="collapseExample" ng-click="toggleError = !toggleError">' +
			        '<span ng-hide="toggleError">Mostrar Detalhes</span>' +
		    		'<span ng-show="toggleError">Ocultar Detalhes</span></button>' +
	        "    <button class='btn btn-default' ng-click='ok()'>{{modalOptions.actionButtonText}}</button>        " +
	        "</div> "
	);
    
    $templateCache.put("template/tj/alert/confirm.html",
        "<div class='modal-header'> " +
        "    <h3 class='modal-title'>{{modalOptions.title}}</h3> " +
        "</div>  " +
        "<div class='modal-body'>   " +
            "<span>{{modalOptions.message}}</span>   " +
        "</div> " +
        "<div class='modal-footer'> " +
        "    <button class='btn btn-primary' ng-click='ok(\"ok\")'>{{modalOptions.actionButtonText}}</button>        " +
        "    <button class='btn btn-default' ng-click='cancel()'>{{modalOptions.closeButtonText}}</button> " +
        "</div> "
    );
    
}]);


