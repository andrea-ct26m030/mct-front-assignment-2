- Prompt: "what does watch() method in vue do?"
Geändert/verstanden: Verstanden warum useLocalStorage vom KleinenGerüst.zip so wenig Methoden braucht.

- Prompt: const createEmptyNote = () => {
    return {
        id: Date.now(),
        title: "",
        content: "",
        tags: []
    }
}
whenever i do that do i get a new date
Geändert/verstanden: Ich wollte sichergehen dass diese funktion nicht immer dieselbe Nummer ausgibt und wurde bestätigt, dass jeder Aufruf die Date() funtion neu aufruft.

- Prompt: Why does the filteredNotes not update when i type in searchBar?
Übernommen: das v-model schema in SearchBar, sodass der datenfluss in beide richtungen funktioniert.
Geändert/verstanden: Davor sind daten nur parten => child geflossen, mit v-model funktioniert es in beide richtungen.

- Prompt: Why does my filteredNotes algorythm not work? It doesn't filter anything out.
Übernommen: Hinweis, statt .filter() methode .some() auf Tags zu benutzen.
Geändert/verstanden: Filter gibt immer einen Array aus, was in dem fall zu immer truthy geführt hat.

- Prompt: Should I put my form methods into useNotes.ts or what is best practice?
Übernommen: Left it as is
Geändert/verstanden: Form logic ist cleaner wenn sie abgekapselt in der Komponente bleibt und nur denn add emit sendet. 

- Prompt: Can you format my Readme more cleanly?
Übernommen: Besser formatiertes markdown, nichts am text geändert