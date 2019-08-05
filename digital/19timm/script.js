//This is the scripts sheet for the Mountain of Feathers Comic

$(document).ready(function(){

   
    $(".hidden").hide(); 

    $(".start").click(function(){
        $(".hidden").show();
    })

    $(".start").hover(
        function(){
            $(this).attr("src", "assets/Begin2.png");
        }, function(){
            $(this).attr("src","assets/Begin1.png");
        })

    $("#momAnswer1").hover(
        function(){
            $(this).attr("src","assets/SpeakWithMomSelected.png");
        }, function(){
            $(this).attr("src", "assets/SpeakWithMom.png");
        })

    $("#momAnswer2").hover(
        function(){
            $(this).attr("src","assets/KeepRunningSelected.png");
        }, function(){
            $(this).attr("src", "assets/KeepRunning.png");
        })
    
    $("#boyAnswer1").hover(
        function(){
            $(this).attr("src","assets/TrustHimSelected.png");
        }, function(){
            $(this).attr("src","assets/TrustHim.png");
        })

    $("#boyAnswer2").hover(
        function(){
            $(this).attr("src","assets/BraveItSelected.png");
        }, function(){
            $(this).attr("src", "assets/BraveIt.png");
        })
    
    
     $(".nextfinal").hover(
        function(){
            $(this).attr("src","assets/Read_Again_Selected.png");
        }, function(){
            $(this).attr("src", "assets/Read_Again.png");
        })
    
    
   











})