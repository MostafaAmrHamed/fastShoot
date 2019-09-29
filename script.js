var randomCharacter;
var count = 0;
var lives = 3;

function Charx()
{
    randomCharacter= String.fromCharCode( Math.floor(Math.random() * 26) + 97);
    document.getElementById("gameBoard").innerHTML+=randomCharacter;   
}


$(function(){
    $(window).keypress((e)=>{
       var char = String.fromCharCode(e.which);
       var gameBoard = document.getElementById("gameBoard").innerHTML;
        if(gameBoard[0]==char)
    {
        document.getElementById("score").innerHTML= ++count;
        gameBoard = gameBoard.substring(1);
        document.getElementById("gameBoard").innerHTML= gameBoard;
    }
    else
    {
        lives--;
        if(lives <0)
        {
            clearInterval(t);
            document.getElementById("score").innerHTML = "You Lost Your Score Was : " + count;
            return;
        }

        if(count < 1)
            return;
        document.getElementById("score").innerHTML= --count;
    } 
    });
});
 
var t = setInterval(function(){ Charx();}, 1000);




