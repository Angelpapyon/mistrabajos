var aleatorio1= Math.floor(Math.random() *10)+1;

var aleatorio2= Math.floor(Math.random()*30)+1;

var intentos = 0;

var correcto = false;

function facil(){

    while( correcto == false){
        var entrada = prompt("Introduzca un número del 1 al 10");
        if (entrada == null){
        return;
        }
        intentos ++;
        if (entrada == aleatorio1){
            alert("Es correcto... Usaste"+ intentos + "intentos")

            correcto = true;
            document.getElementById('respuesta').innerHTML = intentos + ":intentos en total";
            document.getElementById('numero').innerHTML = aleatorio1 + ":es la respuesta que buscabas";
        }else
         {
            alert(entrada + " No es el número correcto, intentos usados: " + intentos);
         }
    }
}


function intermedio(){

    while (correcto == false && intentos < 5) {
        var entrada = prompt("Introduzca un número cualquiera: ");
        if (entrada == null){
        return;
        }
        intentos++;
        if (entrada == aleatorio2) {
        alert("Correcto! Usaste " + intentos + " intentos.");
        correcto = true;
        document.getElementById('resp').innerHTML = intentos;
        document.getElementById('num').innerHTML = aleatorio2;
        } else
        {
        alert(entrada + " no es el número correcto, intentos usados: " + intentos);
        }
    }
    if (intentos == 5){
        alert("Game Over, no acertaste al número correcto.")
        document.getElementById('fallo').innerHTML = "El número correcto era: " + aleatorio2;
        
    }
}

function dificil(){
    
    while (correcto == false && intentos < 3) {
        var entrada = prompt("Introduzca un número cualquiera: ");
        if (entrada == null){
        return;
        }
        intentos++;
        if (entrada == aleatorio2) {
        alert("Correcto! Usaste " + intentos + " intentos.");
        correcto = true;
        document.getElementById('resp').innerHTML = intentos;
        document.getElementById('num').innerHTML = aleatorio2;
        } else
        {
        alert(entrada + " no es el número correcto, intentos usados: " + intentos);
        }
    }
    if (intentos == 3) {
        alert("Game Over, no acertaste al número correcto.")
        document.getElementById('fallo').innerHTML = "El número correcto era: " + aleatorio2;
        
        
        }
    }
  