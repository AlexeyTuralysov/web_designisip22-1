$(document).ready(function(){
	$(".main_gal").click(function() {
		var dir = $(this).attr("src");
		$('#image').hide();
		$('#image').fadeIn('fast');
		$('#image').attr("src",dir);
	});
});