<script setup lang="ts">
import { TailwindPagination } from "laravel-vue-pagination";
import axios from "axios";

const clientesData = ref({});
const getResults = async (page = 1) => {
    const response = await axios.get(`/clientes?page=${page}`);
    clientesData.value = response.data;
};
getResults();
</script>
<template>
  <div>
    <nav class="flex justify-between mb-4 items-center">
      <h1 class="mb-0">Clientes</h1>
      <div class="flex items-center">
          Novo Cliente
      </div>
    </nav>

    <div v-if="true">
      <table class="table-fixed w-full">
        <thead>
          <tr>
            <th class="w-[50%]">Cliente</th>
            <th class="w-[10%]">CPF</th>
            <th class="w-[10%]">Data Nasc.</th>
            <th class="w-[5%]">Edit</th>
            <th class="w-[5%]">Trash</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cliente in clientesData.data" :key="cliente.id">
            <td>{{ cliente.nome }}</td>
            <td>{{ cliente.cpf }}</td>
            <td>{{ cliente.data_nasc }}</td>
            <td>Editar</td>
            <td>Deletar</td>
          </tr>
        </tbody>
      </table>
      <TailwindPagination 
        :data="clientesData"
        @pagination-change-page="getResults"
      />
      <div class="mt-5 flex justify-center"></div>
    </div>
  </div>
</template>