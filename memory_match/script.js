
var clickable=true; //global variable to prevent rapid clicking when cards don't match
function CARD(front,back){
    var self = this;
    this.front=front;
    this.back=back;
    $(this.back).click(function(){
        if(clickable){
           self.show_card();
        }
    });
    this.show_card = function(){
        clickable = false; //sets clickable to false to prevent fast clicking
        // var inside = $(card).prev(); //variable stores the information about the front of the card
        this.back.hide(); //hides the back of the card
        console.log('show card fired');
        game.compare_cards(self.front); //uses the front of the card as a parameter to pass into the compare cards func
    }
}
function MEMORY_MATCH(){
    var self = this;
    this.first_card=null;
    this.second_card=null;
    this.total_matches=0;
    this.score = 0;
    this.attempts = 0;
    this.append_cards_to_gameboard =  function(){
        var card_fronts=['images/bill.jpg','images/bill.jpg','images/dipper.jpg','images/dipper.jpg','images/ford.jpg','images/ford.jpg','images/gideon.jpg','images/gideon.jpg','images/gnome.jpg','images/gnome.jpg','images/mabel.jpg','images/mabel.jpg','images/soos.jpg','images/soos.jpg','images/unclestan.jpg','images/unclestan.jpg','images/wendy.jpg','images/wendy.jpg'];
        var card_fronts = self.randomize_cards(card_fronts); //randomizes the card front array
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
            var card = new CARD(card_front,card_back);
        }
    };
    this.randomize_cards = function(array){
        var counter = array.length;
        while(counter>0){
            var index = Math.floor(Math.random() * counter);
            counter--;
            var temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    };
    this.display_messages = function(condition){
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
    };
    this.reset_game = function(){
        self.first_card = null;
        self.second_card = null;
        $('.game_area').empty(); //empties the game area
        $('#score').text('0'); // sets the score back to 0
        self.score = 0;
        self.total_matches = 0;
        $('.display_message').remove();
        self.append_cards_to_gameboard(); //creates a new game area
        self.attempts= 0;
        $('#attempts').text(0);
        $('#accuracy').text('0.0 %')
    };
    this.compare_cards = function(card){
        if (self.first_card == null){
            self.first_card = card; // if the first_card variable is null, it sets first_card to the card clicked
            clickable = true;
        }else if(self.second_card == null) {
            self.second_card = card; // if the second_card variable is null, it sets second_card to the card clicked
            if (self.first_card.attr('src') == self.second_card.attr('src')) {
                self.update_attempts();
                self.cards_match(); // if the src attribute on both cards match, the cards match function is fired
                self.accuracy_update();
            } else {
                self.update_attempts();
                self.cards_dont_match(); // if the src attribute on both cards dont match, the cards_dont_match function is fired
                self.accuracy_update();
            }
        }
    };
    this.cards_match = function(){
        game.total_matches++;
        if(game.total_matches != 9){
            game.display_messages('Cards Match!');
        }else{
            game.display_messages('You Win!');
        }
        console.log('cards match');
        self.score += 10;
        // var score = $('#score').text(); //sets a variable to the current score
        // score = Number(score); //changes the variable from a string to a number
        // score += 10; //adds 10 to the scure
        $('#score').text(self.score); //sets the visible score to the new total
        console.log(score);
        self.first_card.next().removeClass('card_back'); //removes the card back class from the first card
        self.second_card.next().removeClass('card_back'); //removes the card back class from the second card
        self.first_card = null; //sets first card to null
        self.second_card = null; //sets second card to null
        clickable = true; //makes cards clickable again
    };
    this.cards_dont_match = function(){
        game.display_messages('Cards don\'t match!');
        console.log('cards dont match');
        setTimeout(function(){
            $('.card_back').show();
            clickable = true;
        },1000);
        self.first_card = null;
        self.second_card = null;
    };
    this.accuracy_update = function(){
        var accuracy_element = $('#accuracy');
        accuracy_element.text(((self.total_matches / self.attempts) * 100).toPrecision(2) + " %");
    };
    this.update_attempts = function(){
        self.attempts+=1;
        var attempts = $('#attempts');
        attempts.text(self.attempts);
    }
}
$(document).ready(function(){
    game.append_cards_to_gameboard(); //appends cards to the gameboard
    $('button').click(function(){
        game.reset_game();
    })
    $("#how_to_play_modal").modal('show')
});

var game = new MEMORY_MATCH();