function guessMyAge(correctAge) { 
    let age = Number( prompt("How old are you") );
    if ( age === correctAge ) {
        console.log("Good Guess");
    } else {
        console.log("Incorrect");
    }
}

function guessMyName() { 
    let name = prompt("Guess My Name")
    if ( name === "john" ) {
        console.log("Good Guess");
    } else {
        console.log("Incorrect");
    }
}

let rightAnswers = 0;

function checkYesNo(question, response, correctAnswer){

    let userAnswer = prompt(question);

    let normalilzedAnswer = userAnswer.toLowerCase();
  
    // If y and yes then ...
    // Otherwise if n and no ...
    // Otherwise ...

    // DRY it out
    // If yes and y OR no and n
  
    if ( 
        (normalilzedAnswer.startsWith('y') && correctAnswer === 'yes') || 
        (normalilzedAnswer.startsWith('n') && correctAnswer === 'no')
    ) {
      rightAnswers++;
      alert(response);
      return true;
    } 
    
    else {
      alert('Sorry, that was incorrect');
      return false;
    }
  }

  checkYesNo("Is John Bald", "He sure is", "yes");
  checkYesNo("Is Geno Cute?", "I think so too", "yes");


function startApp(age) { 
  guessMyAge(age);
  guessMyName();
}

startApp(55);

// Case Types

// lowercase  <--- Single word variables or iterators
// ProperCase <--- convention for Class Names/Constructors
// camelCase  <--- convention for most languages
// kebab-case <--- convention for filenames
// snake_case <--- sometimes for files
