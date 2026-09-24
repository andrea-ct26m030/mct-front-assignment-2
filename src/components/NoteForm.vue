<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Note } from '../types/notes';
import TagItem from './TagItem.vue';

const createEmptyNote = () => {
    return {
        id: Date.now(),
        title: "",
        content: "",
        tags: []
    }
}

const newNote = ref<Note>(createEmptyNote())
const newTag = ref<string>("");

const isEmptyNote = computed(() => newNote.value.content.trim() === "" || newNote.value.title.trim() === "")
const isEmptyTag = computed(() => newTag.value.trim() === "");

const emit = defineEmits<{
    (e: "addNote", note: Note): void;
}>()

const addNote = () => {
    if (isEmptyNote.value) return;

    emit("addNote", { ...newNote.value });

    newNote.value = createEmptyNote();
}

const addTag = () => {
    if (isEmptyTag.value) return;
    newNote.value.tags.push(newTag.value);
    newTag.value = "";
}

const removeTag = (tagIndex: number) => {
    newNote.value.tags = newNote.value.tags.filter((__, i) => i !== tagIndex);
}

</script>

<template>
    <section class="bg-neutral-300 flex flex-col gap-3 rounded-xl p-5">
        <input class="flex-1 bg-neutral-100 rounded-xl px-3 py-2 w-full" type="text" v-model="newNote.title"
            placeholder="Enter Title …">
        <textarea class="flex-1 bg-neutral-100 rounded-xl px-3 py-2 w-full min-h-20" type="text"
            v-model="newNote.content" placeholder="Enter Content …"></textarea>

        <div class="flex flex-col gap-2 p-3 border border-neutral-400 rounded-xl">
            <div class="flex gap-2">
                <input class="flex-1 bg-neutral-100 rounded-xl px-3 py-2 w-full" type="text" v-model="newTag"
                    placeholder="Enter new Tag …">

                <button @click="addTag" :disabled="isEmptyTag"
                    class="aspect-square rounded-xl bg-neutral-800 text-white cursor-pointer px-3 py-2 disabled:bg-neutral-500 disabled:cursor-not-allowed">+</button>
            </div>

            <div>
                <div v-if="newNote.tags.length > 0" class="flex gap-1">
                    <TagItem v-for="tag, i in newNote.tags">
                        {{ tag }}
                        <button @click="removeTag(i)" class="px-1 cursor-pointer">x</button>
                    </TagItem>
                </div>
                <p v-else class="text-sm">No tags assigned.</p>
            </div>
        </div>

        <button @click="addNote" :disabled="isEmptyNote"
            class="rounded-xl bg-neutral-800 text-white cursor-pointer px-3 py-2 disabled:bg-neutral-500 disabled:cursor-not-allowed">Add
            Note</button>
    </section>
</template>