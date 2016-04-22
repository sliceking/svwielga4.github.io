var first_card=null; //global variable to track a clicked card
var second_card=null; //global variable to track a second clicked card
var clickable=true; //global variable to prevent rapid clicking when cards don't match
var total_matches=0;
$(document).ready(function(){
    append_cards_to_gameboard(); //appends cards to the gameboard
    $('.card_back').click(function(){ //on clicking the back of the card it fires the show card function
        if(clickable){ //if clickable is true, show_card will work, else nothing happens
            show_card(this);
        }
    });
    $('button').click(function(){
        reset_game();
    })
});

function append_cards_to_gameboard(){ //func creates a card play area
    var card_fronts=['images/bill.png','images/bill.png','images/dipper.png','images/dipper.png','images/ford.png','images/ford.png','images/gideon.png','images/gideon.png','images/gnome.png','images/gnome.png','images/mabel.jpg','images/mabel.jpg','images/soos.png','images/soos.png','images/unclestan.png','images/unclestan.png','images/wendy.png','images/wendy.png'];
    var card_fronts = randomize_cards(card_fronts); //randomizes the card front array
    for (var i=0;i<18;i++){
        var game_area = $('.game_area'); //game area target
        var card_div = $('<div>',{ // divs to contain the cards
            class:'card'
        });
        var card_back = $('<img>',{ //card back images
            src:'images/cardBack.jpg',
            class:'card_back'
        });
        var card_front = $('<img>',{ //card front images
            src:card_fronts[i],
            class:'card_front'
        });
        $(card_div).append(card_front); //appends the card fronts to a card area
        $(card_div).append(card_back); //appends the card backs on top of the card fronts
        $(game_area).append(card_div); //appends all of that to the game area
    }
}
function show_card(card){ //func to show the card front
    clickable = false; //sets clickable to false to prevent fast clicking
    var inside = $(card).prev(); //variable stores the information about the front of the card
    $(card).hide(); //hides the back of the card
    console.log('show card fired');
    compare_cards(inside); //uses the front of the card as a parameter to pass into the compare cards func
}
function compare_cards(card){
    if (first_card == null){
        first_card = card; // if the first_card variable is null, it sets first_card to the card clicked
        clickable = true;
    }else if(second_card == null) {
        second_card = card; // if the second_card variable is null, it sets second_card to the card clicked
        if (first_card.attr('src') == second_card.attr('src')) {
            cards_match(); // if the src attribute on both cards match, the cards match function is fired
        } else {
            cards_dont_match(); // if the src attribute on both cards dont match, the cards_dont_match function is fired
        }
    }
}

function cards_match(){ //func for when the cards match
    total_matches++;
    if(total_matches != 9){
        display_messages('Cards Match!');
    }else{
        display_messages('You Win!');
    }
    console.log('cards match');
    var score = $('#score').text(); //sets a variable to the current score
    score = Number(score); //changes the variable from a string to a number
    score += 10; //adds 10 to the scure
    $('#score').text(score); //sets the visible score to the new total
    console.log(score);
    first_card.next().removeClass('card_back'); //removes the card back class from the first card
    second_card.next().removeClass('card_back'); //removes the card back class from the second card
    first_card = null; //sets first card to null
    second_card = null; //sets second card to null
    clickable = true; //makes cards clickable again
}

function cards_dont_match(){
    display_messages('Cards don\'t match!');
    console.log('cards dont match');
    setTimeout(function(){
        $('.card_back').show();
        clickable = true;
    },1000);
    first_card = null;
    second_card = null;
}
function randomize_cards(array){
    var counter = array.length;
    while(counter>0){
        var index = Math.floor(Math.random() * counter);
        counter--;
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}
function reset_game(){ //resets the game
    $('.game_area').empty(); //empties the game area
    $('#score').text('0'); // sets the score back to 0
    total_matches = 0;
    $('.display_message').empty();
    append_cards_to_gameboard(); //creates a new game area
}
function display_messages(condition){
    var message_div = $('<div>',{
        class:'display_message'
    });
    var message = $('<h1>',{
        text:condition
    });
    message_div.append(message);
    $('.header').append(message_div);
    if(condition != 'You Win!'){
        setTimeout(function(){
            message_div.remove();
        },1000);
    }
}