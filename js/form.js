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

  $('#nombre-articulo span small').html(articuloActual.getNombre());
  $('#marca-articulo span small').html(articuloActual.getMarca());
  $('#modelo-articulo span small').html(articuloActual.getModelo());
  $('#activo-articulo span small').html(articuloActual.getActivo());
  $('#os-articulo span small').html(articuloActual.getOs());
  $('#estilo-articulo span small').html(articuloActual.getEstilo());
  $('#pantallas-articulo span small').html(articuloActual.getPantallas());
  $('#soporte-articulo span small').html(articuloActual.getSoporte());
  $('#descripcion-articulo span small').html(articuloActual.getDescripcion());
  
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


var refrescarArticulos = function () {
  var articuloDiv;
  $('#articulos_registrados').html('');
  Articulos.forEach(function (articulo, i) {
    articuloDiv = '<div  data-index="' + i + 'class="col-xs-4 col-sm-4">';
    articuloDiv += '<p>Dueño: <span><small>'+ articulo.getNombre() +'</small></span></p>';
    articuloDiv += '<p>Marca:<span><small>' + articulo.getMarca() + '</small> </span></p>';
    articuloDiv += '<p>Modelo:<span><small>' + articulo.getModelo() + '</small></span></p>';
    articuloDiv += '<p># Activo:<span><small>' + articulo.getActivo() + '</small></span></p>';
    articuloDiv += '<p>OS:<span><small>' + articulo.getOs() + '</small></span></p>';
    articuloDiv += '<div class="actionButtons pull-left">';
    articuloDiv += '<p><a class="btn view btn-default" href="javascript:;" role="button">View details »</a></p>';
    articuloDiv += '</div>';
    $('#articulos_registrados').append(articuloDiv);
  });
  
   $('.view').click(function () {
    moverDetalleArticulo();
  });  
};


$(document).ready(function () {

  $('.submit').click(function () {
    $('articulos_registrados').stop().slideDown();
  });


  Articulos.push(new Computadora( "Rogelio Diaz Jimenez", "Acer", "Aspire E 15", "526FGHDG-65354-HJ55", "Linux", "Laptop", 1, "Wi-Fi or LAN",'')),
  Articulos.push(new Movil("Rogelio Diaz Jimenez", "LG", "G3", "865GHT-GGHH-V655", "Android", "Smartphone", 1, "4G", '')),
  Articulos.push(new Otro("Rogelio Diaz Jimenez", "Keen", "Hiking Shoe", "5622DFF-FFF5511R-DDF", '', '', '', '', "Zapatos de montaña!")),

  refrescarArticulo();
});



//Validaciones del Formulario

