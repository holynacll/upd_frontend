<script lang="ts" setup>

const apiBase = 'http://localhost:8000';

await useFetch(`${apiBase}/sanctum/csrf-cookie`, {
  credentials: "include"
});
const token = useCookie('XSRF-TOKEN');

const form = ref({
  nome: 'teste',
  cpf: '2131231241',
  data_nasc: '',
  sexo: '',
  endereco: ''
});

const { estadosList } = await useFetch(`${apiBase}/api/estados`, {
  credentials: "include",
  method: "get",
});


async function save() {
  await useFetch(`${apiBase}/api/cliente`, {
    credentials: "include",
    method: "POST",
    body: form.value,
    headers: {
      'X-XSRF-TOKEN': token.value as string
    }
  });
}
</script>

<template>
<div class="w-full overflow-x-hidden border-t flex flex-col">
  <main class="w-full flex-grow p-6">
    <h1 class="text-xl text-indigo-600 pb-6">Cadastro Cliente</h1>
    <div class="flex justify-center flex-wrap mt-3">
      <div class="w-full lg:w-4/6 bg-white p-5 rounded-md shadow-md">
        <form @submit.prevent="save">
          <div class="group-1">
            <div class="inline-block">
              <label for="cpf" class="text-normal font-bold text-gray-700">CPF: </label>
              <input type="text" class="ml-2 mr-4 p-2 border-2 rounded-xl border-gray-600 sm:text-sm" v-model="form.cpf">
            </div>
            <div class="inline-block">
              <label for="nome" class="text-normal font-bold text-gray-700">Nome: </label>
              <input type="text" class="ml-2 mr-4 p-2 border-2 rounded-xl border-gray-600 sm:text-sm" v-model="form.nome">
            </div>
            <div class="inline-block">
              <label for="data_nascimento" class="text-normal font-bold text-gray-700">Data Nascimento: </label>
              <input type="date" class="ml-2 mr-4 p-2 border-2 rounded-xl border-gray-600 sm:text-sm" v-model="form.data_nasc">
            </div>
            <div class="inline-block">
              <label for="sexo" class="ml-2 mr-2 text-normal font-bold text-gray-700">Sexo:</label>
              <div class="inline-block">
                <input id="sexo_masculino" type="radio" value="" name="inline-radio-group" class="ml-2 p-2 border-2 rounded-xl border-gray-600 sm:text-sm" v-model="form.sexo">
                <label for="sexo_masculino" class="ml-2 mr-2 text-normal font-bold text-gray-700">Masculino</label>
              </div>
              <div class="inline-block">
                <input id="sexo_feminino" type="radio" name="inline-radio-group" class="ml-2 p-2 border-2 rounded-xl border-gray-600 sm:text-sm" v-model="form.sexo">
                <label for="sexo_feminino" class="ml-2 mr-2 text-normal font-bold text-gray-700">Feminino</label>
              </div>
            </div>
          </div>
          <div class="group-2 mt-4">
            <div class="inline-block w-3/6">
              <label for="cpf" class="text-normal font-bold text-gray-700">Endereço: </label>
              <input type="text" class="w-9/12 ml-2 mr-4 p-2 border-2 rounded-xl border-gray-600 sm:text-sm" v-model="form.endereco">
            </div>
            <div class="inline-block w-1/6">
              <label for="cpf" class="text-normal font-bold text-gray-700">Estado: </label>
              <select v-model="estados" class="ml-2 mr-4 py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="">Selecione</option>
                    <option v-for="option in estadosList" :key="option.value" :value="option.value">
                      {{ option.nome }}
                    </option>
              </select>            
            </div>
            <div class="inline-block w-2/6">
              <label for="cpf" class="text-normal font-bold text-gray-700">Cidade: </label>
              <select class="ml-2 mr-4 py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="">Selecione</option>
                    <option value="">XUXUXUXUXUXXUXUXUXU</option>
              </select>      
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</div>
</template>

<style scoped></style>
