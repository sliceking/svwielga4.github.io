/**
 * Created by Nick on 2/10/2016.
 */

//create default game area
var gameArea = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
];
var gameAreaSize= 3;

//set starting player default
var player = 'x';

//default to normal rules, anarchy mode off
var anarchyMode = 0;

//set game-ending states off
var player1wins = 0;
var player2wins = 0;
var tiewins = 0;
var won = 0;
var battletoads = new Audio('Audio/battletoads.mp3');
var contra = new Audio('Audio/contra.mp3');
var duckhunt = new Audio('Audio/duckhunt.mp3');
var kinghippo = new Audio('Audio/kinghippo.mp3');
var mario = new Audio('Audio/mario.mp3');
var megaman = new Audio('Audio/megaman.mp3');
var metroid = new Audio('Audio/metroid.mp3');
var zelda = new Audio('Audio/zelda.mp3');

