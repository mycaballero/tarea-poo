import { Persona } from './Persona'

export class Usuario extends Persona {
    constructor(nombre, apellido) {
        super()
        this.nombre = nombre;
        this.apellido = apellido;
    }

    getNombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
}