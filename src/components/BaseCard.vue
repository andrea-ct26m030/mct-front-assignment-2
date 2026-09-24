<template>
  <div class="card bg-neutral-300 p-3 rounded-xl">
    <div v-if="$slots.header" class="card-header text-lg font-bold pb-3 mb-3 flex flex-col gap-1 border-b border-neutral-500">
      <slot name="header" />
    </div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>
