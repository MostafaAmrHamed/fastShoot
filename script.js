var char;
var x ;

function Charx()
{
    x= String.fromCharCode( Math.floor(Math.random() * 26) + 97);
    document.getElementById("test").innerHTML+=x; 
}
setInterval(function(){ Charx();}, 500);




$(function(){
    $(window).keypress((e)=>{
        char = String.fromCharCode(e.which);
        Test();
    });
});


function Test()
{
    if(x[0]==char)
    {
        document.getElementById("test2").innerHTML="True";
    }
    else
    {
        document.getElementById("test2").innerHTML="False";
    }
}

