// Script file for jQuery demo

$(document).ready(function(){

    // all jQuery goes here!
    
    
    let hasItBeenClicked = false;
    let cycler = 1;
    let comicschool = 1;
    let sfzf = 1;
    let textMessage = 1;
    let movieTheater = 1;
    let powerPainting = 1;
    let craigsList = 1;
    
    
   $(".hidden").hide(); 

    $("#showImage").click(function(){
        $(".hidden").show();
        console.log("the button has been clicked");
    });
    
    $(".specialBg").click(function(){
        $(this).css("background-color", "purple");
    });
    
    $(".imgChanger").click(function(){
        $(this).attr("src","assests/1.jpg");
        $(this).removeClass("clicker");
    });
    
    $("#thirdImg").click(function(){
        if (hasItBeenClicked === false){
            $(this).addClass("newClass");
            hasItBeenClicked = true;
        } else {
            $(this).removeClass("newClass");
            hasItBeenClicked = false;
        }
    });
    
    $("#panel5").click(function(){
        if (cycler < 3) {
            cycler += 1;
            $(this).attr("src", "Panel5/"+cycler+".png");
        } else {
            cycler = 1;
            $(this).attr("src", "Panel5/"+cycler+".png");
        }  
    });
    
    $("#panel8").click(function(){
        if (powerPainting < 3) {
            powerPainting += 1;
            $(this).attr("src", "Panel8/"+powerPainting+".png");
        } else {
            powerPainting = 1;
            $(this).attr("src", "Panel8/"+powerPainting+".png");
        }
    });
    
    $("#panel10").click(function(){
        if (comicschool < 2) {
            comicschool += 1;
            $(this).attr("src", "Panel10/"+comicschool+".png");
        } else {
            comicschool = 1;
            $(this).attr("src", "Panel10/"+comicschool+".png");
        }
    });
    
    $("#panel12").click(function(){
        if (sfzf < 2) {
            sfzf += 1;
            $(this).attr("src", "Panel12/"+sfzf+".png");
        } else {
            sfzf = 1;
            $(this).attr("src", "Panel12/"+sfzf+".png");
        }
    });
    
    $("#panel13").click(function(){
        if (textMessage < 2) {
            textMessage += 1;
            $(this).attr("src", "Panel13/"+textMessage+".png");
        } else {
            textMessage = 1;
            $(this).attr("src", "Panel13/"+textMessage+".png");
        }
    });
    
    $("#panel14").click(function(){
        if (craigsList < 6) {
            craigsList += 1;
            $(this).attr("src", "Panel14/"+craigsList+".png");
        } else {
            craigsList = 1;
            $(this).attr("src", "Panel14/"+craigsList+".png");
        }
    });
    
    $("#panel15").click(function(){
        if (movieTheater < 2) {
            movieTheater += 1;
            $(this).attr("src", "Panel15/"+movieTheater+".png");
        } else {
            movieTheater = 1;
            $(this).attr("src", "Panel15/"+movieTheater+".png");
        }
    });
    
    let larkPlaying = false;
    
//     $("img").hide();
    
    $("#autumnControl").click(function(){
        
        if (larkPlaying === false) {
            $("#autumnKeys").trigger("play");
            larkPlaying = true;
            $("#autumnControl").attr("src","soundDemo/musicon.png");
        } else {
            $("#autumnKeys").trigger("pause");
            larkPlaying = false;
            $("#autumnControl").attr("src","soundDemo/musicoff.png");

        }
      
    });
    
});