/* script for sound demo */

$(document).ready(function(){

    $("#pause").hide();
   

    
    $("#play").click(function(){
    
        $("#sound").trigger("play");
        $("#play").hide();
        $("#pause").show();
   
    
    })
    
    $("#pause").click(function(){
          $("#sound").trigger("pause");
          $("#pause").hide();
          $("#play").show();
    })

}) 