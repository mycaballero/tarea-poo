import { Persona } from './Persona'

export class Cliente extends Persona {
    constructor(nombre, apellido, edad) {
        super()
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getNombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
}