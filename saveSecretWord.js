import { appendFileSync } from 'node:fs';

let secretWord = "mitt-hemliga-ord"; // Ersätt detta med det faktiska hemliga ordet
const fileName = "./secretWord.txt";

// Lägg till det hemliga ordet i filen med en radbrytning
appendFileSync(fileName, secretWord + '\n', 'utf8');
console.log("Secret word saved successfully in " + fileName)