var char;
var x = String.fromCharCode( Math.floor(Math.random() * 26) + 97);
document.getElementById("test").innerHTML=x;

/*$(function() {
  var salt = Math.floor(Math.random() * 1000),
    time;

  function load_script() {
    $('#myscript').remove();
    $.getScript("src/to/file-with-your-custom-scripts.js?s=" + salt, function() {
      $('script:last').attr('id', 'myscript');
      salt = Math.floor(Math.random() * 1000);
      time = setTimeout(function() {
        load_script();
      }, 30 * 1000);
    });
  }
  load_script();
});*/


$(function(){
    $(window).keypress((e)=>{
        char = String.fromCharCode(e.which);
        Test();
    });
});


function Test()
{
    if(x==char)
    {
        document.getElementById("test2").innerHTML="True";
    }
    else
    {
        document.getElementById("test2").innerHTML="False";
    }
}

