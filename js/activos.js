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



var Articulo = function ( _nombre, _marca, _modelo, _activo, _sistema, _estilo, _pantallas, _supportSim, _description) {
     //Propiedades de los articulos
  var nombre = _nombre,
      marca = _marca,
      modelo = _modelo,
      activo = _activo,
      sistema = _sistema,
      estilo = _estilo,
      pantalla = _pantallas,
      support = _supportSim,
      descripcion = _description;
      tipo = "Articulo";

  this.getNombre = function () {
    return nombre;
  };
  this.getMarca = function () {
    return marca;
  };
  this.getModelo = function () {
    return modelo;
  };
  this.getActivo = function () {
    return activo;
  };
  this.getOs = function () {
    return sistema;
  };
  this.getEstilo = function () {
    return estilo;
  };
  this.getPantalla = function () {
    return pantalla;
  };
  this.getTipo = function () {
    return tipo;
  };
  this.getSoporte = function (){
    return support
  };
  this.getDescripcion = function(){
  	return descripcion;
  }

};


// HERENCIA

var Computadora = function ( _nombre, _marca, _modelo, _activo, _sistema, _estilo, _pantallas, _supportSim, _description) {
  Articulo.call(this, _nombre, _marca, _modelo, _activo, _sistema, _estilo, _pantallas, "Wi-Fi or LAN",'');

  this.getTipo = function () {
    return "Computadora";
  };
};

Computadora.prototype = new Articulo();
Computadora.prototype.constructor = Computadora;

var Movil = function ( _nombre, _marca, _modelo, _activo, _sistema, _estilo, _pantallas, _supportSim, _description) {
  Articulo.call(this, _nombre, _marca, _modelo, _activo, _sistema, _estilo, 1, _supportSim, '');

  this.getTipo = function () {
    return "Movil";
  };
};

Movil.prototype = new Articulo();
Movil.prototype.constructor = Movil;

var Otro = function (  _nombre, _marca, _modelo, _activo, _sistema, _estilo, _pantallas, _supportSim, _description) {
  Articulo.call(this, _nombre, _marca, _modelo, _activo, '', '', '', '', _description);

  this.getTipo = function () {
    return "Otro";
  };
};

Otro.prototype = new Articulo();
Otro.prototype.constructor = Otro;


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

	 //Boton de resetar el formulario
	  $('#resetear').click(function(){
	    $('.has-error').removeClass('has-error');
	    resetearInputs();
	  }); 

});