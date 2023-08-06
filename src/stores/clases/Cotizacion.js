import { Cliente } from "./Cliente"
import { Usuario } from "./Usuario"
import { Vehiculo } from "./Vehiculo"

export class Cotizacion {
    constructor(id, cliente = Cliente, vehiculo = Vehiculo , usuario = Usuario, dias) {
        this.id = id;
        this.cliente = cliente;
        this.vehiculo = vehiculo;
        let _usuario = usuario;
        this.dias = dias;

        this.usuario =  () => _usuario.getNombreCompleto();
    }

    getCotizacion() {
        return {
            id: this.id,
            cliente: this.cliente.getNombreCompleto(),
            vehiculo: this.vehiculo.matricula,
            tipo: this.vehiculo.tipo,
            imagen: this.vehiculo.getImage(),
            tarifa: this.getTarifa(),
            usuario: this.usuario,
            dias: this.dias
        }
    }

    getTarifa() {
        const base = 50
        const tarifas = {
          coche: `${(base + 1.5) * this.dias}`,
          microbus: `${((base + 1.5) * this.dias) +2}`,
          carga: `${(base + 20) * this.dias}`,
          camion: `${(base * this.dias) + 40}`
        }
        return tarifas[this.vehiculo.tipo]
      }

}