var char;
var x = new Array();
var count = 0;

function Charx()
{
    x= String.fromCharCode( Math.floor(Math.random() * 26) + 97);
    document.getElementById("test").innerHTML+=x;   
}
setInterval(function(){ Charx();}, 2000);




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
        count+=1;
        document.getElementById("test2").innerHTML=count;
        x.shift();
    }
    else
    {
        count-=1;
        document.getElementById("test2").innerHTML=count;
       /*if(live = 0)
        {
            alert("Hide!");
            document.getElementById( 
                "test").style.visibility = "hidden"; 
        }*/
    }
}

