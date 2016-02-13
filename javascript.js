var stega = new Audio('images/stega.mp3');
var deep = new Audio('images/toodeep.mp3');
$(document).ready(function(){
    $('#learningfuze').hover(function() {
        $('#learning').show('clip');
    }, function() {
        $('#learning').hide('explode');
    });

    $('#food').hover(function() {
        $('#ramen').show('clip');
    }, function() {
        $('#ramen').hide('explode');
    });

    $('#moon').hover(function() {
        $('#night').show('clip');
    }, function() {
        $('#night').hide('explode');
    });

    $('#dream').hover(function() {
        $('#pika').show('clip');
    }, function() {
        $('#pika').hide('explode');
    });

    $('#kitty').hover(function() {
        $('#cat').show('clip');
    }, function() {
        $('#cat').hide('explode');
    });

    $('#together').hover(function() {
        $('#us').show('clip');
    }, function() {
        $('#us').hide('explode');
    });
    $('#stegs').hover(function() {
        $('#steg').show('clip');
    }, function() {
        $('#steg').hide('explode');
    });
    $('#option').hover(function() {
        $('#buttons').show('clip');
    }, function(){}
    );

    $('#dogs').hover(function() {
        $('#wilddogs').show('clip');
    }, function() {
        $('#wilddogs').hide('explode');
    });

    $('#give').hover(function() {
        $('#gift').show('clip');
    }, function() {
        $('#gift').hide('explode');
    });

    $('#no').click(function(){
        $('#disabled').show();
    });
    $('#yes').click(function(){
        $('.words').hide();
        $('#buttons').hide();
        $('.directions').hide();
        $('#disabled').hide();
        $('#ele').show();
        $('#tulip').show();
        $('#lion').show();
        deep.play();
        setTimeout(function(){
            $('#ele').addClass('spin');
        },3000);
        setTimeout(function(){
            $('#lion').addClass('spin2');
        },5000);
        setTimeout(function(){
            $('#danceparty').addClass('dance');
        },7000);
    });

    $('#animal').hover(function(){
        stega.play();
    });
});