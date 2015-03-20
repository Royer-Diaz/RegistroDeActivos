
var ocultarFormulario = function() {
  $('#computadora-fs').stop().hide();
  $('#movil-fs').stop().hide();
  $('#otros-fs').stop().hide();
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

}


//Event Listeners
$(document).ready(function (){
	$('#select-tipo').click( function(){
		toggleSelectionForm();
	});
});