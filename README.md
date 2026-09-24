## 1. Setup

```bash
npm install
```

```bash
npm run dev
```

## 2. Kurze Begründung eurer Struktur

*zwei, drei Sätze: warum liegt die Logik im Composable und nicht in der Komponente.*

Die Notes logic liegt im Composable, da die Funktionen und Zustände auch in anderen Komponenten wiederverwendet werden können und die Komponente selbst übersichtlicher bleibt. Das Composable ist stateful, es kann also Zustände speichern, auch wenn sich Daten verändern. Die Form-Logik ist da jedoch nicht inkludiert, denn sie kümmert sich intern um ihre Zustände und sendet dann nur das Emit an den Parent.

## 3. Drei Reflexionsfragen, zum Code-Verständnis kurz beantwortet

### Warum darf NoteCard die Notiz-Prop nicht selbst verändern, und wie löst ihr das stattdessen?

Note-Card besitzt die Notes-Daten nicht, sondern bekommt sie über Props vom Parent. Nur die Root Komponente, welche die Daten besitzt, darf diese Daten auch verändern. Note-Card darf lediglich ein Signal an den Parent senden, "bitte verändern", sodass der Parent dann entspechen die Methode dazu aufrufen kann.

### Was passiert, wenn zwei Komponenten dasselbe useNotes() aufrufen — teilen sie sich die Notizen oder nicht? Begründet kurz.

Wenn das geschieht, dann entstehen zwei Instanzen von dem Composable, also zwei Kopien voneinander, die unabhängig voneinander sind. Es handelt sich um keinen State-Manager, wo man von überall auf denselben Zustand zugreifen kann, sondern lediglich um eine Methode, welche andere Zustände/Methoden zurückgibt.

### Wozu dient das Note -Interface, wenn der Code auch ohne liefe?

Um eine zusätzliche Sicherheitsebene einzuführen, die verhindert, dass falsche Typen an Methoden übergeben werden, die dann zu Fehlern in der Darstellung/im Code führen worden. Es ist auch leichter, dann mit linting auf variablen leichter zuzugreifen, weil die IDE dann schon weiß, welche variablen das interface besitzen muss.
