var menuVisible = false;
var fichaVisible = true;

$(document).ready(function(){
    initAnimation();
    inicializar();
    seleccionarAnho();
});

function inicializar(){
    $("#menuLateral").click(function(){
        moverMenu();
    });
    $("#buscar").click(function(){
        mostrarBuscar();
    });
    $("#consultar").click(function(){
        mostrarConsultar();
    });
    $("#ajustes").click(function(){
        mostrarAjustes();
    });
    $("#informacion").click(function(){
        mostrarInfo();
    });
    $("#fichaCompleta").click(function(){
        mostrarFicha();
    });
    $("#botonFichaCompleta").click(function(){
        mostrarFicha();
    });
    $("#imagenPoster").click(function(){
        mostrarPoster();
    });
    $("#botonBuscar").click(function(){
        clickEnBuscar();
    });
    $("#checkboxModoOscuro").change(function(){
        modoOscuro();
    });
    $("#checkboxFiltroTipo").change(function(){
        ajusteFiltroTipo();
    });
    $("#checkboxFiltroAnho").change(function(){
        ajusteFiltroAnho();
    });
    $("#botonBorrar").click(function(){
        borrarHistorial();
    });
    $("#poster").click(function(){
        mostrarPoster();
    });

}

function moverMenu(){
    if (menuVisible) {
        $("#menuLateral").css("left", "-40%");
        $(".ico").css("visibility", "hidden");
        $(".botonMenu").css("visibility", "hidden");
        $("#separadorMenu").css("width", "0%");
        $("#menu").css("visibility", "hidden");
        $("#icoMenu").attr("src","media/menuPuntos.png");
        $("#textoLateral").css("visibility","visible");
        menuVisible = false;
    } else {
        $("#menuLateral").css("left", "0px");
        $(".ico").css("visibility", "visible");
        $(".botonMenu").css("visibility", "visible");
        $("#separadorMenu").css("width", "95%");
        $("#menu").css("visibility", "visible");
        $("#icoMenu").attr("src","media/menu.png");
        $("#textoLateral").css("visibility","hidden");
        menuVisible = true;
    }
}

function mostrarBuscar(){
    $("#divBuscar").css("left", "0px");
    $("#divConsultar").css("left", "-100%");
    $("#divInfo").css("left", "-100%");
    $("#divAjustes").css("left", "-100%");
    $("#textoLateral").text("Buscar");
    $("#textoLateral").css("margin-right", "-16px");
    if ($("#divFicha").css("visibility")==="visible") {
        $("#divFicha").css("visibility", "hidden");
    } else {
        $("#divFicha").css("visibility","visible");
    }
    
}

function mostrarConsultar(){
    $("#divConsultar").css("left", "0px");
    tablaConsultas(); 
    $("#divBuscar").css("left", "-100%");
    $("#divInfo").css("left", "-100%");
    $("#divAjustes").css("left", "-100%");
    $("#textoLateral").text("Consultas");
    $("#textoLateral").css("margin-right", "-28px");
    $("#divFicha").css("visibility", "hidden");
}

function mostrarAjustes(){
    $("#divAjustes").css("left", "0px");
    $("#divConsultar").css("left", "-100%");
    $("#divInfo").css("left", "-100%");
    $("#divBuscar").css("left", "-100%");
    $("#textoLateral").text("Ajustes");
    $("#textoLateral").css("margin-right", "-18px");
    $("#divFicha").css("visibility", "hidden");
}

function mostrarInfo(){
    $("#divInfo").css("left", "0px");
    $("#divConsultar").css("left", "-100%");
    $("#divBuscar").css("left", "-100%");
    $("#divAjustes").css("left", "-100%");
    $("#textoLateral").text("Acerca de");
    $("#textoLateral").css("margin-right", "-30px");
    $("#divFicha").css("visibility", "hidden");
}

function mostrarFicha(){
    
    var flechaUp="./media/flechaUp.png";
    var flechaDown="./media/flechaDown.png";

    if (fichaVisible){
        $("#divFicha").css("bottom", "0%");
        $("#fichaCompleta").css("margin-top", "2%");
        $("#botonFichaCompleta").css("margin-top", "2%");
        $("#botonFichaCompleta").css("background-image", "url(" + flechaDown + ")");
        fichaVisible=false;
    } else {
        $("#divFicha").css("bottom", "-86%");
        $("#fichaCompleta").css("margin-top", "1%");
        $("#botonFichaCompleta").css("margin-top", "-1%");
        $("#botonFichaCompleta").css("background-image", "url(" + flechaUp + ")");
        fichaVisible=true;
    }
    
}
function mostrarPoster() {
    var imagenMax = false;
    if (imagenMax) {
        $("#imagenPoster").css("max-width", "50%");
        imagenMax = false;
        
    } else {
        $("#imagenPoster").css("max-width", "80%");
        imagenMax = true;

    }
   
}

function initAnimation() {
    menuVisible=true;
    console.log(menuVisible);
    moverMenu();
    barAnimation();
    setTimeout(function() {
        moverMenu();
        $("#barraProgreso").css("visibility", "hidden");
        $("#tituloImgIntro").css("opacity", "0.2");
    
    
    }, 1100);
}

function barAnimation() {
    var duration = 1000;
    var st = window.performance.now();
    window.requestAnimationFrame(function step(time) {
        var diff = Math.round(time - st),
        value = Math.round(diff / duration * 100);
        value = value > 100 ? 100 : value;
        $("#barra").val(value);
        console.log(value);
       
        if (diff < duration) {
            window.requestAnimationFrame(step);
        }
  });

}





