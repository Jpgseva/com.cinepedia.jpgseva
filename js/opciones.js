function seleccionarAnho() {
var anhoIncial = 1900;
var anhoFinal = new Date().getFullYear();
    for (var i = anhoFinal;i>=anhoIncial;i--){
        $('#selectAnho').append($('<option>',
        {
           value: i,
           text : i 
       }));
    }
}