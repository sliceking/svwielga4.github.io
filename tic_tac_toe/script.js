//ON DOCUMENT LOAD
$(document).ready(function () {
    $("#how_to_play_modal").modal('show');

    //when a square on either board is clicked
    $(".square3_container, .square5_container").click(function () {
      

        //if clicked after game is won, reset the game
        if (won == 1) {
            reset();
            won = 0;
            return;
        }

        if (anarchyMode) // if anarchyMode is not 0, i.e. on
        {
            //if clicked square is already selected by a player
            if ( $(this).find('.back').hasClass('x') || $(this).find('.back').hasClass('o'))
            {
                // there is 65% chance to take over clicked square
                if (Math.random() < 0.64)
                {
                    //if does not have the player's class, steal
                    if (!($(this).find('.back').hasClass(player)))
                    {
                        $(this).find('.back').toggleClass('x');
                        $(this).find('.back').toggleClass('o');
                        addToIndex($(this).attr('id'), player);
                    }
                }
                //if already has player's class OR unlucky, do nothing/lose one turn
            }
            //if unclaimed, take square normally
            else {
                console.log(this);
                $(this).find('.back').addClass(player).addClass('flip');//mark the cell with the current player's mark
                $(this).find('.front').addClass('flip');
                addToIndex($(this).attr('id'), player);//store the location of the click into your storage variable
                console.log("player:" + player);
            }
        }// otherwise, anarchyMode is off and continue as normal
        else {
            //if square was already claimed,
            if ($(this).find('.back').hasClass('x') || $(this).find('.back').hasClass('o')) {
                $('.square_occupied').show( "drop", {direction: "right"});
                setTimeout(function () {
                    $('.square_occupied').hide('drop',{direction:'right'});
                }, 3000);
                console.log("already clicked");
                return;
            }
            console.log(this);
            $(this).find('.back').addClass(player).addClass('flip');//mark the cell with the current player's mark
            $(this).find('.front').addClass('flip');
            addToIndex($(this).attr('id'), player);//store the location of the click into your storage variable
            console.log("player:" + player);
        }

        var gameResult = checkWin();//check for win and increment the stat counters
        if (gameResult == 'w'){
            var winning = new Audio('Audio/winning.mp3');
            winning.play();
            if (player == 'x'){
                player1wins++;
                $('.player_1_stat h2').text(player1wins).effect('highlight').effect('highlight');
                won = 1;
            } else {
                player2wins++;
                $('.player_2_stat h2').text(player2wins).effect('highlight').effect('highlight');
                won = 1;
            }
        } else if (gameResult == 't'){
            tiewins++;
            $('.tie_stats h2').text(tiewins).effect('highlight').effect('highlight');

            won = 1;
        }

        console.log('checked win '+ gameResult);
        square_clicked(player);//toggle the player to the next one after processing the click
    });

    //This is the click handler that fires the reset function when the reset button is clicked
    $('#reset').click(function(){
        var resetSound = new Audio('Audio/reset.wav');
        resetSound.play();
        console.log('reset clicked');
        reset();
    });
    //this checks if the user wants to be on a 3x3 game board, it also changes the gameArea array size
    $('#3x3').click(function(){
        gameAreaSize = 3;
        $('.game_board3').css('display','block');
        $('.game_board5').css('display','none');
        gameArea = [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9']
        ];
        var three = new Audio('Audio/3.wav');
        three.play();
    });
    //this checks if the user wants to be on a 5x5 game board, it also changes the gameArea array size

    $('#5x5').click(function(){
        gameAreaSize = 5;
        $('.game_board3').css('display','none');
        $('.game_board5').css('display','block');
        gameArea = [
            ['1', '2', '3', '4', '5'],
            ['6', '7', '8', '9', '10'],
            ['11','12', '13', '14', '15'],
            ['16','17', '18', '19', '20'],
            ['21','22', '23', '24', '25']
        ];
        var five = new Audio('Audio/5.wav');
        five.play();
    });

    $('#normal').click(function(){
       anarchyMode = 0;

        $('#anarchy_display').hide('drop',{direction:'left'});
        $('.anarchy_info').hide('drop',{direction:'right'});
        var normal = new Audio('Audio/normal.wav');
        normal.play();

    });
    $('#anarchy').click(function(){
        anarchyMode = 1;
        $('#anarchy_display').show('drop',{direction:'left'});
        $('.anarchy_info').show('drop',{direction:'right'});
        var anarchy = new Audio('Audio/anarchy.wav');
        anarchy.play();
    });

    $('#player1_icon1').click(function(){
        detectIconUsed('player1');
        var style = $('<style>.x {background-image:url("images/battletoads.png")}</style>');
        $('html > head').append(style);
        battletoads.play();
        contra.pause();
        duckhunt.pause();
        kinghippo.pause();
        mario.pause();
        megaman.pause();
        metroid.pause();
        zelda.pause();

    });
    $('#player1_icon2').click(function(){
        detectIconUsed('player1');
        var style= $('<style>.x {background-image:url("images/contra.png")}</style>');
        $('html > head').append(style);
        contra.play();
        battletoads.pause();
        duckhunt.pause();
        kinghippo.pause();
        mario.pause();
        megaman.pause();
        metroid.pause();
        zelda.pause();


    });
    $('#player1_icon3').click(function(){
        detectIconUsed('player1');
        var style= $('<style>.x {background-image:url("images/duckhunt.png")}</style>');
        $('html > head').append(style);
        duckhunt.play();
        contra.pause();
        battletoads.pause();
        kinghippo.pause();
        mario.pause();
        megaman.pause();
        metroid.pause();
        zelda.pause();
    });
    $('#player1_icon4').click(function(){
        detectIconUsed('player1');
        var style= $('<style>.x {background-image:url("images/kinghippo.png")}</style>');
        $('html > head').append(style);
        kinghippo.play();
        duckhunt.pause();
        contra.pause();
        battletoads.pause();
        mario.pause();
        megaman.pause();
        metroid.pause();
        zelda.pause();
    });
    $('#player1_icon5').click(function(){
        detectIconUsed('player1');
        var style= $('<style>.x {background-image:url("images/link.png")}</style>');
        $('html > head').append(style);
        zelda.play();
        kinghippo.pause();
        duckhunt.pause();
        contra.pause();
        battletoads.pause();
        mario.pause();
        megaman.pause();
        metroid.pause();

    });
    $('#player1_icon6').click(function(){
        detectIconUsed('player1');
        var style= $('<style>.x {background-image:url("images/mario.png")}</style>');
        $('html > head').append(style);
        mario.play();
        zelda.pause();
        kinghippo.pause();
        duckhunt.pause();
        contra.pause();
        battletoads.pause();
        megaman.pause();
        metroid.pause();
    });
    $('#player1_icon7').click(function(){
        detectIconUsed('player1');
        var style= $('<style>.x {background-image:url("images/megaman.png")}</style>');
        $('html > head').append(style);
        megaman.play();
        zelda.pause();
        kinghippo.pause();
        duckhunt.pause();
        contra.pause();
        battletoads.pause();
        metroid.pause();
        mario.pause();
    });
    $('#player1_icon8').click(function(){
        detectIconUsed('player1');
        var style= $('<style>.x {background-image:url("images/metroid.png")}</style>');
        $('html > head').append(style);
        metroid.play();
        megaman.pause();
        zelda.pause();
        kinghippo.pause();
        duckhunt.pause();
        contra.pause();
        battletoads.pause();
        mario.pause();
    });

    $('#player2_icon1').click(function(){
        detectIconUsed('player2');
        var style = $('<style>.o {background-image:url("images/battletoads.png")}</style>');
        $('html > head').append(style);
        battletoads.play();
        contra.pause();
        duckhunt.pause();
        kinghippo.pause();
        mario.pause();
        megaman.pause();
        metroid.pause();
        zelda.pause();
    });

    $('#player2_icon2').click(function(){
        detectIconUsed('player2');
        var style= $('<style>.o {background-image:url("images/contra.png")}</style>');
        $('html > head').append(style);
        contra.play();
        battletoads.pause();
        duckhunt.pause();
        kinghippo.pause();
        mario.pause();
        megaman.pause();
        metroid.pause();
        zelda.pause();
    });

    $('#player2_icon3').click(function(){
        detectIconUsed('player2');
        var style= $('<style>.o {background-image:url("images/duckhunt.png")}</style>');
        $('html > head').append(style);
        duckhunt.play();
        contra.pause();
        battletoads.pause();
        kinghippo.pause();
        mario.pause();
        megaman.pause();
        metroid.pause();
        zelda.pause();
    });
    $('#player2_icon4').click(function(){
        detectIconUsed('player2');
        var style= $('<style>.o {background-image:url("images/kinghippo.png")}</style>');
        $('html > head').append(style);
        kinghippo.play();
        duckhunt.pause();
        contra.pause();
        battletoads.pause();
        mario.pause();
        megaman.pause();
        metroid.pause();
        zelda.pause();
    });
    $('#player2_icon5').click(function(){
        detectIconUsed('player2');
        var style= $('<style>.o {background-image:url("images/link.png")}</style>');
        $('html > head').append(style);
        zelda.play();
        kinghippo.pause();
        duckhunt.pause();
        contra.pause();
        battletoads.pause();
        mario.pause();
        megaman.pause();
        metroid.pause();
    });
    $('#player2_icon6').click(function(){
        detectIconUsed('player2');
        var style= $('<style>.o {background-image:url("images/mario.png")}</style>');
        $('html > head').append(style);
        mario.play();
        zelda.pause();
        kinghippo.pause();
        duckhunt.pause();
        contra.pause();
        battletoads.pause();
        megaman.pause();
        metroid.pause();
    });
    $('#player2_icon7').click(function(){
        detectIconUsed('player2');
        var style= $('<style>.o {background-image:url("images/megaman.png")}</style>');
        $('html > head').append(style);
        megaman.play();
        zelda.pause();
        kinghippo.pause();
        duckhunt.pause();
        contra.pause();
        battletoads.pause();
        metroid.pause();
        mario.pause();
    });
    $('#player2_icon8').click(function(){
        detectIconUsed('player2');
        var style= $('<style>.o {background-image:url("images/metroid.png")}</style>');
        $('html > head').append(style);
        metroid.play();
        megaman.pause();
        zelda.pause();
        kinghippo.pause();
        duckhunt.pause();
        contra.pause();
        battletoads.pause();
        mario.pause();
    })

});

