<?php

 // Obtenemos los datos del formulario
 $data = $_POST["contact"];

 // Imprimimos el resultado (exitoso o de error) convirtiendolo en json
 echo json_encode("El usuario ".$data[0]." se ha guardado correctamente");


?>
