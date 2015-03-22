//Vacia los espacios en los inputs y textarea
var resetearInputs = function(){
  $('input').val('');	
  $('textarea ').val('');	
  ocultarFormulario();
};

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
   moverDetalleArticulo();
  $('#target').slideDown();

}

/*
var refrescarArticulos = function () {
  var vehiculoRow;
  $('#tabla-articulo tbody').html('');
  Articulos.forEach(function (articulo, i) {
    articuloDiv = '<tr data-index="' + i + '">';
    articuloDiv += '<td><a href="javascript:;" data-index="' + i + '" class="detalle">' + articulo.getTipo() + '</a></td>';
    articuloDiv += '<td>' + articulo.getMarca() + '</td>';
    articuloDiv += '<td>' + articulo.getModelo() + '</td>';
    articuloDiv += '<td>' + articulo.getColor() + '</td>';
    articuloDiv += '<td>' + articulo.getMotor().getNumeroSerie() + '</td>';
    articuloDiv += '<td>' + articulo.getMotor().getCilindraje() + '</td>';
    articuloDiv += '<td>' + articulo.getLlantas().length + '</td>';
    articuloDiv += '<td><span data-index="' + i + '" class="delete">&otimes;</span></td>';
    articuloDiv += '</tr>';
    $('#tabla-articulo tbody').append(articuloDiv);
  });

  $('#tabla-articulo .delete').click(function () {
    Articulos.splice($(this).data('index'), 1);
    refrescarTabla();
  });
  $('#tabla-articulo .detalle').click(function () {
    refrescarArticulo($(this).data('index'));
  });

};

$(document).ready(function () {

  $('#crear-articulo').click(function () {
    $('#form-articulo').stop().slideDown();
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

    refrescarArticulo();
    // $('#form-vehiculo input').val('');
  });


  Articulos.push(new Automovil('Nissan', 'Almera', 'Rojo', '12345', '1600cc')),
  Articulos.push(new Moto('Duicati', 'Diavel', 'Negro', '54321', '1200cc')),
  Articulos.push(new Camion('Mack', 'MRT450', 'Blanco', '67890', '8000cc')),

  refrescarArticulo();
});
*/


//Validaciones del Formulario

var validate = function () {
    var result = true,
      //Seleccion de que dsositivo se almacena
      $selectTipoDispositivo = $('#select-tipo'),
      //Si escoje computadora 
      $inputNombreCompu = $('#input-nombre-compu'),
      $inputMarcaCompu = $('#input-marca-compu'),
      $inputModeloCompu = $('#input-modelo-compu'),
      $inputActivoCompu = $('#input-activo-compu'),
      $selectSistemaCompu = $('#select-os-compu'),
      $selectEstiloCompu = $('#select-estilo-compu'),
      $inputPantallaCompu = $('#input-pantallas-compu'),
      //Si escoje Movil
      $inputNombreMovil = $('#input-nombre-movil'),
      $inputMarcaMovil= $('#input-marca-movil'),
      $inputModeloMovil = $('#input-modelo-movil'),
      $inputActivoMovil = $('#input-activo-movil'),
      $selectSistemaMovil = $('#select-os-movil'),
      $selectEstiloMovil = $('#select-estilo-movil'),
      $selectSupportMovil = $('#select-soporte'),
      //Si escoje otro tipo de activo
      $inputNombreOtro = $('#input-nombre-otro'),
      $inputMarcaOtro = $('#input-marca-otro'),
      $inputModeloOtro = $('#input-modelo-otro'),
      $inputActivoOtro = $('#input-activo-otro'),
      $textDescripcionOtro = $('#input-descriptivo-otro');
      //Removemos primero si ya habia error en el formulario
      $('.has-error').removeClass('has-error');
   //Validaciones para selec de Tipo de Dispositivo
    if (!$selectTipoDispositivo.val() || $selectTipoDispositivo.val().length > 50) {
      result = false;
      $selectTipoDispositivo.closest('.form-group').addClass('has-error');
    }
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

//Event Listeners del formulario
$(document).ready(function (){

  
  //Boton de submit el formulario
  $('.submit').click( function(){
    if(validate()){

    var nuevoArticulo;

    switch ($('#select-tipo').val()) {
    case 'computadora':
      nuevoArticulo = new Computadora($('#input-marca').val(), $('#input-modelo').val(), $('#input-color').val(), $('#input-serie').val(), $('#input-cilindraje').val());
      break;
    case 'movil':
      nuevoArticulo = new Movil($('#input-marca').val(), $('#input-modelo').val(), $('#input-color').val(), $('#input-serie').val(), $('#input-cilindraje').val());
      break;
    case 'otro':
      nuevoArticulo = new Otro($('#input-marca').val(), $('#input-modelo').val(), $('#input-color').val(), $('#input-serie').val(), $('#input-cilindraje').val());
    }
    Articulos.push(nuevoArticulo);
    refrescarArticulos();
    }
    
  });
  //Boton de resetar el formulario
  $('#resetear').click(function(){
    resetearInputs();
  });  

});



