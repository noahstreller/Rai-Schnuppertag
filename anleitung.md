# Anleitung

## Variables

Ist ein "Packet", in das man etwas reinpacken kann. Man kann das Packet mithilfe eines Namens identifizieren.
Zuerst kommt ein Keyword, dann der Name und nach dem Gleich der Inhalt.

```js
var einSatz = "Ein Wort/Satz/Buchstaben hat Anführungs und Schluss zeichen, eine Zahl nicht; das ist ein sogenannter String";
let eineZahl = 15;
```

### var oder let?

In JavaScript kann man Variablen auch mit `let` definieren. Der Unterschied liegt in der Kapselung. Wenn man `var` innerhalb einer Funktion benutzt, kann man überall in dieser Funktion darauf zugreifen; auch wenn sie in Schleifen definiert wird. Bei `let` ist dies etwas strenger, und die Variable kann nur innerhalb des Blocks verwendet werden, wo sie gesetzt wird.

Ein wichtiges Prinzip in der Programmierung, ist, dass die Variablen nur dort verfügbar sind, wo sie tatsächlich gebraucht werden. Dies verhindert Konflikte in Situationen, wo beispielsweise zwei Iteratoren mit `i` definiert werden, und schont den RAM vor unnötigem Inhalt.

## Functions

In einer Function kann man regelmässige Aufgaben zusammentragen.
Ein Parameter ist eine Variable die dort definiert wird, um etwas der Function mitzuteilen, damit z.B. die Zahlen sich ändern können.

```js
function funcName(parameter1, parameter2, ...){
    // do something
    
    console.log() // gibt etwas aus
    return // gibt was zurück, damit mit diesem Wert weitergerechnet werden kann
}
```

## If

Mit `if` kann man ermitteln, ob eine Bedingung erfüllt ist. Wenn mehrere Bedingungen erfüllt sein müssen, kann man das mit mit `&&` zwischen den Bedingungen definieren. Wenn eine andere Bedingung erfüllt sein muss, kann man das mit einem `else if (<bedingung>)` definieren, und der Rest kommt in `else {}`

```js
var zahl = 5
if (zahl >= 10){
    console.log("Zahl ist grösser oder gleich als 10")
} else if(zahl < 10 && zahl >= 5) {
    console.log("Zahl ist zwischen 5 und 9")
} else {
    console.log("Zahl ist kleiner als 5")
}
```

## Switch

Der Switch eignet sich, die Bedingung auf viele fixe Werte zu untersuchen. Mit einem Break "bricht" man aus dem Switch heraus, und sollte die Bedingung keine der definierten Situationen entsprechen, wird jeweils der "default"-case ausgeführt. Switches sollten allerdings vermieden werden, da es gegen viele Prinzipien von Clean Code verstösst.

```js
var name = "Max"
switch(name){
    case "Max":
        console.log("Der Name ist Max")
        break
    case "Noah":
        console.log("Der Name ist Noah")
        break
    case "John":
        console.log("Der Name ist John")
        break
    default:
        console.log("Der Name existiert nicht in der liste")
        break
}
```

## For

Mit der For-Loop iteriert man mehrmals durch eine Schleife. Im Beispiel wird von 0 - 11 gezählt. `i` (der Zähler / Iterator) wird auf 0 gesetzt, mit `i <= 10` setzt man den Wert, bis wohin gezählt werden soll. Mit `i++` wird nach jedem Duchlauf der Zähler um eins erhöht.

```js
for(let i = 0; i <= 10; i++){
    console.log(i);
}
```

## While

Die While-Loop wird soviel mal ausgeführt, solange die Bedingung zutrifft. Hier wird eine Variable `i` (Zähler / Iterator) definiert und auf 0 gesetzt. Danach wird geprüft, ob `i` kleiner als 10 ist. Wenn dies zutrifft, wird die aktuelle Zahl ausgegeben und der Zähler wird um eins erhöht. Falls der Zähler schon vor der Schleife 10 oder grösser ist, wird die gesamte Schleife nicht ignoriert.

```js
var i = 0
while (i < 10) {
  console.log(i);
  i++;
}
```

## Do-While

Die Do-While-Schleife ist sehr ähnlich zur While-Schleife, allerdings wird sie mindestens einmal ausgeführt. Die Bedingung wirkt erst beim zweiten Durchlauf.

```js
do {
  console.log(i)
  i++;
}
while (i < 10)
```
