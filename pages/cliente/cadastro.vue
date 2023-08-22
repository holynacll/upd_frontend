<script lang="ts" setup>
import axios from "axios";
import { handleInvalidForm } from "@/utils";

const form = ref({
  nome: '',
  cpf: '',
  dataNasc: '',
  sexo: '',
  endereco: '',
  ufId: '',
  ufList: [],
  munId: '',
  munList: []
});

const errors = ref({
  nome: [],
  cpf: [],
  data_nasc: [],
  sexo: [],
  endereco: []
});

async function handleSave() {
  try {
    await axios.post("/clientes", form.value);
    useRouter().push("/");
  } catch (err) {
    handleInvalidForm(err, errors);
  }
}

async function updateCidadesList() {
  const response = await axios.get(`/cidades/${form.value.ufId}`);
  form.value.munList = response.data;
  form.value.munId = '';
}
const response = await axios.get("/estados");
form.value.ufList = response.data;
</script>

<template>
<div class="w-full overflow-x-hidden border-t flex flex-col">
  <main class="w-full flex-grow p-6">
    <div class="flex justify-center flex-wrap mt-3">
      <div class="w-full lg:w-4/6 bg-white p-5 rounded-md shadow-md">
        <h1 class="text-xl text-indigo-600 pb-6">Cadastro Cliente</h1>
        <form @submit.prevent="handleSave">
          <div class="group-1">
            <div class="inline-block w-2/12">
              <label for="cpf" class="text-normal font-bold text-gray-700">CPF: </label>
              <input type="text" class="ml-2 mr-4 p-2 border-2 rounded-xl border-gray-600 " v-model="form.cpf" >
              <p class="text-red-600 p-1" v-for="error in errors.cpf">{{ error }}</p>
            </div>
            <div class="inline-block w-3/12">
              <label for="nome" class="text-normal font-bold text-gray-700">Nome: </label>
              <input type="text" class="w-11/12 ml-2 mr-4 p-2 border-2 rounded-xl border-gray-600 " v-model="form.nome" >
              <p class="text-red-600 p-1 text-sm" v-for="error in errors.nome">{{ error }}</p>
            </div>
            <div class="inline-block w-2/12">
              <label for="data_nascimento" class="text-normal font-bold text-gray-700">Data Nascimento: </label>
              <input type="date" class="ml-2 p-2 border-2 rounded-xl border-gray-600 " v-model="form.dataNasc" >
              <p class="text-red-600 p-1" v-for="error in errors.data_nasc">{{ error }}</p>
            </div>
            <div class="inline-block w-4/12">
              <label for="sexo" class="ml-2  text-normal font-bold text-gray-700">Sexo:</label>
              <div class="inline-block">
                <input id="sexo_masculino" type="radio" name="inline-radio-group" class="ml-2 p-2 border-2 rounded-xl border-gray-600" value="0" v-model="form.sexo">
                <label for="sexo_masculino" class="ml-2 mr-2 text-normal font-bold text-gray-700">Masculino</label>
              </div>
              <div class="inline-block">
                <input id="sexo_feminino" type="radio" name="inline-radio-group" class="ml-2 p-2 border-2 rounded-xl border-gray-600" value="1" v-model="form.sexo">
                <label for="sexo_feminino" class="ml-2 mr-2 text-normal font-bold text-gray-700">Feminino</label>
              </div>
            </div>
            <p class="text-red-600 p-1" v-for="error in errors.sexo">{{ error }}</p>
          </div>
          <div class="group-2 mt-4">
            <div class="inline-block w-3/6">
              <label for="cpf" class="text-normal font-bold text-gray-700">Endereço: </label>
              <input type="text" class="w-9/12  p-2 border-2 rounded-xl border-gray-600 " v-model="form.endereco">
              <p class="text-red-600 p-1" v-for="error in errors.endereco">{{ error }}</p>
            </div>
            <div class="inline-block w-1.5/6">
              <label for="cpf" class="text-normal font-bold text-gray-700">Estado: </label>
              <select @change="updateCidadesList" class="py-3 px-3 border border-gray-300 bg-white rounded-md shadow-md " v-model="form.ufId">
                    <option value="">Selecione</option>
                    <option v-for="option in form.ufList" :key="option.id" :value="option.id">
                      {{ option.nome }}
                    </option>
              </select>            
            </div>
            <div class="inline-block w-1.5/6">
              <label for="cpf" class="text-normal font-bold text-gray-700">Cidade: </label>
              <select class=" py-3 px-3 border border-gray-300 bg-white rounded-md shadow-md " v-model="form.munId">
                    <option value="">Selecione</option>
                    <option v-for="option in form.munList" :key="option.id" :value="option.id">
                      {{ option.nome }}
                    </option>
              </select>      
            </div>
          </div>
          <div class="flex justify-end mt-6">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Salvar</button>
            <button class="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-2 rounded">Limpar</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</div>
</template>

<style scoped></style>