/*
detectIconUsed - check if player icon already selected
    1 input -
    0 output

    detects which icon radio button is selected, stores ID
    set all of other player's radio buttons to 'enabled'
    using stored ID, target corresponding ID for other player to disable
*/

function detectIconUsed (play){

    var target;

    if (play == 'player1')
    {
        target = $('input:radio[name=player1]:checked').attr('id');
        console.log(target);
        target = target.substr(0,6) + '2' + target.substr(7);
        console.log(target);
        $('input[name=player2]').attr('disabled',false);
        $('input[id=' + target + ']').attr('disabled',true);
    }
    else
    {
        target = $('input:radio[name=player2]:checked').attr('id');
        console.log(target);
        target = target.substr(0,6) + '1' + target.substr(7);
        console.log(target);
        $('input[name=player1]').attr('disabled',false);
        $('input[id=' + target + ']').attr('disabled',true);
    }
}


function square_clicked(a){
    if (player=='x'){
        player = 'o';
        $('.player2_turn').show('clip');
        $('.player1_turn').hide('clip');
        var player1 = new Audio('Audio/player1.wav');
        player1.play();
    }
    else {
        player = 'x';
        $('.player1_turn').show('clip');
        $('.player2_turn').hide('clip');
        var player2 = new Audio('Audio/player2.wav');
        player2.play();

    }
    console.log("player:"+player);
}
//this is the reset function that resets the x and o classes and resets the gameArea Array
function reset(){
    console.log('reset recieved');
    $('.square3, .square5').removeClass('x o flip');
    if(gameAreaSize == 3){
        gameArea = [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9']
        ];
    } else if(gameAreaSize==5){
        gameArea = [
            ['1', '2', '3', '4', '5'],
            ['6','7', '8', '9', '10'],
            ['11','12', '13', '14', '15'],
            ['16','17', '18', '19', '20'],
            ['21','22', '23', '24', '25']
        ];
    }

}

