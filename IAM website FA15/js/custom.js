$(document).ready(function() {
	$('.nav').hover(
		function() {
		$(this).parent("body").removeClass("collapsed");
		},
		function() {
		$(this).parent("body").addClass("collapsed");
		}
	);
});