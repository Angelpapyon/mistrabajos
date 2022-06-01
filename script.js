function serie(){
    const serie=[];
    let i=1;
    let n=prompt("Ingrese el número de terminos pares");
    while(i<=n){
        serie[i-1]=i*5;
        i++;
    } 
    let texto = "<ul>";
    for (let j = 0; j < serie.length; j++) {
      texto =texto+ "<li>" + serie[j] + "</li>";
    }
    texto += "</ul>";
    document.getElementById("idserie").innerHTML=texto;   
}


function aleatorio(){
    var aleatorio = Math.floor(Math.random() * 100) + 1;

    if(aleatorio<10){
    
        aleatorio=Math.floor(Math.random() * 100) + 1;
    
    }
    document.getElementById("IdAl").innerHTML=aleatorio;
}



















function multiplos(){
    const multiplos=[];
    let i=1;
    let n=prompt("Ingrese el número de terminos pares");
    while(i<=n){
        multiplos[i-1]=i*3;
        i++;
    } 
    let texto = "<ul>";//*Se crea una variable TEXTO, que contiene la sintaxis de una etiqueta <UL>, con lo cual se inicia la lista.
    for (let j = 0; j < multiplos.length; j++) {
      texto =texto+ "<li>" + multiplos[j] + "</li>";//*En cada iteración, se agrega el elemento <LI> a cada fila, para generar los elementos de la lista
    }
    texto += "</ul>";//*Para finalizar, se agrega la etiqueta de cierre de la lista </UL>
    document.getElementById("idmultiplos").innerHTML=texto;   
}