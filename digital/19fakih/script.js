// script file for J query demo

$(document).ready(function(){
    

  
        let firstloveplaying = false;
        let ringtoneplaying = false;
        let clubbeatplaying = false;
        let chimeplaying = false;
        let checkphoneplaying = false;
        let dramaticplaying = false;
        let sipplaying = false;
    
    $("#firstlovecontrol").click(function(){
        
        if (firstloveplaying === false) {
            $("#firstlove").trigger("play");
            firstloveplaying= true;
            $("#firstlovecontrol").attr("src","nav/soundon.PNG");
        } else {
            $("#firstlove").trigger("pause");
            firstloveplaying= false;
            $("#firstlovecontrol").attr("src","nav/soundoff.PNG");
      
        }
        
    });
       

       
       $("#ringtonecontrol").click(function(){
           
           if (ringtoneplaying === false) {
               $("#ringtone").trigger("play");
               ringtoneplaying= true;
                   $("#firstlovecontrol").attr("src","nav/soundon.PNG");
            } else {
                $("#ringtone").trigger("pause");
                ringtoneplaying= false;
                $("ringtone").attr("src","nav/soundoff.PNG");
               
           }
       });
       
    
    
    $("#clubbeatcontrol").click(function(){
        
        if (clubbeatplaying === false) {
            $("#clubbeat").trigger("play");
            clubbeatplaying= true;
            $("#clubbeatcontrol").attr("src","nav/soundon.PNG");
        } else {
            $("#clubbeat").trigger("pause");
            clubbeatplaying= false;
            $("#clubbeatcontrol").attr("src","nav/soundoff.PNG");
      
        }
        
    });
    
    
     $("#sipcontrol").click(function(){
        
        if (sipplaying === false) {
            $("#sip").trigger("play");
            sipplaying= true;
            $("#sipcontrol").attr("src","nav/soundon.PNG");
        } else {
            $("#sip").trigger("pause");
            sipplaying= false;
            $("#sipcontrol").attr("src","nav/soundoff.PNG");
      
        }
        
    });
    


   $("#chimecontrol").click(function(){
           
           if (chimeplaying === false) {
               $("#chime").trigger("play");
               chimeplaying= true;
                $("#chimecontrol").attr("src","neon-fruit-assets/booporange.png");
            } else {
                $("#chime").trigger("pause");
                chimeplaying= false;
                $("chime").attr("src","neon-fruit-assets/booppink.png");
               
           }
       });

   $("#checkphonecontrol").click(function(){
        
        if (checkphoneplaying === false) {
            $("#checkphone").trigger("play");
            checkphoneplaying = true;
            $("#checkphonecontrol").attr("src","nav/soundon.PNG");
        } else {
            $("#checkphone").trigger("pause");
            checkphoneplaying= false;
            $("#checkphonecontrol").attr("src","nav/soundoff.PNG");
      
        }
        
    });

   $("#dramaticcontrol").click(function(){
           
           if (dramaticplaying === false) {
               $("#dramatic").trigger("play");
               dramaticplaying= true;
                   $("#dramaticcontrol").attr("src","neon-fruit-art/itsorangeboi.png");
            } else {
                $("#dramatic").trigger("pause");
                dramaticplaying= false;
                $("dramatic").attr("src","neon-fruit-art/itsorangeboi.jpg");
               
           }
       });
    
    });