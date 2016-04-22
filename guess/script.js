var answer;
var gameplay = 10;
$(document).ready(function(){
    $('#big_game').click(function(){
        gameplay=100;
    });
    $('#medium_game').click(function(){
        gameplay=50;
    });
    $('#basic_game').click(function(){
        gameplay=10;
    });
    $('#start_button').click(function(){
        startgame();
    });
    $('#guess_button').click(function(){
        compareNumbers(); //on button click runs the compareNumbers function
        $('#guess_input').val('');
    });
    $('#guess_input').keyup(function(){
        if (event.keyCode == 13){
            compareNumbers(); //on enter click it also runs the compareNumbers function
            $('#guess_input').val('');
        }
    });
    $('#reset').click(function(){
        reset();
    })
});
function startgame(){ //trying to get start button to create a game properly
    answer = Math.floor(Math.random() * gameplay +1); //picks a random number from 1-10 or 1-50
    console.log(answer);
    $('.gameplay_div').hide();
    $('.guess_div').show();
}
function compareNumbers(){
    var guess = $('#guess_input').val(); //sets guess to the value inside the input
    guess = Number(guess); //changes the value from a string to a number
    if(isNaN(guess) ||guess > gameplay || guess < 1 ){ //checks if the number is not a number and if its in range
        guessResponse('please guess from 1-' + gameplay); //display for out of range inputs
    }else{
        if (answer < guess){
            guessResponse('too high'); //display for a high guess
            updateGuessCounter($('.guess_counter').text());
            updateNumbersGuessed(guess);
        }else if(answer == guess){
            guessResponse('you got it!'); //display for a correct guess
            updateGuessCounter($('.guess_counter').text());
            updateNumbersGuessed(guess);
            setTimeout(function(){
                guessResponse('Play again?');
                $('#reset').show();
            },2000);
        }else{
            guessResponse('too low'); //display for a low guess
            updateGuessCounter($('.guess_counter').text());
            updateNumbersGuessed(guess);
        }
    }
}
//guessResponse function to notify the player about their guess
function guessResponse(text){
    var response = $('#response_div');
    var responseText = $('<h1>',{
        text:text
    });
    response.empty(); //empties the div for a clean display
    response.prepend(responseText); //appends the text parameter on an h1 to the response div
}
function reset(){ //resets variables and returns to the gameplay selection screen
    answer=null;
    $('.gameplay_div').show();
    $('.guess_div').hide();
    $('#response_div').empty();
    $('#reset').hide();
    $('.guess_counter').text('0');
    $('.numbers_guessed').text('');

}
function updateGuessCounter(number){
    var numberOfGuesses = Number(number);
    numberOfGuesses++;
    $('.guess_counter').text(numberOfGuesses);
}
function updateNumbersGuessed(number){
    var numsGuessed = $('.numbers_guessed').text();
    var new_guess = numsGuessed + ' ' + number;
    $('.numbers_guessed').text(new_guess);
}