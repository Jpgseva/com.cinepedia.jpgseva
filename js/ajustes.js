function ajustes() {
    console.log("cambio en ajustes");
    

}




function modoOscuro() {
    console.log("mo");
    if ($("#checkboxModoOscuro").is(':checked')) {
        console.log("Modo oscuro activado"); 
        $("#textoAjustesModoOscuro").text("");
        $("#textoAjustesModoOscuro").text("Desactivar modo oscuro");        
        $("#divBuscar").css("background-image","url('./media/fondoNegro.png')");
        $("#divConsultar").css("background-image","url('./media/fondoNegro.png')");
        $("#divAjustes").css("background-image","url('./media/fondoNegro.png')");
        $("#tituloImg").attr("src","media/tituloBlanco.png");
        $("#divFicha").css("background-image","url('./media/fondoNegro.png')");
        $("#divInfo").css("background-image","url('./media/fondoNegro.png')");
        $(".encabezado").css("color","white");
        $(".encabezadosAjustes").css("color","white");
        $(".separadorAjustes").css("border-color","white");
        $("#textoAjustesModoOscuro").css("border-color","white");


    } else {
        console.log("Modo claro activado");
        $("#textoAjustesModoOscuro").text("");
        $("#textoAjustesModoOscuro").text("Activar modo oscuro");        
        $("#divBuscar").css("background-image","url('./media/fondo.png')");
        $("#divConsultar").css("background-image","url('./media/fondo.png')");
        $("#divAjustes").css("background-image","url('./media/fondo.png')");
        $("#divFicha").css("background-image","url('./media/fondo.png')");
        $("#divInfo").css("background-image","url('./media/fondo.png')");
        $("#tituloImg").attr("src","media/titulo.png");
        $(".encabezado").css("color","#696969");  
        $(".encabezadosAjustes").css("color","black");
        $(".separadorAjustes").css("border-color","#696969");
        $("#textoAjustesModoOscuro").css("border-color","black"); 
    }

}

function ajusteFiltroTipo() {
    console.log("ft");
    if ($("#checkboxFiltroTipo").is(':checked')) {
        console.log("Filtro tipo activado")
        $("#selectTipo").css("visibility","visible");
        $("#mensaje2").text("");
        $("#textoAjustesFiltroTipo").text("Desactivar filtro: tipo"); 
        
    } else {
        console.log("Filtro tipo desactivado"); 
        $("#selectTipo").css("visibility","hidden");
        if ($("#checkboxFiltroAnho").is(':checked')) {
            $("#mensaje2").text("Filtro tipo desactivado\n en ajustes");
            $("#textoAjustesFiltroTipo").text("Activar filtro: tipo"); 
        } else {
            $("#mensaje2").text("Filtro tipo y año desactivado\n en ajustes");  
        }
    }

}

function ajusteFiltroAnho() {
    console.log("fa");
    if ($("#checkboxFiltroAnho").is(':checked')) {
        console.log("Filtro año activado")
        $("#selectAnho").css("visibility","visible");
        $("#mensaje2").text("");
        $("#textoAjustesFiltroAnho").text("Desactivar filtro: año"); 
    } else {
        console.log("Filtro año desactivado");
        $("#selectAnho").css("visibility","hidden");
        $("#textoAjustesFiltroAnho").text("Activar filtro: año"); 
        $("#mensaje2").text("Filtro año desactivado en ajustes");  
        if ($("#checkboxFiltroTipo").is(':checked')) {
            $("#mensaje2").text("Filtro tipo desactivado\n en ajustes");
        } else {
            $("#mensaje2").text("Filtro tipo y año desactivado\n en ajustes");
        }  
    }
}

function borrarHistorial() {
    if (arrayBusquedas === undefined || arrayBusquedas.length == 0) {
        $("#botonBorrar").css("background-image","url('./media/borrarVacio.png')");
        $("#textoAjustesBorrar").text("Historial vacio");

    } else {
        console.log("Borrar historial de " + fila + " filas");
        console.log(arrayBusquedas.length);
        for (var i = 0; i <= fila; i++){
            $("#filatabla"+i).remove();
            console.log("Eliminada fila: " + i);
        }
        arrayBusquedas.length=0;
        $("#botonBorrar").css("background-image","url('./media/borrarVacio.png')");
        $("#textoAjustesBorrar").text("Historial vacio");
        

    }
}