// Script file for jQuery demo

$(document).ready(function(){

    // all jQuery goes here!
    
    
    let hasItBeenClicked = false;
    let cycler = 1;
    
   $(".hidden").hide(); 

    $("#showImage").click(function(){
        $(".hidden").show();
        console.log("the button has been clicked");
    })
    
    $(".specialBg").click(function(){
        $(this).css("background-color", "purple");
    })
    
    $(".imgChanger").click(function(){
        $(this).attr("src","assests/1.jpg");
        $(this).removeClass("clicker");
    })
    
    $("#thirdImg").click(function(){
        if (hasItBeenClicked === false){
            $(this).addClass("newClass");
            hasItBeenClicked = true;
        } else {
            $(this).removeClass("newClass");
            hasItBeenClicked = false;
        }
    })
    
    $("#cycling").click(function(){
        if (cycler < 4) {
            cycler += 1;
            $(this).attr("src", "numbered/"+cycler+".jpg");
        } else {
            cycler = 1;
            $(this).attr("src", "numbered/"+cycler+".jpg");
        }
        
    })
    
    $("#thirdImg").hover(
        function(){
            $(this).attr("src","assests/1.jpg");
        }, function(){
            $(this).attr("src","assests/3.jpg");
        }
    )
    
})