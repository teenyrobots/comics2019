// MMS Script

$(document).ready(function(){
    
    let hasitbeenclicked = false;
    let shopmusic = false;
    let bellclick = false;
    
    
    $(".hidden") .hide();
    
    $(".clicker1").click(function(){
        
        if (hasitbeenclicked === false){
            
            $(this).attr("src","assets/p.5.1.jpg");   
            hasitbeenclicked = true;
        
        } 
        
        else {
        
        $(this).attr("src","assets/p.5.jpg");
        hasitbeenclicked = false;
        
    }
                        
        
    });
    
    $(".clicker2").click(function(){
        
        if (hasitbeenclicked === false){
            
            $(this).attr("src","assets/p.9.1.jpg");   
            hasitbeenclicked = true;
        
        } 
        
        else {
        
        $(this).attr("src","assets/p.9.jpg");
        hasitbeenclicked = false;
        
    }
                        
        
    });
    
    $(".clicker3").click(function(){
        
        if (hasitbeenclicked === false){
            
            $(this).attr("src","assets/p.18.1.jpg");   
            hasitbeenclicked = true;
        
        } 
        
        else {
        
        $(this).attr("src","assets/p.18.jpg");
        hasitbeenclicked = false;
        
    }
                            
    });
    
    $("#bell").click(function(){
        
        if (bellclick === false) {
            
            $("#bellchime").trigger("play");
            
        }
        
    });
        
    $(".musicon").click(function(){
        
        if (shopmusic === false) {
            
            $(this).attr("src","musicoff.gif");
            $("#shopmusic").trigger("play");
             shopmusic = true;
            
        }
        
        else {
            
            $(this).attr("src","musicon.gif");
            $("#shopmusic").trigger("pause");
            shopmusic = false;
        }
        
    });
    
    
    
    
    
});