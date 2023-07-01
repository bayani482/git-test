const COLORS_ARRAY = ['blue', 'gold', 'cyan', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'].sort();
let guess = '';
let target = '';
let correct = false;
let guessCount = 0;
let guessString = '';

function runGame() {
    const randomNumber = Math.random() * COLORS_ARRAY.length;
    const randomInteger = Math.floor(randomNumber);
    let target = COLORS_ARRAY[randomInteger];

    do {
        console.log(target);
        
        guessString = prompt("Hello! I am thinking of one os these colors:\n\n"+COLORS_ARRAY.join(', ')+"\n\nWhat color am I thinking of?\n",)
        if (guessString === null) {
            alert('Game has been aborted');
            return;
        }
        guessString = guessString.toLowerCase()
        guessCount+=1;
        correct = checkGuess(guessString,target)
    }while(!correct);

    

    
}

function checkGuess(guess, target){
    correct = false;
    if(COLORS_ARRAY.includes(guess) === false){
        alert('Sorry, I dont recognize your color.\n\n\nPlease try again');
    }else if( target > guess){
        alert('Sorry, your guess is incorrect.\n\nHint:your color is alphabetically higher than mine\n\nPlease try again');
    }else if( target < guess){
        alert('Sorry, your guess is incorrect.\n\n Hint:your color is alphabetically lower than mine\n\nPlease try again'); 
    }
    else{
        correct = true;
        alert('Congratulations! You have guess the color!\n\nAttempts: ' + guessCount + '\n\nHIT! OK to see the color in the backgound\n\n')
        document.body.style.background = guessString;
    }
    return correct;
}
