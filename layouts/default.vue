<script lang="ts" setup></script>

<template>
  <div>
    <ul>
      <li>
        <NuxtLink to="/cliente/cadastro" class="text-xl text-blue-600">Cadastro Cliente</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/cliente/consulta" class="text-xl text-blue-600">Consulta Cliente</NuxtLink>
      </li>
    </ul>
    <slot />
  </div>
</template>

<style scoped></style>
