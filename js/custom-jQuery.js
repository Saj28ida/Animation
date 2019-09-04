$("document").ready(function(){

	$("#start").click(function(){
		$("#clock").css({"animation":"stopwatch 2s infinite"});
	});

	$("#stop").click(function(){
		$("#clock").css({"animation-play-state":"paused"});
	});




});
