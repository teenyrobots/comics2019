/*This is the jQuery for Obergefell Family Tree*/

/*Make card glow when cursor hovers over it*/
$(document).ready(function(){
	$(".CenterImage").hover(function(){
			$(".CenterImage").attr("src", "assets/ObergefellCard.gif");
			}, function(){
		$(".CenterImage").attr("src", "assets/Obergefell.jpg");
	});
});