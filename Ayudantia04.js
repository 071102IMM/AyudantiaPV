
$(document).ready(function(){

    var contener = $("#contenedor2");

    contener.click(function(){
        var idContenedor2=
        $(this).fadeTo("fast",0.5);

    });

    contener.click(function(){
        $(this).fadeTo("fast",1);

    });


    var color = $("#contenedor1");
    color.click(function(){
        $("#otrotexto").css("color","blue");
        console.log("hola")
    })

    var texto = $("#contenedor3");
    texto.click(function(){
        $(this).text("Sigue leyendo");
    })

});


    
    



