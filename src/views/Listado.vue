<script setup>
import { onBeforeMount, ref } from 'vue';
import card from '@/components/Card.vue'
import axios from 'axios';
const listanombres = ref([]);
const lista = ref([])
const bool = ref(false);
const listaIndices = ref([]);
const esta = ref(false);
const listaBool= ref([]);
async function leerApi() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    lista.value = response.data;
    console.log(lista);
}
onBeforeMount(leerApi)
function mostrarLista(numero) {
    if (numero != 0) {
        bool.value = true;
    } else {
        bool.value = false;
    }
}
function input(){
    for(let index in lista.vue){
        listaBool.value.push(false);
        listanombres.value.push('');
    }
}
function editar(indice){
    listaBool.value[indice]=!listaBool.value[indice];
}
onBeforeMount(input)
function comprobarFav(indice) {
    esta.value = false;
    //PRIMERO COMPUEBA A VER SI ESTA YA COMO FAVORITO
    for (let index in listaIndices.value) {
        if (listaIndices.value[index] == indice) {
            esta.value = true;
            listaIndices.value.splice(index, 1);
        }
    }
    //SINO ESTA LO AÑADO Y HUBIERA ESTADO LO HUBIERA ELIMINADO. SI LA LISTA ESTA VACIA PUES AÑADE
    if (!esta.value) {
        listaIndices.value.push(indice);
    }

}
function guardar(indice){
    lista.value[indice].title = listanombres.value[indice]

}
</script>
<template>
    <h1 style="text-align:center">LISTADO</h1>
    <div style="text-align:center">
        <v-btn @click="mostrarLista(1)">Listado</v-btn>
        <v-btn @click="mostrarLista(0)">Favorito</v-btn>
    </div>
    <div class="container text-center">
        <div class="row" v-if="bool">
            <template v-for="(miembro, index) in lista" :key="index">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <card :id="miembro.id" :body="miembro.body" :title="miembro.title" />
                    <br>
                    <br>
                    <button class="btn btn-danger" @click="comprobarFav(miembro.id)">Favoritos</button>
                    <button class="btn btn-primary" @click="editar(index)">Editar</button>
                    <v-text-field v-if="listaBool[index]" type="text" v-model="listanombres[index]"/>
                    <button class="btn btn-success" @click="guardar(index)" v-if="listaBool[index]">Guardar</button>
                </div>
            </template>
        </div>
        <div class="row" v-if="!bool">
            <template v-for="index in listaIndices">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <card :id="lista[index -1].id" :body="lista[index -1].body  " :title="lista[index -1].title" />
                    
                </div>
            </template>
        </div>
    </div>
</template>