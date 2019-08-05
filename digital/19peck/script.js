//script file for jQuery demo

$(document).ready(function(){
    
        // ALL jQUERY GOES IN HERE!!!
    
    let hasItBeenClicked=false;
    let cycler = 1;
    
    $(".hidden").hide();
    
    $("#showImage").click(function(){
        $(".hidden").show();
        console.log("the button has been clicked");
    })
    
    $(".specialBg").click(function(){
        $(this).css("background-color", "green");
    })
    
    $(".imgChanger").click(function(){
        $(this).attr("src","assets/wc_p03.jpg");
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
        if (cycler <6) {
            cycler += 1;
            $(this).attr("src", "numbered/"+cycler+".jpg");
        } else {
            cycler = 1;
            $(this).attr("src", "numbered/"+cycler+".jpg");
        }
    })
    
    // Hover to Start a Gif
    
    $("#thirdImg").hover(
        function(){
            $(this).attr("src","assets/wc_p01.jpg");
        }, function(){
            $(this).attr("src","assets/wc_p03.jpg");
        }
    )
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})