var arrayBusquedas = [];
var fila = 0;

function clickEnBuscar() {
    if ($("#resultado").css("visibility") === "visible") {
        console.log("borrar anterior");
        $("#titulo").text("");
        $("#director").text("");
        $("#anho").text("");
        $("#tituloFicha").text("");
        $("#generoFicha").text("");
        $("#anhoFicha").text("");
        $("#directorFicha").text("");
        $("#guionistaFicha").text("");
        $("#duracionFicha").text("");
        $("#actoresFicha").text("");
        $("#imagenPoster").remove();
        realizarPeticion();
    } else {
        realizarPeticion();
    }
  
}

function realizarPeticion(){
    http_request = false;
        if (window.XMLHttpRequest) { 
            http_request = new XMLHttpRequest();
            if (http_request.overrideMimeType) {
                http_request.overrideMimeType('text/xml'); 
            }
        } else if (window.ActiveXObject) { 
            try {
                http_request = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                $("#mensaje").text("Error en la conexión, \n revise su conexión a internet");
                try {
                    http_request = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {
                    $("#mensaje").text("Ha habido un error en la petición,\n por favor intentenlo mas tarde");
                    console.log("Ha habido un error en la petición");
                }
            }
        }
 
    http_request.onreadystatechange = function(){
        if (http_request.readyState==4) {
            if (http_request.status==200){
                procesarJSON(http_request.responseText);
            } else {
                $("#mensaje").text("Ha habido un error en la petición,\n intentenlo mas tarde");
                console.log("Ha habido un error en la petición");
            }
        }
        console.log("STATE:" + http_request.readyState);
        console.log("STATUS:" + http_request.status);
    };
    var textoBuscar=$("#cajaBuscar").val();
    var tipoBuscar='&type=' + $("#selectTipo").val();
    if ( $("#selectAnho").val() !=="Año:Todos"){
        var tipoAnho='&y=' + $("#selectAnho").val();
    } else {
        var tipoAnho='';
    }
    
    if (textoBuscar) {
        http_request.open('GET', 'http://www.omdbapi.com/?apikey=6e751c1f&t='+ textoBuscar + tipoAnho +  tipoBuscar, true);
        console.log("ENVIAR:" + 'http://www.omdbapi.com/?apikey=6e751c1f&t='+ textoBuscar + tipoAnho + tipoBuscar )
        http_request.send();
    } else {
        $("#mensaje").text("Has olvidado escribir tu busqueda");
        $("#cajaBuscar").css("border","2px solid #FF006F");
    }
    
}

function procesarJSON(respuesta){

    var obj = JSON.parse(respuesta);
    console.log(obj); // Punto control consola
    
if (obj.Response === "False") {
    $("#mensaje").text("No se ha encontrado ningun resultado");
    $("#cajaBuscar").css("border","2px solid #FF006F");
} else {
    $("#mensaje").text("Resultado:");
    $("#resultado").css("visibility","visible");
    //Crear elementos resultado
    titulo = document.createElement("h3");
    var textoTitulo = document.createTextNode(obj.Title);
    titulo.appendChild(textoTitulo);
    console.log(titulo);
    document.querySelector("#titulo").appendChild(titulo);

    director = document.createElement("h3");
    var textoDirector = document.createTextNode(obj.Director);
    director.appendChild(textoDirector);
    console.log(director);
    document.querySelector("#director").appendChild(director);

    anho = document.createElement("h3");
    var textoAnho = document.createTextNode(obj.Year);
    anho.appendChild(textoAnho);
    console.log(anho);
    document.querySelector("#anho").appendChild(anho);

    var imagenPoster = document.createElement("img");
    imagenPoster.setAttribute("src",obj.Poster);
    imagenPoster.setAttribute("id","imagenPoster");
    console.log(imagenPoster);
    document.querySelector("#poster").appendChild(imagenPoster);
    var busqueda = {busqTit: textoTitulo.data,
            busqDir: textoDirector.data, 
            busqAnho: textoAnho.data};
    console.log("Nueva busquda " + busqueda.busqTit
    + " " + busqueda.busqDir
     + " " + busqueda.busqAnho);
    arrayBusquedas.push(busqueda);
    $("#botonBorrar").css("background-image","url('./media/borrar.png')");
    $("#textoAjustesBorrar").text("Borrar historial de consultas");  
    
//Mostrar fichaCompleta
    $("#divFicha").css("visibility","visible");
    $("#botonFichaCompleta").css("animation-play-state","initial");
    $("#tituloFicha").text(busqueda.busqTit);
    $("#directorFicha").text(busqueda.busqDir);
    $("#anhoFicha").text(busqueda.busqAnho);

    genero = document.createElement("h3");
    genero.setAttribute("class","valoresFicha");
    var textoGenero = document.createTextNode(obj.Genre);
    genero.appendChild(textoGenero);
    console.log(genero);
    document.querySelector("#generoFicha").appendChild(genero);

    guionista = document.createElement("h3");
    guionista.setAttribute("class","valoresFicha");
    var textoGuionista = document.createTextNode(obj.Writer);
    guionista.appendChild(textoGuionista);
    console.log(guionista);
    document.querySelector("#guionistaFicha").appendChild(guionista);

    duracion = document.createElement("h3");
    duracion.setAttribute("class","valoresFicha");
    var textoDuracion = document.createTextNode(obj.Runtime);
    duracion.appendChild(textoDuracion);
    console.log(duracion);
    document.querySelector("#duracionFicha").appendChild(duracion);

    actores = document.createElement("h3");
    actores.setAttribute("class","valoresFicha");
    var textoActores = document.createTextNode(obj.Actors);
    actores.appendChild(textoActores);
    console.log(actores);
    document.querySelector("#actoresFicha").appendChild(actores);

}   
}

function tablaConsultas() {
    console.log("crear tabla de consultas");
    console.log(arrayBusquedas.length);
        for (var i=0; i < fila;i++){
            $("#filatabla"+fila).remove();
        }
    arrayBusquedas.forEach(function(busqueda) {
        console.log("loop: " + busqueda);
        fila = fila +1; 
        var filaTr = document.createElement("tr");
        filaTr.setAttribute("id","filatabla"+fila);
        document.querySelector("#tablaConsultas").appendChild(filaTr);
        var tablaTitulo = busqueda.busqTit;
        var celdaTit = document.createElement("td");
        celdaTit.setAttribute("id","columnaTitulo"+fila);
        document.querySelector("#filatabla"+fila).appendChild(celdaTit);
        var textoCeldaTit = document.createTextNode(tablaTitulo);
        document.querySelector("#columnaTitulo"+fila).appendChild(textoCeldaTit);
        
        
        var tablaDirector = busqueda.busqDir;
        var celdaDir = document.createElement("td");
        celdaDir.setAttribute("id","columnaDirector"+fila);
        document.querySelector("#filatabla"+fila).appendChild(celdaDir);
        var textoCeldaDir = document.createTextNode(tablaDirector);
        document.querySelector("#columnaDirector"+fila).appendChild(textoCeldaDir);
        

        var tablaAnho = busqueda.busqAnho;
        var celdaAnho = document.createElement("td");
        celdaAnho.setAttribute("id","columnaAnho"+fila);
        document.querySelector("#filatabla"+fila).appendChild(celdaAnho);
        var textoCeldaAnho = document.createTextNode(tablaAnho);
        document.querySelector("#columnaAnho"+fila).appendChild(textoCeldaAnho);
        

        console.log ("Array ==> busqueda: " 
        + " " + tablaTitulo + " " + tablaDirector + " " + tablaAnho);
    });
}
