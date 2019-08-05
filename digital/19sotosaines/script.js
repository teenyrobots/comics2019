// Ballad of Daedalus Script

$(document).ready(function(){
    
    let hasitbeenclicked = false;
    let cameraclick = false;
    let bellclick = false;
    let rushclick = false;
    let heartbeatclick = false;
    
    $(".page1").click(function(){
        
        if (hasitbeenclicked === false){
            
            $(this).attr("src","assets/Page2.jpg");
            hasitbeenclicked = true;
            
        }
    })
    
    $("#camera").click(function(){
        if (cameraclick === false) {
            $("#cameraSound").trigger("play");
        }
    })
    
    $("#bell").click(function(){
        if (bellclick === false) {
            $("#bellSound").trigger("play");
        }
        
    })
    
    $("#rush").click(function(){
        if (rushclick === false) {
            $("#rushSound").trigger("play");
        }
        
    })
    
    $("#heartbeat").click(function(){
        if (heartbeatclick === false) {
            $("#heartbeatSound").trigger("play");
        }
        
    })
    
    
    
    
    
    
    
    
})