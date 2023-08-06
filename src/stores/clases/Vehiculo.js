export class Vehiculo {
    constructor(tipo, matricula, pma) {
      this.tipo = tipo;
      this.matricula = matricula;
      this.pma = pma;
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