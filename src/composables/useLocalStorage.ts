import { ref, watch, type Ref } from 'vue'
import type { Note } from '../types/notes'
 
// Liest einen Wert beim Start aus localStorage und schreibt ihn bei jeder Änderung zurück.
export function useLocalStorage(key: string, initialValue: Note[]): Ref<Note[]> {
  const stored = localStorage.getItem(key)
  const value = ref(stored ? JSON.parse(stored) : initialValue)
 
  watch(value, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
  }, { deep: true })
 
  return value
}
