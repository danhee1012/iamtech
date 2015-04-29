$(document).ready(function() {
	$('.nav').hover(
		function() {
			$(this).parent("body").removeClass("collapsed");
			$(this).siblings('.content').css("margin-left","200px")
		},
		function() {
			$(this).parent("body").addClass("collapsed");
			$(this).siblings('.content').css("margin-left","50px")
		}
	);
});