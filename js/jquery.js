$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});


$(document).ready(function () {
$('iframe[src*="youtube.com"]').wrap('<div class="youtubecontent" />');
});
