
function number_game(){
    var self = this;
    this.gameplay='10';
    this.answer='';
    this.gameplay_div = $('.gameplay_div');
    this.guess_div = $('.guess_div');
    this.guess_counter = $('.guess_counter');
    this.start_game = function(){
        self.answer = Math.floor(Math.random() * self.gameplay +1); //picks a random number from 1-10 or 1-50
        console.log(self.answer);
        self.gameplay_div.hide();
        self.guess_div.show();
    };
    this.reset = function(){
        self.answer=null;
        // self.gameplay=10;
        self.gameplay_div.show();
        self.guess_div.hide();
        $('#response_div').empty();
        $('#reset').hide();
        self.guess_counter.text('0');
        $('.numbers_guessed').text('');
    };
    this.compare_numbers = function(){
        var guess = $('#guess_input').val(); //sets guess to the value inside the input
        guess = Number(guess); //changes the value from a string to a number
        if(isNaN(guess) ||guess > self.gameplay || guess < 1 ){ //checks if the number is not a number and if its in range
            self.guess_response('please guess from 1-' + self.gameplay); //display for out of range inputs
        }else{
            if (self.answer < guess){
                self.guess_response('too high'); //display for a high guess
                self.update_guess_counter(self.guess_counter.text());
                self.update_numbers_guessed(guess);
            }else if(self.answer == guess){
                self.guess_response('you got it!'); //display for a correct guess
                self.update_guess_counter(self.guess_counter.text());
                self.update_numbers_guessed(guess);
                setTimeout(function(){
                    self.guess_response('Play again?');
                    $('#reset').show();
                },2000);
            }else{
                self.guess_response('too low'); //display for a low guess
                self.update_guess_counter(self.guess_counter.text());
                self.update_numbers_guessed(guess);
            }
        }
    };
    this.guess_response = function(text){
        var response = $('#response_div');
        var responseText = $('<h1>',{
            text:text
        });
        response.empty(); //empties the div for a clean display
        response.prepend(responseText); //appends the text parameter on an h1 to the response div
    };
    this.update_guess_counter = function(number){
        var numberOfGuesses = Number(number);
        numberOfGuesses++;
        $('.guess_counter').text(numberOfGuesses);
    };
    this.update_numbers_guessed = function(number){
        var numsGuessed = $('.numbers_guessed');
        var new_guess = numsGuessed.text() + ' ' + number;
        numsGuessed.text(new_guess);
    }
}
$(document).ready(function(){
    var game = new number_game();

    $('#big_game').click(function(){
        game.gameplay=100;
    });
    $('#medium_game').click(function(){
        game.gameplay=50;
    });
    $('#basic_game').click(function(){
        game.gameplay=10;
    });
    $('#start_button').click(function(){
        game.start_game();
    });
    $('#guess_button').click(function(){
        game.compare_numbers(); //on button click runs the compareNumbers function
        $('#guess_input').val('');
    });
    $('#guess_input').keyup(function(){
        if (event.keyCode == 13){
            game.compare_numbers(); //on enter click it also runs the compareNumbers function
            $('#guess_input').val('');
        }
    });
    $('#reset').click(function(){
        game.reset();
    })
});

// function startgame(){ //trying to get start button to create a game properly
//     answer = Math.floor(Math.random() * gameplay +1); //picks a random number from 1-10 or 1-50
//     console.log(answer);
//     $('.gameplay_div').hide();
//     $('.guess_div').show();
// }
// function compareNumbers(){
//     var guess = $('#guess_input').val(); //sets guess to the value inside the input
//     guess = Number(guess); //changes the value from a string to a number
//     if(isNaN(guess) ||guess > gameplay || guess < 1 ){ //checks if the number is not a number and if its in range
//         guessResponse('please guess from 1-' + gameplay); //display for out of range inputs
//     }else{
//         if (answer < guess){
//             guessResponse('too high'); //display for a high guess
//             updateGuessCounter($('.guess_counter').text());
//             updateNumbersGuessed(guess);
//         }else if(answer == guess){
//             guessResponse('you got it!'); //display for a correct guess
//             updateGuessCounter($('.guess_counter').text());
//             updateNumbersGuessed(guess);
//             setTimeout(function(){
//                 guessResponse('Play again?');
//                 $('#reset').show();
//             },2000);
//         }else{
//             guessResponse('too low'); //display for a low guess
//             updateGuessCounter($('.guess_counter').text());
//             updateNumbersGuessed(guess);
//         }
//     }
// }
// //guessResponse function to notify the player about their guess
// function guessResponse(text){
//     var response = $('#response_div');
//     var responseText = $('<h1>',{
//         text:text
//     });
//     response.empty(); //empties the div for a clean display
//     response.prepend(responseText); //appends the text parameter on an h1 to the response div
// }
// function reset(){ //resets variables and returns to the gameplay selection screen
//     answer=null;
//     gameplay=10;
//     $('.gameplay_div').show();
//     $('.guess_div').hide();
//     $('#response_div').empty();
//     $('#reset').hide();
//     $('.guess_counter').text('0');
//     $('.numbers_guessed').text('');
//
// }
// function updateGuessCounter(number){
//     var numberOfGuesses = Number(number);
//     numberOfGuesses++;
//     $('.guess_counter').text(numberOfGuesses);
// }
// function updateNumbersGuessed(number){
//     var numsGuessed = $('.numbers_guessed').text();
//     var new_guess = numsGuessed + ' ' + number;
//     $('.numbers_guessed').text(new_guess);
// }