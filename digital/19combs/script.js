// Script file for Magical Boys Vs Zombies

$(document).ready(function(){

    let hasItBeenClicked = false;
   
   

    
    $(".foot").click(function(){
        if (hasItBeenClicked === false){
            $(this).attr("src","assets/foot1.jpg");
            hasItBeenClicked = true;
        } else {
            $(this).attr("src","assets/foot2.jpg");
            hasItBeenClicked = false;
        }
    });
    
    $(".bite").click(function(){
        if (hasItBeenClicked === false){
            $(this).attr("src","assets/bite1.jpg");
            hasItBeenClicked = true;
        } else {
            $(this).attr("src","assets/bite2.jpg");
            hasItBeenClicked = false;
        }
    });
    
     $(".computer").click(function(){
        if (hasItBeenClicked === false){
            $(this).attr("src","assets/computer1.jpg");
            hasItBeenClicked = true;
        } else {
            $(this).attr("src","assets/computer2.jpg");
            hasItBeenClicked = false;
        }
    });
    
    $(".playing").click(function(){
        if (hasItBeenClicked === false){
            $(this).attr("src","assets/perform01.jpg");
            hasItBeenClicked = true;
        } else {
            $(this).attr("src","assets/perform02.jpg");
            hasItBeenClicked = false;
        }
    });
    
    $(".highFive").click(function(){
        if (hasItBeenClicked === false){
            $(this).attr("src","assets/highfive1.jpg");
            hasItBeenClicked = true;
        } else {
            $(this).attr("src","assets/highfive2.jpg");
            hasItBeenClicked = false;
        }
    });
    
     $(".popOut").hover(
        function(){
            $(this).addClass("popOut");
        }, function(){
            $(this).removeClass("popOut");
        });
    

   
});