import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'
import type { Note } from '../types/notes.js'

export function useNotes() {
  const notes = useLocalStorage('quicknotes', []);

  function addNote(note: Note) {
    notes.value.push(note);
  }

  function deleteNote(id: number) {
    notes.value = notes.value.filter(note => note.id !== id);
  }

  function filteredNotes(term: string) {
    
    

    return computed(() => notes.value)
  }

  return { notes, addNote, deleteNote, filteredNotes }
}
