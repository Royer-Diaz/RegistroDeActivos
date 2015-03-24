//Oculta los demas espacios cda ves que escoje un tipo nuevo.
var ocultarFormulario = function() {
  $('#computadora-fs').stop().hide(500);
  $('#movil-fs').stop().hide(500);
  $('#otros-fs').stop().hide(500);
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

var moverDetalleArticulo = function(){
  $('#slider').animate({'margin-left': '-1148px'}, 500);
};


//Afecta el boton de volver en el detalle del articulo
var volverPantallaInicio = function(){
  jQuery('#slider').animate({'margin-left': '0px'}, 500);
};

//Vacia los espacios en los inputs y textarea
var resetearInputs = function(){
  $('input').val('');	
  $('textarea ').val('');	
  ocultarFormulario();
};

//Resetea todo y borra Objetos
var resetAllJavascript = function(){
  location.reload(true);    //Reload Page
  location.reload(false);   //Reload Cache
  $('input').val('');	    //Remove all text in the inputs
  $('textarea ').val('');	
  ocultarFormulario();
};


//Manejo de Detalle del Articulo y muestras de articulos


var Articulos = [];

var verDetalleArticulo = function(articuloIndex){
  var articuloActual = Articulos[articuloIndex];
//Cambia los valores del Detalle del Articulo

  $('#nombre-articulo span').html(articuloActual.getNombre());
  $('#marca-articulo span').html(articuloActual.getMarca());
  $('#modelo-articulo span').html(articuloActual.getModelo());
  $('#activo-articulo span').html(articuloActual.getActivo());
  $('#os-articulo span').html(articuloActual.getOs());
  $('#estilo-articulo span').html(articuloActual.getEstilo());
  $('#pantallas-articulo span').html(articuloActual.getPantallas());
  $('#soporte-articulo span').html(articuloActual.getSoporte());
  $('#descripcion-articulo span').html(articuloActual.getDescripcion());
  
  //$('#estado-motor span').html(motor.getEstado() ? "Encendido" : "Apagado");
  //var miValor = micondicion ? "rojo":"negro";
   $('#target .borrar-articulo').click(function () {
    Articulos.splice($(this).data('index'), 1);
    refrescarArticulos();
    volverPantallaInicio();
  });
  $('#target').slideDown();

}

var refrescarArticulos = function () {
  var vehiculoRow;
  $('#tabla-vehiculo tbody').html('');
  Articulos.forEach(function (vehiculo, i) {
    vehiculoRow = '<tr data-index="' + i + '">';
    vehiculoRow += '<td><a href="javascript:;" data-index="' + i + '" class="detalle">' + vehiculo.getTipo() + '</a></td>';
    vehiculoRow += '<td>' + vehiculo.getMarca() + '</td>';
    vehiculoRow += '<td>' + vehiculo.getModelo() + '</td>';
    vehiculoRow += '<td>' + vehiculo.getColor() + '</td>';
    vehiculoRow += '<td>' + vehiculo.getMotor().getNumeroSerie() + '</td>';
    vehiculoRow += '<td>' + vehiculo.getMotor().getCilindraje() + '</td>';
    vehiculoRow += '<td>' + vehiculo.getLlantas().length + '</td>';
    vehiculoRow += '<td><span data-index="' + i + '" class="delete">&otimes;</span></td>';
    vehiculoRow += '</tr>';
    $('#tabla-vehiculo tbody').append(vehiculoRow);
  });

  $('#tabla-vehiculo .delete').click(function () {
    Articulos.splice($(this).data('index'), 1);
    refrescarTabla();
  });
  $('#tabla-vehiculo .detalle').click(function () {
    refrescarVehiculo($(this).data('index'));
  });

};

/*$(document).ready(function () {

  $('#crear-vehiculo').click(function () {
    $('#form-vehiculo').stop().slideDown();
  });
  $('#cancel-vehiculo').click(function () {
    $('#form-vehiculo').stop().slideUp(300, function () {
      $('#form-vehiculo input').val('');
    });
  });

  $('#submit-vehiculo').click(function () {
    var nuevoVehiculo;

    switch ($('#select-tipo').val()) {
    case 'camion':
      nuevoVehiculo = new Camion($('#input-marca').val(), $('#input-modelo').val(), $('#input-color').val(), $('#input-serie').val(), $('#input-cilindraje').val());
      break;
    case 'moto':
      nuevoVehiculo = new Moto($('#input-marca').val(), $('#input-modelo').val(), $('#input-color').val(), $('#input-serie').val(), $('#input-cilindraje').val());
      break;
    default:
      nuevoVehiculo = new Automovil($('#input-marca').val(), $('#input-modelo').val(), $('#input-color').val(), $('#input-serie').val(), $('#input-cilindraje').val());
    }

    Articulos.push(nuevoVehiculo);

    refrescarTabla();
    // $('#form-vehiculo input').val('');
  });


  Articulos.push(new Automovil('Nissan', 'Almera', 'Rojo', '12345', '1600cc')),
  Articulos.push(new Moto('Duicati', 'Diavel', 'Negro', '54321', '1200cc')),
  Articulos.push(new Camion('Mack', 'MRT450', 'Blanco', '67890', '8000cc')),

  refrescarTabla();
});*/



//Validaciones del Formulario

var validate = function () {
    var result = true,
      $inputNombreCompu = $('#input-nombre-compu'),
      $inputNombreMovil = $('#input-nombre-movil'),
      $inputNombreOtro = $('#input-nombre-otro'),
      $inputMarcaCompu = $('#input-marca-compu'),
      $inputMarcaMovil= $('#input-marca-movil'),
      $inputMarcaOtro = $('#input-marca-otro'),
      $inputModeloCompu = $('#input-modelo-compu'),
      $inputModeloMovil = $('#input-modelo-movil'),
      $inputModeloOtro = $('#input-modelo-otro'),
      $inputActivoCompu = $('#input-activo-compu'),
      $inputActivoMovil = $('#input-activo-movil'),
      $inputActivoOtro = $('#input-activo-otro'),
      $selectSistemaCompu = $('#select-os-compu'),
      $selectSistemaMovil = $('#select-os-movil'),
      $selectTipoCompu = $('#select-estilo-compu'),
      $selectTipoMovil = $('#select-estilo-movil'),
      $inputPantallaCompu = $('#input-pantallas-compu'),
      $selectSupportMovil = $('#select-soporte'),
      $textDescripcionOtro = $('#input-descriptivo-otro');


    $('.has-error').removeClass('has-error');
   //Validaciones para Nombres
    if (!$inputNombreCompu.val() || $inputNombreCompu.val().length > 50) {
      result = false;
      $inputNombreCompu.closest('.form-group').addClass('has-error');
    }
    if (!$inputNombreMovil.val() || $inputNombreMovil.val().length > 50) {
      result = false;
      $inputNombreMovil.closest('.form-group').addClass('has-error');
    }
    if (!$inputNombreOtro.val() || $inputNombreOtro.val().length > 50) {
      result = false;
      $inputNombreOtro.closest('.form-group').addClass('has-error');
    }
    //Validaciones para Marca
    if (!$inputMarcaCompu.val() || $inputMarcaCompu.val().length > 15) {
      result = false;
      $inputMarcaCompu.closest('.form-group').addClass('has-error');
    }
    if (!$inputMarcaMovil.val() || $inputMarcaMovil.val().length > 15) {
      result = false;
      $inputMarcaMovil.closest('.form-group').addClass('has-error');
    }
    if (!$inputMarcaOtro.val() || $inputMarcaOtro.val().length > 15) {
      result = false;
      $inputMarcaOtro.closest('.form-group').addClass('has-error');
    }
    //Validaciones para Modelo
    if (!$inputModeloCompu.val() || $inputModeloCompu.val().length > 15) {
      result = false;
      $inputModeloCompu.closest('.form-group').addClass('has-error');
    }
    if (!$inputModeloMovil.val() || $inputModeloMovil.val().length > 15) {
      result = false;
      $inputModeloMovil.closest('.form-group').addClass('has-error');
    }
    if (!$inputModeloOtro.val() || $inputModeloOtro.val().length > 15) {
      result = false;
      $inputModeloOtro.closest('.form-group').addClass('has-error');
    }
    //Validaciones para Activos
    if (!$inputActivoCompu.val()) {
      result = false;
      $inputActivoCompu.closest('.form-group').addClass('has-error');
    }
    if (!$inputActivoMovil.val()) {
      result = false;
      $inputActivoMovil.closest('.form-group').addClass('has-error');
    }
    if (!$inputActivoOtro.val()) {
      result = false;
      $inputActivoOtro.closest('.form-group').addClass('has-error');
    }
    //Validaciones para Selects Sistema
    if (!$selectSistemaCompu.val()) {
      result = false;
      $selectSistemaCompu.closest('.form-group').addClass('has-error');
    }
    if (!$selectSistemaMovil.val()) {
      result = false;
      $selectSistemaMovil.closest('.form-group').addClass('has-error');
    }
    //Validaciones para Selects Tipo
    if (!$selecTipoCompu.val()) {
      result = false;
      $selecTipoCompu.closest('.form-group').addClass('has-error');
    }
    if (!$selecTipoMovil.val()) {
      result = false;
      $selecTipoMovil.closest('.form-group').addClass('has-error');
    } 
    //Validaciones para Pantallas
    if (!$inputPantallaCompu.val()) {
      result = false;
      $inputPantallaCompu.closest('.form-group').addClass('has-error');
    }
    //Validaciones para Soporte
    if (!$selectSupportMovil.val()) {
      result = false;
      $selectSupportMovil.closest('.form-group').addClass('has-error');
    } 
    //Validaciones para Otro Descripcion
    if (!$textDescripcionOtro.val()) {
      result = false;
      $textDescripcionOtro.closest('.form-group').addClass('has-error');
    } 
    return result;
  };

//Event Listeners
$(document).ready(function (){

	$('#select-tipo').click( function(){
		toggleSelectionForm();
	});
	$('.view').click(function(){
		moverDetalleArticulo();
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
