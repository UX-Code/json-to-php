// A traves de jquery invocamos el evento submit del formulario
$("form").submit(function(e) {
    
  // preventDefault = Cancela el evento sin detener el resto del funcionamiento
  e.preventDefault();

  // Inicializamos data como un objeto Json
  dataJson = [];
  /* Recorremos todo el formulario almacenando los valores de los input con name=data y comenzamos a
     construir el objeto json */
  $("input[name=data]").each(function(){
      structure = {}
      structure = $(this).val();
      dataJson.push(structure);
  });

  // Enviamos por ajax los datos del formulario al destino en php utilizando el metodo post
  // Si todo esta correcto mostramos el resultado en una etiqueta p desde php.
  $.ajax({
    url: "destino.php",
    type: "POST",
     dataType:'json', // add json datatype to get json
     data: ({contact: dataJson}),
     success: function(result){
         $("form").after("<div class='message'>"+result+"</div>");
     }
  });

  setTimeout(function(){
    $('div.message').remove();
  }, 2000);
});
