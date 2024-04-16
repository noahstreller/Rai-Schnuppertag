console.log('Start');

/*   Aufgabe 1:  While-Schleife
 *   -----------------------------------
 *   While-Schleife erstellen, welche Werte von 1-10 und ausgeben
 */
function whileDo() {
    var i = 0;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}
whileDo();
/*   Aufgabe 2: Do...While-Schleife
 *   -----------------------------------
 *   Do-While Schleife erstellen, welche Werte von 1-10 und ausgeben
 */
function doWhile() {
    var i = 0
    do {
        console.log(i);
        i++;
    } while (i <= 10)
}
doWhile();

/*
 *   Aufgabe 3: For-Schliefe
 *   -----------------------------------
 *   Erstelle eine For-Schleife, welche das Folgende ausgibt
 *
 *   3
 *   9
 *   27
 *   81
 *   243
 *   729
 */
function exponential() {
    for (var i = 3; i <= 729; i *= 3) {
        console.log(i);
    }
}

/*   Aufgabe 4: Durchschnittsberechnung
 *   -----------------------------------
 *   Man erhält ein Array aus Zahlen und soll den Durchschnitt berechnen
 *
 *
 *   Vorgehen:
 *       1. For-Schleife erstellen
 *       2. Zahl zum Durchschnitt hinzufügen und Schleifenvariable um 1 erhöhen
 *       3. Durchschnitt berechnen
 */
var zahlen = [1, 2, 3, 3, 3, 4, 5, 9, 24];

function durchschnittsBerechnung(zahlen) {
    var i = 0;
    var durchschnitt = 0;

    while (i < zahlen.length) {
        durchschnitt += zahlen[i];
        i++;
    }
    durchschnitt = durchschnitt / i;
    return durchschnitt;
}

/*   Aufgabe 5: Summe aller positiven Zahlen
 *   -----------------------------------
 *   Du erhältst ein Zahlen Array und gibst die Summe aller positiven Zahlen zurück
 *
 *   Bsp: [1,-4,7,12] => 1 + 7 + 12 = 20
 *
 *   Vorgehen:
 *       1. For-Schleife erstellen
 *       2. Ist die Zahl grösser als 0?
 *           2.1 Zahl zum Resultat hinzufügen
 */
var zahlen = [0, -5, 4, 8, -3, 48];

function zahlenPositiv(zahlen) {
    var res = 0;
    for (var i = 0; i < zahlen.length; i++) {
        if (zahlen[i] > 0) {
            res += zahlen[i];
        }
    }
    return res;
}
