console.log('Start');

/*
 *   Aufgabe 1: Ausgabe
 *   -----------------------------------
 *   1. Gib deinen Namen, Alter und Geburtsdatum aus
 *   2. Gib eine Info aus
 *   3. Gib eine Warunung aus
 *   4. Gib einen Fehler aus
 */
console.log('Name: Max Muster' + ' Alter: ' + 18 + ' Geburtstag: ' + new Date('2002-09-27'));
console.info('Das ist eine Information');
console.warn('Das ist eine Warnung!');
console.error('Das hier ist ein Fehler!');
console.debug('Das hier ist ein Debug!');

/*   Aufgabe 2: Variabeln 1.0
 *   -----------------------------------
 *   Deklariere Variabeln für deinen Vornamen, Nachnamen, Geburtstag und Alter und gib diese aus
 */
var alter = 18;
var vorname = 'Max'
var nachname = 'Muster';
var geburtstag = new Date('2002-09-27');

/*   Aufgabe 3: Variabeln 2.0
 *   -----------------------------------
 *   Deklariere einen Array mit den Namen deiner Familienmitglieder
 *   Deklariere einen Boolean, ob du männlich bist oder nicht
 */
var familienMitglieder = ['Sophie', 'Dagobert', 'Lucas'];
var isMale = true;

/*   Aufgabe 4: Functions 1.0
 *   -----------------------------------
 *   Erstelle eine Funktion, die 2 + 3 zusammenrechnet und ausgibt (nicht als Parameter übergeben)
 */

function basic() {
    console.log(2 + 3)
}

/*   Aufgabe 6: Rechner 1.0
 *   -----------------------------------
 *   Erstelle vier Funktionen (Addition, Subtraktion, Division, Multiplikation)
 *   Gebe zwei Zahlen mit und verrechne diese entsprechend der Operation
 */

function addieren(zahl1, zahl2) {
    return zahl1 + zahl2;
}

function subtraktion(zahl1, zahl2) {
    return zahl1 - zahl2;
}

function dividieren(zahl1, zahl2) {
    return zahl1 / zahl2;
}

function multiplizieren(zahl1, zahl2) {
    return zahl1 * zahl2;
}


/*   Aufgabe 4: Functions 2.0
 *   -----------------------------------
 *   Erstelle eine Funktion, die den Rest der Division ausgibt.
 */

function modulo1(zahl1, zahl2) {
    console.log(zahl1 % zahl2);
}

/*   Aufgabe 5: Functions 3.0
 *   -----------------------------------
 *   Erstelle eine Funktion, die den Rest einer Division zurück gibt
 */
function modulo2(zahl1, zahl2) {
    return zahl1 & zahl2;
}