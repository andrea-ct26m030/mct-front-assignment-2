<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Note } from '../types/notes';

const createEmptyNote = () => {
    return {
        id: Date.now(),
        title: "",
        content: "",
        tags: []
    }
}

const newNote = ref<Note>(createEmptyNote())

const isEmpty = computed(() => newNote.value.content.trim() === "" || newNote.value.title.trim() === "")

const emit = defineEmits<{
    (e: "addNote", note: Note): void;
}>()

const addNote = () => {
    if (isEmpty.value) return;

    emit("addNote", { ...newNote.value });

    newNote.value = createEmptyNote();
}

</script>

<template>
    <div class="flex flex-col gap-2 h-10">
        <input class="flex-1 bg-white rounded-xl px-3 py-2 w-full" type="text" v-model="newNote.title"
            placeholder="Title">
        <textarea class="flex-1 bg-white rounded-xl px-3 py-2 w-full min-h-20" type="text" v-model="newNote.content"
            placeholder="Content"></textarea>
        <button @click="addNote" :disabled="isEmpty"
            class="rounded-xl bg-neutral-800 text-white cursor-pointer px-3 py-2 disabled:bg-neutral-200">Add Note</button>
    </div>
</template>