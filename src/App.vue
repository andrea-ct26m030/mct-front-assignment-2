<script setup lang="ts">
import NoteCard from './components/NoteCard.vue';
import NoteForm from './components/NoteForm.vue';
import { useNotes } from './composables/useNotes.ts';

const { notes, addNote, deleteNote, filteredNotes } = useNotes();

</script>

<template>
  <main class="bg-neutral-300 w-screen min-h-screen">
    <NoteForm @add-note="addNote" />
    <NoteCard v-for="note in notes" />
  </main>
</template>
