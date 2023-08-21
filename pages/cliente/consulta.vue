<script lang="ts" setup>
async function save() {
  const apiBase = 'http://localhost:8000';
  
  // await useFetch(`${apiBase}/sanctum/csrf-cookie`);
  // const token = useCookie('XSRF-TOKEN');
  await useFetch(`${apiBase}/api/cliente`, {
    method: "GET",
  });
}
</script>

<template>
  <div>
    Page: Consulta
    <button class="bg-blue-400" @click="save()">Save</button>
  </div>
</template>

<style scoped></style>
