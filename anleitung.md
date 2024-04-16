# Anleitung 

## Variables

Ist ein "Packet", in das man etwas reinpacken kann. Mittels Name, kann man das Packet identifizieren.
Zuerst kommt ein Keyword, dann der Name und nach dem Gleich der Inhalt. `var name = "inhalt"`

```js
var variableNameString = "Ein Wort/Satz/Buchstaben hat Anführungs und Schluss zeichen, eine Zahl nicht; das ist ein sogenannter String"

var variableNameZahl = 15
```

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

Mit einem If, kann man was überprüfen. Wenn mehrere Bedingungen erfüllt sein müssen, kann man das mit mit `&&` zwischen den Bedingungen definieren. Wenn eine andere Bedingung erfüllt sein muss, kann man das mit einem `else if (<bedingung>)` definieren, und der Rest kommt in `else {}`

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

Der Switch eingent sich etwas auf viele fixe Werte zu untersuchen. Mit einem Break geht man aus dem Switch, und im Default kommt alles rein, das nicht einen passenden Case-Wert hat.

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

Mit der For-Loop itariert man mehrmals durch eine Schleife. Im Beispiel wird von 0 - 11 gezählt. `i` (der Zähler) wird auf 0 gesetz, mit `i <= 10` setzt man den wert, bis wohin gezählt werden soll und mit `i++` wird nach jedem duchlauf der Zähler um eins erhöht.

```js
for(var i = 0; i <= 10; i++){
    console.log(i)
}
```

## While

Die While-Loop wird soviel mal ausgeführt, bis die Bedingung false ist, also solange sie zutrifft. Hier wird eine variable `i` (zähler) definiert und auf 0 gesetzt. Danach wird geprüft, ob i kleiner als 10 ist, wenn ja soll die schleife ausgefürt werden, dann wird die aktuelle Zahl ausgegeben und der Zähler wird um eins erhöht. Falls der Zähler schon vor der Schleife mind. 10 ist, wird diese nicht mehr ausgeführt.

```js
var i = 0
while (i < 10) {
  console.log(i)
  i++
}
```

## Do-While
Die While-Loop wird soviel mal ausgeführt, bis die Bedingung false ist, also solange sie zutrifft. Hier wird eine variable `i` (zähler) definiert und auf 0 gesetzt. Danach wird die Schleife einmal ausgefürt, und danach geprüft ob sie true ist, wenn sie true ist, wird sie nochmals ausgeführt, wenn nicht geht sie weiter. Hier wird auch hochgezählt, bis der Zähler 10 (oder grösser) ist. Der unterschied zur normalen While-Loop ist, dass diese auch wenn der Zähler schon vorher mind. 10 ist, einmal durchgeführt wird, da sie erst nach dem durchlauf überprüft wird.

```js
do {
  consoe.log(i)
  i++;
}
while (i < 10)
```