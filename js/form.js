
var ocultarFormulario = function() {
  $('#computadora-fs').stop().hide(500);
  $('#movil-fs').stop().hide(500);
  $('#otros-fs').stop().hide(500);
};

var verDetalleArticulo = function(){
  jQuery('#slider').animate({'margin-left': '-1148px'}, 500);
};

var volverPantallaInicio = function(){
  jQuery('#slider').animate({'margin-left': '0px'}, 500);
};

var resetearInputs = function(){
  $('input').val('');	
  $('textarea ').val('');	
  ocultarFormulario();
};

var resetAllJavascript = function(){
  location.reload(true);    //Reload Page
  location.reload(false);   //Reload Cache
};

var toggleSelectionForm = function(){

  switch ($('#select-tipo').val()) {
    case 'computadoras':
       ocultarFormulario();
       $('#computadora-fs').slideDown(400);
      break;
    case 'moviles':
       ocultarFormulario();
       $('#movil-fs').slideDown(400);
      break;
    case 'otros':
        ocultarFormulario();
        $('#otros-fs').slideDown(400);
       break;
     default:
        ocultarFormulario(); 
    }
};


//Event Listeners
$(document).ready(function (){

	$('#select-tipo').click( function(){
		toggleSelectionForm();
	});
	$('.view').click(function(){
        verDetalleArticulo();
	});
	$('#resetear').click(function(){
        resetearInputs();
	});
    $('.restart').click(function(){
        resetAllJavascript();
    });
    $('.volver').click(function(){
        volverPantallaInicio();
    });
    $('.borrar-articulo').click(function(){
        borrarObjeto();
    });


});