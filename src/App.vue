<script setup lang="ts">
import { ref } from 'vue';
import NoteCard from './components/NoteCard.vue';
import NoteForm from './components/NoteForm.vue';
import SearchBar from './components/SearchBar.vue';
import { useNotes } from './composables/useNotes.ts';

const searchTerm = ref("");
const { addNote, deleteNote, filteredNotes } = useNotes(searchTerm);
</script>

<template>
  <main class="flex flex-col gap-10 max-w-125 w-[85vw] my-10">
    <NoteForm @add-note="addNote" />
    <section class="flex flex-col gap-3">
      <h1 class="text-lg">Note Overview</h1>
      <SearchBar v-model="searchTerm" />
      <div class="flex flex-col gap-3 ">
        <NoteCard v-for="note in filteredNotes" :key="note.id" :note="note" @remove="deleteNote" />
      </div>
    </section>
  </main>
</template>
