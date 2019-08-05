

$(document).ready(function(){
    
    let larkPlaying = false;
    
    let cycler = 1;
    
    
//    let panelOnetracker = false;
    //let panelTwotracker = false;
//    let panelThreetracker = false;
    let panelFourtracker = false;
//    let panelFivetracker = false;
    let panelSixtracker = false;
    let panelSeventracker = false;
    let panelEighttracker = false;
    //let panelNinetracker = false;
    let panelTentracker = false;
    //let panelEleventracker = false;
    let panelTwelvetracker = false;
//    let panelThirteentracker = false;
    
    
 //   $("img").hide(); //
    
//    $("#panelOne").click(function(){
//        if (panelOnetracker === false){
//            $(this).attr("src","assests/panel1.jpg");
//            panelOnetracker = true;
//        } else {
//            $(this).attr("src","assests/panel1.gif");
//            panelOnetracker = false;
//        }
//    });
    
    //$("#panelTwo").click(function(){
        //if (panelTwotracker === false){
            //$(this).attr("src","assests/panel2_02.gif");
            //panelTwotracker = true;
        //} else {
            //$(this).attr("src","assests/panel2.gif");
            //panelTwotracker = false;
        //}
    //});
    
//    $("#panelThree").click(function(){
//        if (panelThreetracker === false){
//            $(this).attr("src","assests/panel3.jpg");
//            panelThreetracker = true;
//        } else {
//            $(this).attr("src","assests/panel3.gif");
//            panelThreetracker = false;
//        }
//    });
    
    $("#panelFour").click(function(){
        if (panelFourtracker === false){
            $(this).attr("src","assests/panel4_01.gif");
            panelFourtracker = true;
        } else {
            $(this).attr("src","assests/panel4.gif");
            panelFourtracker = false;
        }
    });
    
//    $("#panelFive").click(function(){
//        if (panelFivetracker === false){
//            $(this).attr("src","assests/panel5.jpg");
//            panelFivetracker = true;
//        } else {
//            $(this).attr("src","assests/panel5.gif");
//            panelFivetracker = false;
//        }
//    });
    
     $("#panelSix").click(function(){
        if (panelSixtracker === false){
            $(this).attr("src","assests/panel6_02.jpg");
            panelSixtracker = true;
        } else {
            $(this).attr("src","assests/panel6_1.jpg");
            panelSixtracker = false;
        }
    });
    
    $("#panelSeven").click(function(){
        if (panelSeventracker === false){
            $(this).attr("src","assests/panel7_02.jpg");
            panelSeventracker = true;
        } else {
            $(this).attr("src","assests/panel7_01.jpg");
            panelSeventracker = false;
        }
    });
    
     $("#panelEight").click(function(){
        if (panelEighttracker === false){
            $(this).attr("src","assests/panel8.jpg");
            panelEighttracker = true;
        } else {
            $(this).attr("src","assests/panel8.gif");
            panelEighttracker = false;
        }
    });
    
//     $("#panelNine").click(function(){
//        if (panelNinetracker === false){
//            $(this).attr("src","assests/panel9_03.gif");
//            panelNinetracker = true;
//        } else {
//            $(this).attr("src","assests/panel9_01.gif");
//            panelNinetracker = false;
//        }
//    });
    
     $("#panelTen").click(function(){
        if (panelTentracker === false){
            $(this).attr("src","assests/panel10_02.gif");
            panelTentracker = true;
        } else {
            $(this).attr("src","assests/panel10.gif");
            panelTentracker = false;
        }
    });
    
//     $("#panelEleven").click(function(){
//        if (panelEleventracker === false){
//            $(this).attr("src","assests/panel11_02.gif");
//            panelEleventracker = true;
//        } else {
//            $(this).attr("src","assests/panel11.gif");
//            panelEleventracker = false;
//        }
//    });
    
     $("#panelTwelve").click(function(){
        if (panelTwelvetracker === false){
            $(this).attr("src","assests/panel12_01.gif");
            panelTwelvetracker = true;
        } else {
            $(this).attr("src","assests/panel12.gif");
            panelTwelvetracker = false;
        }
    });
    
//     $("#panelThirteen").click(function(){
//        if (panelThirteentracker === false){
//            $(this).attr("src","assests/panel13.jpg");
//            panelThirteentracker = true;
//        } else {
//            $(this).attr("src","assests/panel13.gif");
//            panelThirteentracker = false;
//        }
//    });
    
    $("#panelTwoCycling").click(function(){
        if (cycler < 3) {
            cycler += 1;
            $(this).attr("src", "panel2/"+cycler+".gif");
        } else {
            cycler = 1;
            $(this).attr("src", "panel2/"+cycler+".gif");
        }
        
    });
    
    $("#panelNineCycling").click(function(){
        if (cycler < 4) {
            cycler += 1;
            $(this).attr("src", "panel9/"+cycler+".gif");
        } else {
            cycler = 1;
            $(this).attr("src", "panel9/"+cycler+".gif");
        }
        
    });
    
    $("#panelElevenCycling").click(function(){
        if (cycler < 3) {
            cycler += 1;
            $(this).attr("src", "panel11/"+cycler+".gif");
        } else {
            cycler = 1;
            $(this).attr("src", "panel11/"+cycler+".gif");
        }
        
    });
    
    $("#larkcontrol").click(function(){
        
        if (larkPlaying === false) {
            $("#larksound").trigger("play");
            larkPlaying = true;
            $("#larkcontrol").attr("src","assests/on.png");
            
        } else {
            $("#larksound").trigger("pause");
            larkPlaying = false;
            $("#larkcontrol").attr("src","assests/off.png");
        }
        
    });
    
});