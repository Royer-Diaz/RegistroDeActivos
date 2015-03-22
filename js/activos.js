//Oculta los demas espacios cda ves que escoje un tipo nuevo.
var ocultarFormulario = function() {
  $('#computadora-fs').stop().hide(500);
  $('#movil-fs').stop().hide(500);
  $('#otros-fs').stop().hide(500);
};

//Resetea todo y borra Objetos
var resetAllJavascript = function(){
  location.reload(true);    //Reload Page
  location.reload(false);   //Reload Cache
  $('input').val('');	    //Remove all text in the inputs
  $('select').prop(selectedIndex,0);
  $('textarea ').val('');	
  ocultarFormulario();
};

//Hace que el formulario despliegue la configuracion exacta por tipo.
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

//Manejo de Detalle del Articulo y muestras de articulos
var moverDetalleArticulo = function(){
   $('#slider').animate({'margin-left': '-1148px'}, 500);
};

//Afecta el boton de volver en el detalle del articulo
var volverPantallaInicio = function(){
  jQuery('#slider').animate({'margin-left': '0px'}, 500);
};


//-------Event Listeners---------//

$(document).ready(function(){

//Botones de la interfas grafica:

	//Reset de todo el contenido y Javascript objects:
	$('.navbar-brand').click( function(){
	  resetAllJavascript();
	});

	//Crea el efecto de acordeon el el formulario de ingreso de activos
	$('#select-tipo').click( function(){
		toggleSelectionForm();
	});

	//Botoneras de Vista del detalle en el Articulo
	$('.view').click(function(){
	    moverDetalleArticulo();
	    //crearDetalleArticulo();
	});

	//Boton de Volver a Pantalla principal 
	$('.volver').click(function(){
	      volverPantallaInicio();
	  });

});