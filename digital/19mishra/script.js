// script file for Jquery
$(document).ready(function(){

    let hasItBeenClicked = false;

    let larkPlaying = false;

    $("#larkControl").click(function(){
    if (larkPlaying === false) {
    $("#larkSound").trigger ("play");
    larkPlaying = true;
    $(this).attr("src","soundDemo/on.png");
} else{
    $("#larkSound").trigger("pause");
    larkPlaying = false;
$("#larkControl").attr("src","soundDemo/off.png");
    }
    });

$(".Panel2Changer").click (function(){
   if(hasItBeenClicked === false){
       $(this).attr("src","assets/P22.png");
       hasItBeenClicked = true;
       console.log("panel has been clicked");
   }
    else{
        $(this).attr("src","assets/P21.png");
       hasItBeenClicked = false;
   }

});

$(".Panel3Changer").click (function(){
   if(hasItBeenClicked === false){
       $(this).attr("src","assets/P32.png");
       hasItBeenClicked = true;
       console.log("panel has been clicked");
   }
    else{
        $(this).attr("src","assets/P31.gif");
       hasItBeenClicked = false;
}

});

$(".Panel4Changer").click (function(){
   if(hasItBeenClicked === false){
       $(this).attr("src","assets/P44.png");
       hasItBeenClicked = true;
       console.log("panel has been clicked");
   }
    else{
        $(this).attr("src","assets/P43.gif");
       hasItBeenClicked = false;
}
    });
$(".Panel5Changer").click (function(){
   if(hasItBeenClicked === false){
       $(this).attr("src","assets/P54.gif");
       hasItBeenClicked = true;
       console.log("panel has been clicked");
   }
    else{
        $(this).attr("src","assets/P53.gif");
       hasItBeenClicked = false;
}





});

});
