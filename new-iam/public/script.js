console.log("script.js");
$(document).on("click","#nav_trigger", function(){
	console.log("is-visible");
	$(".nav").addClass("is-visible");

});

$(document).on("click","#nav_disappear", function(){
	console.log("gone");
	$(".nav").removeClass("is-visible");

});