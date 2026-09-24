<script setup lang="ts">
const model = defineModel<string>()
</script>

<template>
  <input v-model="model" class="border border-neutral-300 rounded-xl px-3 py-2 w-full" placeholder="Search notes..." />
</template>