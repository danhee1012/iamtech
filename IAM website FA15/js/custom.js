$(document).ready(function() {
	$(this).parent("body").animate(function() {
		$(this).removeClass("collapsed");
	}, 3000);

	$(this).siblings('.content').css("margin-left","50px")

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

	$('#about1').click(function() {
		$(this).addClass("list-active");
		$(this).siblings('#about2').removeClass("list-active");
		$(".about-content-right-1").css("display","inline-block");
		$(".about-content-right-2").css("display","none");
	});
	$('#about2').click(function() {
		$(this).addClass("list-active");
		$(this).siblings('#about1').removeClass("list-active");
		$(".about-content-right-2").css("display","inline-block");
		$(".about-content-right-1").css("display","none");
	});

	$('.career-list').click(function() {
		$(this).siblings('.career-list').removeClass("list-active");
		$(this).addClass("list-active");
		var temp = $(this).get(0).id;
		var num = temp.charAt(temp.length-1);
		console.log(num);
		for(var i = 0; i < 10; i++)
		{
			if (num !== (String(i)))
			{
				$('.career-content-right-'+i).addClass("right-display-none");
				console.log("Hey");
			}
		}
		$(".career-content-right-"+num).removeClass("right-display-none");
	});
});