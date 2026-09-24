<script setup lang="ts">
import type { Note } from '../types/notes.ts';
import BaseCard from './BaseCard.vue';
import TagItem from './TagItem.vue';

interface Props {
    note: Note
}

const props = defineProps<Props>();

const emit = defineEmits<{
    (e: "remove", id: number): void;
}>()

</script>

<template>
    <BaseCard>
        <template #header>
            <div class="flex justify-between align-baseline">
                <h1>{{ note.title }}</h1>
                <button @click="emit('remove', note.id)" class="cursor-pointer font-light">x</button>
            </div>
            <div v-if="note.tags.length > 0" class="flex gap-1">
                <TagItem v-for="tag in note.tags">
                    {{ tag }}
                </TagItem>


            </div>
        </template>

        <p>
            {{ note.content }}
        </p>

    </BaseCard>
</template>