var validate = function () {
    var result = true,
      //Seleccion de que dsositivo se almacena
      selectTipoDispositivo = $('#select-tipo').val(),
      //Si escoje computadora 
      inputNombreCompu = $('#input-nombre-compu').val(),
      inputMarcaCompu = $('#input-marca-compu').val(),
      inputModeloCompu = $('#input-modelo-compu').val(),
      inputActivoCompu = $('#input-activo-compu').val(),
      selectSistemaCompu = $('#select-os-compu').val(),
      selectEstiloCompu = $('#select-estilo-compu').val(),
      inputPantallaCompu = $('#input-pantallas-compu').val(),
      //Si escoje Movil
      inputNombreMovil = $('#input-nombre-movil').val(),
      inputMarcaMovil= $('#input-marca-movil').val(),
      inputModeloMovil = $('#input-modelo-movil').val(),
      inputActivoMovil = $('#input-activo-movil').val(),
      selectSistemaMovil = $('#select-os-movil').val(),
      selectEstiloMovil = $('#select-estilo-movil').val(),
      selectSupportMovil = $('#select-soporte').val(),
      //Si escoje otro tipo de activo
      inputNombreOtro = $('#input-nombre-otro').val(),
      inputMarcaOtro = $('#input-marca-otro').val(),
      inputModeloOtro = $('#input-modelo-otro').val(),
      inputActivoOtro = $('#input-activo-otro').val(),
      textDescripcionOtro = $('#input-descriptivo-otro').val();
      //Removemos primero si ya habia error en el formulario
      $('.has-error').removeClass('has-error');
   //Validaciones para selec de Tipo de Dispositivo
   if (!selectTipoDispositivo.val()) {
      result = false;
      selectTipoDispositivo.closest('.form-group').addClass('has-error');
    } else {
      selectTipoDispositivo.closest('.form-group').addClass('has-success');

    //Validaciones para Nombres
    if (!inputNombreCompu.val() || inputNombreCompu.val().length > 50) {
      result = false;
      inputNombreCompu.closest('.form-group').addClass('has-error');
    }else {
      inputNombreCompu.closest('.form-group').addClass('has-success');
    }
    if (!inputNombreMovil.val() || inputNombreMovil.val().length > 50) {
      result = false;
      inputNombreMovil.closest('.form-group').addClass('has-error');
    }else {
      inputNombreMovil.closest('.form-group').addClass('has-success');
    }
    if (!inputNombreOtro.val() || inputNombreOtro.val().length > 50) {
      result = false;
      inputNombreOtro.closest('.form-group').addClass('has-error');
    }else {
      inputNombreOtro.closest('.form-group').addClass('has-success');
    }
    //Validaciones para Marca
    if (!inputMarcaCompu.val() || inputMarcaCompu.val().length > 15) {
      result = false;
      inputMarcaCompu.closest('.form-group').addClass('has-error');
    }else {
      inputMarcaCompu.closest('.form-group').addClass('has-success');
    }
    if (!inputMarcaMovil.val() || inputMarcaMovil.val().length > 15) {
      result = false;
      inputMarcaMovil.closest('.form-group').addClass('has-error');
    }else {
      inputMarcaMovil.closest('.form-group').addClass('has-success');
    }
    if (!inputMarcaOtro.val() || inputMarcaOtro.val().length > 15) {
      result = false;
      inputMarcaOtro.closest('.form-group').addClass('has-error');
    }else {
      inputMarcaOtro.closest('.form-group').addClass('has-success');
    }
    //Validaciones para Modelo
    if (!inputModeloCompu.val() || inputModeloCompu.val().length > 15) {
      result = false;
      inputModeloCompu.closest('.form-group').addClass('has-error');
    }else {
      inputModeloCompu.closest('.form-group').addClass('has-success');
    }
    if (!inputModeloMovil.val() || inputModeloMovil.val().length > 15) {
      result = false;
      inputModeloMovil.closest('.form-group').addClass('has-error');
    }else {
      inputModeloMovil.closest('.form-group').addClass('has-success');
    }
    if (!inputModeloOtro.val() || inputModeloOtro.val().length > 15) {
      result = false;
      inputModeloOtro.closest('.form-group').addClass('has-error');
    }else {
      inputModeloOtro.closest('.form-group').addClass('has-success');
    }
    //Validaciones para Activos
    if (!inputActivoCompu.val()) {
      result = false;
      inputActivoCompu.closest('.form-group').addClass('has-error');
    }else {
      inputActivoCompu.closest('.form-group').addClass('has-success');
    }
    if (!inputActivoMovil.val()) {
      result = false;
      inputActivoMovil.closest('.form-group').addClass('has-error');
    }else {
      inputActivoMovil.closest('.form-group').addClass('has-success');
    }
    if (!inputActivoOtro.val()) {
      result = false;
      inputActivoOtro.closest('.form-group').addClass('has-error');
    }else {
      inputActivoOtro.closest('.form-group').addClass('has-success');
    }
    //Validaciones para Selects Sistema
    if (!selectSistemaCompu.val()) {
      result = false;
      selectSistemaCompu.closest('.form-group').addClass('has-error');
    }else {
      selectSistemaCompu.closest('.form-group').addClass('has-success');
    }
    if (!selectSistemaMovil.val()) {
      result = false;
      selectSistemaMovil.closest('.form-group').addClass('has-error');
    }else {
      selectSistemaCompu.closest('.form-group').addClass('has-success');
    }
    //Validaciones para Selects Tipo
    if (!selecTipoCompu.val()) {
      result = false;
      selecTipoCompu.closest('.form-group').addClass('has-error');
    }else {
      selecTipoCompu.closest('.form-group').addClass('has-success');
    }
    if (!selecTipoMovil.val()) {
      result = false;
      selecTipoMovil.closest('.form-group').addClass('has-error');
    } else {
      selecTipoMovil.closest('.form-group').addClass('has-success');
    }
    //Validaciones para Pantallas
    if (!inputPantallaCompu.val()) {
      result = false;
      inputPantallaCompu.closest('.form-group').addClass('has-error');
    }else {
      inputPantallaCompu.closest('.form-group').addClass('has-success');
    }
    //Validaciones para Soporte
    if (!selectSupportMovil.val()) {
      result = false;
      selectSupportMovil.closest('.form-group').addClass('has-error');
    } else {
      selectSupportMovil.closest('.form-group').addClass('has-success');
    }
    //Validaciones para Otro Descripcion
    if (!textDescripcionOtro.val()) {
      result = false;
      textDescripcionOtro.closest('.form-group').addClass('has-error');
    } else {
      textDescripcionOtro.closest('.form-group').addClass('has-success');
    }
    return result;
  };

//Event Listeners del formulario
$(document).ready(function (){

  
  //Boton de submit el formulario
  $('.submit').click( function(){
    var nuevoArticulo;
        if(validate()){
        switch ($('#select-tipo').val()) {
        case 'computadoras':
          nuevoArticulo = new Computadora($('#input-nombre-compu').val(), $('#input-marca-compu').val(), $('#input-modelo-compu').val(),$('#input-activo-compu').val(), $('#select-os-compu').val(),$('#select-estilo-compu').val(), $('#input-pantallas-compu').val(), "Wi-Fi or LAN",'');
          break;
        case 'moviles':
          nuevoArticulo = new Movil($('#input-nombre-movil').val(), $('#input-marca-movil').val(), $('#input-modelo-movil').val(), $('#input-activo-movil').val(), $('#select-os-movil').val(), $('#select-estilo-movil').val(), 1, $('#select-soporte').val(), '');
          break;
        case 'otros':
          nuevoArticulo = new Otro($('#input-nombre-otro').val(), $('#input-marca-otro').val(), $('#input-modelo-otro').val(), $('#input-activo-otro').val(), '', '', '', '', $('#input-descriptivo-otro').val());
          break;
        default:
        }
    Articulos.push(nuevoArticulo);
    refrescarArticulos();
    }
  }) 
});