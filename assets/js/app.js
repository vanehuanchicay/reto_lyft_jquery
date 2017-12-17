$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 2000);
});

var randomNumber = (function() {  // Para la generar un número de 3 dígitos random
 	var code = "";
  	var str = "1234567890";
 	 for (var i = 0; i < 3; i++) {
   		 code += str.charAt(Math.floor(Math.random() * str.length));
  	}
  return code;
});
	
    $("#input-key").keyup(function() {   //validando que solo sean validos los números 
      var notWord = /^[0-9]*$/;
      var inputValue = $(this).val();
      if (inputValue.length >= 10 && notWord.test(inputValue)) { //para que no ingresen menos de 10 números y se cumpla que solo ingresan letras.
        $("#btn-next").removeClass("disabled");// habilitar botones si las condiciones se dan.
      } else {
        $("#btn-next").addClass("disabled");
      }
    });


    $("#btn-next").click(function() {  //enviando código con alarma
       alert("Tu código es "+randomNumber());
     
      });
