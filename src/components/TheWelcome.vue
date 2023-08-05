<script setup>
import { ref } from 'vue'
import { Persona, Veiculo } from '../stores/counter'

const listaCotizacion = ref([]);
const listOptions = ref([
"coche",
"microbus",
"carga",
"camion"
])
const model = ref({
  nombre: null,
  apellido: null,
  edad: null,
  marca: null,
  tipo: null,
  matricula: null,
})
const agregarCotizacion = (value) => {
  if (value.nombre !== null && value.apellido !== null && value.edad !== null && value.matricula !== null && value.tipo !== null && value.dias !== null) {
  const nuevoItem = {
    id: listaCotizacion.value.length + 1,
    cliente: new Persona(model.value.nombre, model.value.apellido, model.value.edad),
    vehiculo: new Veiculo(model.value.tipo, model.value.matricula, model.value.pma, model.value.dias),
  }
  listaCotizacion.value.push(nuevoItem)
  }
  model.value = {
    nombre: null,
    apellido: null,
    edad: null,
    marca: null,
    tipo: null,
    matricula: null,
  }
}
</script>

<template>
  <div class="w-full min-h-screen bg-cover p-10">
    <h1 class="text-2xl font-bold mb-10">Cotizador de vehiculos</h1>
    <h4>Formulario</h4>
    <div class="p-3 bg-white w-full text-black rounded-lg shadow">
      <form class="flex flex-wrap">
        <div class="w-full flex flex-wrap">
          <div class="p-2 w-2/6">
            <input class="border rounded p-1 w-full" v-model="model.nombre" type="text" placeholder="Nombre" required/>
          </div>
          <div class="p-2 w-2/6">
            <input class="border rounded p-1 w-full" v-model="model.apellido" type="text" placeholder="Apellido" required/>
          </div>
          <div class="p-2 w-2/6">
            <input class="border rounded p-1 w-full" v-model="model.edad" type="number" placeholder="Edad" required/>
          </div>
          <div class="p-2 w-2/6">
            <input class="border rounded p-1 w-full" v-model="model.matricula" type="text" placeholder="Matricula" required/>
          </div>
          <div class="p-2 w-2/6">
            <select class="border rounded p-1 w-full h-8 bg-white" v-model="model.tipo" placeholder="Tipo" required>
              <option v-for="item in listOptions" :key="item" :value="item">{{ item }}</option>
            </select>
          </div>
          <div v-if="model.tipo === 'camion'" class="p-2 w-2/12">
            <input class="border rounded p-1 w-full" v-model="model.pma" type="number" placeholder="PMA" required/>
          </div>
          <div class="p-2" :class="model.tipo === 'camion'? 'w-2/12':'w-2/6'">
            <input class="border rounded p-1 w-full" v-model="model.dias" type="number" placeholder="Dias" required/>
          </div>
        </div>
        <div class="p-2">
          <button class="bg-black rounded py-1 text-white px-2 font-bold hover:bg-black/70 hover:text-green-300 transition-all " @click.prevent="agregarCotizacion(model)">Agregar cotización</button>
        </div>
      </form>
    </div>
    <h4>Cotizaciones</h4>
      <div class="bg-white rounded min-h-[60px] text-black p-2 shadow">
        <span v-if="!listaCotizacion.length">Aún No hay cotizaciones</span>
        <ul role="list" class="grid gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          <li v-for="item in listaCotizacion" :key="item.id" class="transition-all">
            <div class="flex items-center gap-x-6">
              <img class="h-16 w-16 rounded-full" :src="item.vehiculo.getImage()" :alt="item.tipo" />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">{{ item.cliente.getNombreCompleto() }}
                  <span class="text-red-300">{{ `${item.vehiculo.matricula}` }}</span>
                </h3>
                <p class="text-sm font-semibold leading-6 ">
                  Valor:
                  <span class="text-indigo-600">{{ ` $${item.vehiculo.getTarifa()} COP ` }}</span>
                  Días:
                  <span>{{ ` ${item.vehiculo.dias} ` }}</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>
