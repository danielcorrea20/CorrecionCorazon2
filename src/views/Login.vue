<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
const nombre = ref('');
const usuario = ref('');
const BoolMensaje = ref(false);
const lista = ref([]);
async function leerApi() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    lista.value = response.data;
    console.log(lista);
}
onBeforeMount(leerApi)
function comprobar() {
    for (let index in lista.value) {
        if (lista.value[index].name == nombre.value && lista.value[index].username == usuario.value) {
            location.replace('/listado');
        } else {
            BoolMensaje.value = true;
        }
    }
}
</script>

<template>
    <div>
        <h1 style="text-align:center">BIENVENIDO USUARIO</h1>
        <v-sheet width="300" class="mx-auto">
            <v-form @submit.prevent>
                <v-label>Nombre</v-label>
                <v-text-field v-model="nombre" :rules="rules" label="nombre"></v-text-field>
                <v-label>Usuario</v-label>
                <v-text-field v-model="usuario" :rules="rules" label="usuario"></v-text-field>
                <v-btn @click="comprobar">Login</v-btn>
                <p v-if="BoolMensaje">El usuario no existe</p>
            </v-form>
        </v-sheet>
    </div>
</template>