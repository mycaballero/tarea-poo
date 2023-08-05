import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const vehicles = ref([])

  return { vehicles }
})

export class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  getNombreCompleto() {
    return this.nombre + " " + this.apellido;
  }
}

export class Veiculo {
  constructor(tipo, matricula, pma, dias) {
    this.tipo = tipo;
    this.matricula = matricula;
    this.pma = pma;
    this.dias = dias;
  }

  getTarifa() {
    const base = 50
    const tarifas = {
      coche: `${(base + 1.5) * this.dias}`,
      microbus: `${((base + 1.5) * this.dias) +2}`,
      carga: `${(base + 20) * this.dias}`,
      camion: `${(base * this.dias) + 40}`
    }
    return tarifas[this.tipo]
  }

  getImage() {
    const images = {
      coche: './src/assets/img/coche.png',
      microbus: './src/assets/img/microbus.png',
      carga: './src/assets/img/carga.png',
      camion: '../src/assets/img/camion.png'
    }
    return images[this.tipo]
  }
}