import SecretWord from "./secret-word.js"
import Question from "./question.js"
import FoundWord from "./found-word.js"
import Gallows from "./gallows.js"
import { readFileSync } from 'node:fs'
import { writeFileSync } from 'node:fs';


const updateSecretWord = (newSecretWord) => {
  const fileName = "secretWord.txt";

  // Skriv det nya hemliga ordet till filen
  writeFileSync(fileName, newSecretWord, 'utf8');
  console.log("Secret word updated successfully in " + fileName);
};

// Använd funktionen för att uppdatera det hemliga ordet
const newSecretWord = "hangman"; // Ersätt med det nya hemliga ordet
updateSecretWord(newSecretWord);

// const secretWord = getSecretWord();
// if (secretWord) {
//   console.log("The secret word is: " + secretWord);
//   // Använd det hämtade hemliga ordet i spelet där det är relevant.
// } else {
//   console.log("Failed to retrieve the secret word.");
// }

const fileName = "./secretWord.txt"

try {
  const secretWord = readFileSync(fileName, 'utf8');
  // Använd det hämtade hemliga ordet i spelet
  console.log("The secret word is: " + secretWord.trim()); // trim() tar bort eventuell överflödig whitespace, inklusive radbrytning
} catch (err) {
  console.error("Error reading the secret word: " + err.message);
}




const print = console.log

export default class Game{
  

  secretWord
  foundWord
  gallows


  constructor(secretWord) {
    this.secretWord = secretWord
    print("Welcome to a simple game of hangman. You are doomed!")
    this.runRound()
    }

    checkCredentials(word){
      return this.secreWord === word
      
  }

  runRound(){
    // create a new gallows
    this.gallows = new Gallows()
    // 10. ask for secret word  bass
   
    let question = new Question("Type the secret word, don't show your opponent: ")
    this.secretWord = new SecretWord(question.answer)
    print("The secret word has " + this.secretWord.length + " letters")
    // process secret word into chars                  b a s s
    // store found word as empty positions for chars   _ _ _ _
    this.foundWord = new FoundWord(this.secretWord)
    print(this.foundWord.asString)
    // 20. ask for letter ? 
    this.guessWord()
    // loose round
    // win round
    // goto 10
    // this.runRound()
  }

  guessWord(){
    let letter = new Question("Guess a letter: ").answer      
    print("You guessed " + letter)        
    // find if the letter is in the secret word
    if(this.secretWord.isLetterInSecretWord(letter)){
      //  (b)  found            store  x in used chars,  b _ _ _
      //  (s)  found            store  s in used chars,  b _ s s 
      let positions = this.secretWord.getLetterPositions(letter)
      this.foundWord.applyFoundLetter(letter, positions)
      print("You found \n" + this.foundWord.asString)      
      // check if word i complete (no empty slots)? exit to win round
      this.checkWin()
    }else{
      //  (x)  not found        store  x in used chars, add part to gallows
      print(this.gallows.step())      
      // check if gallows is done? exit to loose round
      this.checkLoose()      
    }          
  }

  checkWin(){
    if(!this.foundWord.letters.includes('*')){
      print("Congratulations, you barely survived this time \n" + this.foundWord.asString)
    }else{
      // goto 20
      this.guessWord()
    }
  }

  checkLoose(){
    if(this.gallows.stages.length == 0){
      print("Wonderful, you got to hang! \n" + "The word was " + this.secretWord.asString)
    }else{
      // goto 20
      this.guessWord()
    }
  }

}


