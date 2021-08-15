let nombre=prompt("¿Cuál es tu nombre?")
let apellido=prompt("¿Cuál es tu nombre de familia?")
let titulo=prompt("¿Cuál es tu título?¿Sos un líder?¿Un capitán?¿Una lady?")


console.log(nombre + " "+ apellido+" "+titulo);
alert("Bienvenido " + titulo + " "+ nombre +" "+ apellido);

 function nacimiento(anio, edad) {
     let fecha= anio - edad
     return fecha  
} 

 let edadActual= parseInt(prompt("¿Cuántos años tenés?"));
 let anioActual= parseInt(prompt("¿En qué año estamos?"));
 let anioNacimiento= nacimiento(anioActual, edadActual)
 alert("Naciste en: "+ anioNacimiento)
console.log(anioNacimiento)

if (anioNacimiento > 2003){
    alert("Sos un poco joven para andar jugando esas cosas")
}

alert("NARRADOR: Te encontrás en un bote de remos, flotando a la deriva en el mar, tu barco es una ruina que se hunde lentamente en el horizonte.")
let primeraAccion= prompt("¿Qué te gustaría hacer?: -ENTRAR EN PANICO- -REVISAR EL BOTE- -TRATAR DE VOLVER AL BARCO- -DESCANSAR-")
if((primeraAccion=="ENTRAR EN PANICO") || (primeraAccion== "Entrar en panico") || (primeraAccion== "entrar en panico") || (primeraAccion== "PANICO")){
   console.log("Tu primera acción fue...entrar en pánico...ay que vergüenza.")
    let segundaAccion= alert(prompt("Como un completo bebé llorás y maldecís al destino, al sol y a todas las deidades haciendo un escándalo vergonzoso de ver, menos mal que estás solo/sola...¿O lo estás? ¿Por qué no tratás de hacer alguna de revisar el bote primero?"))
   if ((segundaAccion=="REVISAR EL BOTE")|| (segundaAccion=="Revisar el bote")|| (segundaAccion=="revisar el bote")||(segundaAccion=="BOTE")){
       alert("Revisando el bote encontrás una serie de ítems: una botella de 2 litros de RON, 4 latas de PATÉ, un FRISBEE, un ESPEJO, una pistola de BENGALA, una LONA, y un balde con seis litros de AGUA");
   }
} else if((primeraAccion=="REVISAR EL BOTE")||(primeraAccion=="revisar el bote")||(primeraAccion=="Revisar el bote")|| (primeraAccion=="BOTE")){
    console.log("Muy bien, tenés instinto de supervivencia, veamos qué sucede ahora... ")
    alert("Revisando el bote encontrás una serie de ítems: una botella de 2 litros de RON, 4 latas de PATÉ, un FRISBEE, un ESPEJO, una pistola de BENGALA, una LONA, y un balde con seis litros de AGUA");
} else if((primeraAccion=="TRATAR DE VOLVER AL BARCO")||(primeraAccion=="Tratar de volver al barco")||(primeraAccion=="tratar de volver al barco")||(primeraAccion=="BARCO")){
    console.log ("¿No acabo de decir que se hundió?")
    alert("¿Cómo? No parece que tengas remos, estás a la deriva")
    let segundaAccion= alert(prompt("Quizás deberías REVISAR EL BOTE"))
    if ((segundaAccion=="REVISAR EL BOTE")|| (segundaAccion=="Revisar el bote")|| (segundaAccion=="revisar el bote")||(segundaAccion=="BOTE")){
       alert("Revisando el bote encontrás una serie de ítems: una botella de 2 litros de RON, 4 latas de PATÉ, un FRISBEE, un ESPEJO, una pistola de BENGALA, una LONA, y un balde con seis litros de AGUA");
   }
}else if((primeraAccion=="DESCANSAR")||(primeraAccion=="Descansar")||(primeraAccion=="descansar")){
    console.log ("Una actitud relajada, o pereza, lo veremos más adelante");
    alert("De la mejor manera posible y sin prestar atención a tu entorno te acomodás en el bote y te ponés a descansar")
}else {
    console.log("No creo que haya prestado atención")
    alert("Si...no creo que sirva así, por qué no mejor volvés a intentarlo en un rato.")
}
