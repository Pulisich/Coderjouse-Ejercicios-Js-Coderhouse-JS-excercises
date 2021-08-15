class Instructor {
    constructor(nombre, apellido, edad, rango, anios){

        this.nombre= nombre;
        this.apellido= apellido;
        this.edad= edad;
        this.rango= rango;
        this.anios= anios;
        this.activo= false;

        
    }

    activar(){
        this.activo= true; 
        console.log("El instructor " + this.apellido + " se encuentra activo.")
    }
}

const cintoNegro1= new Instructor ("Maximiliano", "Pedrotti", 41, "V DAN", 30)
console.log(cintoNegro1);
cintoNegro1.activar();

const cintoNegro2= new Instructor ("Pablo", "Pulisich", 27, "II DAN", 20)
console.log (cintoNegro2)
cintoNegro2.activar();

const cintoNegro3= new Instructor ("Walter Guillermo", "Burgueño",46, "III DAN", 18)
console.log(cintoNegro3)
cintoNegro3.activar();