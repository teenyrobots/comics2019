// Script file for Magical Boys Vs Zombies

$(document).ready(function(){

    let hasItBeenClicked = false;
    let musicControl = false;

   
     $("#musicControl").click(function(){
        
        if (musicControl === false) {
            $("#chaseMusic").trigger("play");    
            musicControl = true;
            $("#musicControl").attr("src","assets/musicon.png");
        } else {
            $("#chaseMusic").trigger("pause");    
            musicControl = false;
            $("#musicControl").attr("src","assets/musicoff.png");
            
        }
       
    })

    
    $(".foot").click(function(){
        if (hasItBeenClicked === false){
            $(this).attr("src","assets/foot2.gif");
            hasItBeenClicked = true;
        } else {
            $(this).attr("src","assets/foot1.gif");
            hasItBeenClicked = false;
        }
    });
    
    $(".bite").click(function(){
        if (hasItBeenClicked === false){
            $(this).attr("src","assets/bite1.gif");
            hasItBeenClicked = true;
        } else {
            $(this).attr("src","assets/bite2.gif");
            hasItBeenClicked = false;
        }
    });
    
     $(".computer").click(function(){
        if (hasItBeenClicked === false){
            $(this).attr("src","assets/computer2.gif");
            hasItBeenClicked = true;
        } else {
            $(this).attr("src","assets/computer1.gif");
            hasItBeenClicked = false;
        }
    });
    
    $(".playing").click(function(){
        if (hasItBeenClicked === false){
            $(this).attr("src","assets/perform1.gif");
            hasItBeenClicked = true;
        } else {
            $(this).attr("src","assets/perform2.gif");
            hasItBeenClicked = false;
        }
    });
    
    $(".highFive").click(function(){
        if (hasItBeenClicked === false){
            $(this).attr("src","assets/highfive2.gif");
            hasItBeenClicked = true;
        } else {
            $(this).attr("src","assets/highfive1.gif");
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