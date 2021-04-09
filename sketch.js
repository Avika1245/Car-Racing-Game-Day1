var database;
var canvas, backgroundImg, playerCount, form, player, game;
var gameState= 0;

function setup(){
    database=firebase.database();

    canvas= createCanvas(500,500);
     game= new Game();
     game.getState();
     game.start();

}

function draw(){
    background("white");
    drawSprites();
}

