// script file for as the tide turns

$(document).ready(function(){
    let radio = 0;
    let clickable = false;
    let click = false;
    $(".hidden").hide();
    
    $("#clickable").click(function(){
       
        
        if (radio < 3) {
            radio += 1;
            $("#radioEl").attr("src", "assets/"+radio+".mp3"); 
             console.log("the button has been clicked");
            $("#radio")[0].load();
            $("#radio")[0].play();
        } else {
            radio = 1;
            $("#radioEl").attr("src", "assets/"+radio+".mp3");
            $("#radio")[0].load();
            $("#radio")[0].play();
            
    }
    });
    
    $(".hoverLis").hover(
        function(){
            $(".hoverLis").attr("src", "assets/AsTheTideTurns_Pages_007lisb2.png");
        }, function(){
            $(".hoverLis").attr("src", "assets/AsTheTideTurns_Pages_007lis2.png");
        }
    );
    
    
    $("#lis").click(function(){
        $(".hidden").show("#button2,#button3");
            $(this).removeClass("hoverLis");
        $(this).addClass("noHoverLis");
        $(this).attr("src","assets/AsTheTideTurns_Pages_007lis2.png");
        
  });
    
    $(".clicker").hover(
        function(){
            $(".clicker").attr("src", "assets/AsTheTideTurns_Pages_011a1.jpg");
        }, function(){
            $(".clicker").attr("src", "assets/AsTheTideTurns_Pages_011a.jpg");
        }
    );
    
    $("#hoverBoys").click(function(){
        $(".hidden").show("#button5,#button6");
        $(this).removeClass("clicker");
        $(this).addClass("noHoverBoys");
        $(this).attr("src","assets/AsTheTideTurns_Pages_011a.jpg");
        
});
    
   
    
    $(".knob").hover(
        function(){
            $(this).attr("src", "assets/AsTheTideTurns_Pages_005knob2.png");
        }, function(){
            $(this).attr("src", "assets/AsTheTideTurns_Pages_005knob.png");
        });
    
    $("#button2,#button3,#button5,#button6").hover(
        function(){
            $(this).attr("src", "assets/AsTheTideTurns_Pages_005knob2.png");
        }, function(){
            $(this).attr("src", "assets/AsTheTideTurns_Pages_005knob.png");
        });
        
    $(".hover").hover(
        function(){
            $(this).attr("src", "assets/AsTheTideTurns_Pages_006a.jpg");
        }, function(){
            $(this).attr("src", "assets/AsTheTideTurns_Pages_006b.jpg");
        }
    );    
    
    $(".dragscroll")
  .mousedown(function() {
    $(this).addClass("grabbingHands");
  })
    .mouseup(function() {
    $(this).removeClass("grabbingHands");
  })
   });
    
    
    
    