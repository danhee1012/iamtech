/*
script.js
IAM Main Website Ver 2
Tech Team Director: Christopher Choi
UI/UX Designer: Sarah Minkyoung Cho
Web Dvgtggtgteveloper: Lijin Guo
*/
$(document).ready(function() {
	//nav bar appears when clicked on nav_trigger button
	$(document).on("click",".nav_trigger", function(){
		$(".nav2").addClass("is-visible");
		console.log('hey');
	});

	// nav bar disappears when clicked on nav_disappear button
	$(document).on("click","#nav_disappear", function(){
		$(".nav2").removeClass("is-visible");
	});

	// nav bar disappears when redirected to other routes
	$(document).on("click", ".nav2_button", function() {
		$(".nav2").removeClass("is-visible");
	});
	
	$(document).on("click",".nav_trigger", function(){
		$(".nav").addClass("is-visible");
		console.log('hey');
	});

	// nav bar disappears when clicked on nav_disappear button
	$(document).on("click","#nav_disappear", function(){
		$(".nav").removeClass("is-visible");
	});

	// nav bar disappears when redirected to other routes
	$(document).on("click", ".nav_button", function() {
		$(".nav").removeClass("is-visible");
	});

	// currently selected about on "about route"
	var about_curr_name = "aboutiam";
	
	// change the content on the right of "about route" when clicked on team name on the left
	$(document).on("click", "#about_button a", function() {
		$("#about_"+about_curr_name).css("visibility","hidden");
		$("#about_"+about_curr_name).css("display","none");
		var name = $(this).attr('id').split("_")[2];
		about_curr_name = name;
		$("#about_"+name).css("visibility","visible");
		$("#about_"+name).css("display","block");
	});
		
	// currently selected team on "team route"	
	var team_curr_name = "ae" 
	
	// change the content on the right of "team route" when clicked on team name on the left
	$(document).on("click","#team_button a", function() {
		$("#team_"+team_curr_name).css("visibility","hidden");
		$("#team_"+team_curr_name).css("display","none");
		var name = $(this).attr('id').split("_")[2];
		team_curr_name = name;
		$("#team_"+name).css("visibility","visible");
		$("#team_"+name).css("display","block");
	});
	
	// currently selected career on "career route"
	var career_curr_name = "ae" 

	// change the content on the right of "career route" when clicked on team name on the left
	$(document).on("click","#career_button a", function() {
		$("#career"+career_curr_name).css("visibility","hidden");
		$("#career_"+career_curr_name).css("display","none");
		var name = $(this).attr('id').split("_")[2];
		career_curr_name = name;
		$("#career_"+name).css("visibility","visible");
		$("#career_"+name).css("display","block");
	});

	var ae_curr_position = "ae_ae";
	// show the description of selected position and hide others
	$(document).on("click",".position_list > li", function() {
		var name = $(this).attr('id');
		if(ae_curr_position !== name)
		{
			console.log(name);
			$('#'+ae_curr_position).children(".position_content").css("display","none");
			ae_curr_position = name;
			$('#'+ae_curr_position).children(".position_content").css("display","block");
		}
	});
});