// import { readFileSync } from 'node:fs'
// import { writeFileSync } from 'node:fs';
// import PromptSync from 'prompt-sync'
// import Game from "./game.js"


// const prompt = PromptSync({ sigint: true })
// const secretWord = "mitt-hemliga-ord"; 
// const fileName = "secretWord.txt";


// let dbsecretWords = readFileSync("data/secretWords.csv", "utf8")

// dbsecretWords = dbsecretWords.trim().split("\r\n")

// let secretWords= []

// for (let dbSecretWord of dbsecretWords) {
//     dbSecretWord = dbSecretWord.split(",")
//     secretWords.push(new Game(dbSecretWord[0], dbSecretWord[1]))
// }

// let word

// const secretword = prompt("Type the secret word, don't show your opponent: ")
// writeFileSync(fileName, secretWord, 'utf8');
// console.log("Secret word saved successfully.");

// for (let savedWord of secretWords) {
//     if (savedWord.checkCredentials(secretword)){
//         word = savedWord
//     }
// }

// if (word){
//     console.log("Welcome, " + word.secretWord)
// }else {
//     console.log("couldn't find a user with the given username")
// }



