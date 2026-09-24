import { computed, type Ref } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'
import type { Note } from '../types/notes.js'

export function useNotes(searchTerm: Ref<string>) {
  const notes = useLocalStorage('quicknotes', []);

  function addNote(note: Note) {
    notes.value.push(note);
  }

  function deleteNote(id: number) {
    notes.value = notes.value.filter(note => note.id !== id);
  }

  const filteredNotes = computed<Note[]>(() => {
    const term = searchTerm.value.trim().toLowerCase()

    if (!term) {
      return notes.value;
    }

    return notes.value.filter(note =>
      note.title.toLowerCase().includes(term) ||
      note.content.toLowerCase().includes(term) ||
      note.tags.some((tag) => tag.toLowerCase().includes(term))
    )
  })

  return { notes, addNote, deleteNote, filteredNotes }
}
