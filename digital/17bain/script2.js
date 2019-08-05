/* script for cafe comic */

$(document).ready(function(){

	$(".foundPopup").hide();

var firstkeyfound = false;
var secondkeyfound = false;
var thirdkeyfound = false;
var fourthkeyfound = false;
var fifthkeyfound = false;


/*first key */
$("#firstKey").click(function(){
	$("#firstKey").attr("src","fairypanels/fairypanel1-12.gif");
	firstkeyfound = true;
	allkeysfound();
})

/*second key*/			
$("#secondKey").click(function(){
	$("#secondKey").attr("src","fairypanels/fairypanel2-8.gif");
	secondkeyfound = true;
	allkeysfound();
})
	
/*third key*/	
$("#thirdKey").click(function(){
	$("#thirdKey").attr("src","fairypanels/fairypanel3-13.gif");
	thirdkeyfound = true;
	allkeysfound();
})
	
/*fourth key*/	
$("#fourthKey").click(function(){
	$("#fourthKey").attr("src","fairypanels/fairypanel4-3.gif");
	fourthkeyfound = true;
	allkeysfound();
})
	
/*fifth key*/	
$("#fifthKey").click(function(){
	$("#fifthKey").attr("src","fairypanels/fairypanel5-14.gif");
	fifthkeyfound = true;
	allkeysfound();
})
	
	function allkeysfound() {
		if (firstkeyfound == true && secondkeyfound == true && thirdkeyfound == true && fourthkeyfound == true && fifthkeyfound == true) {
			console.log("write some code for what happens when all keys are found");
			$(".foundPopup").show();
					
	}
}

})

