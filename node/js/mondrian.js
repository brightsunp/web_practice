$(document).ready(function() {
	var paint = 'white';

	$('.color').on('click', function() {
		paint = $(this).css('background-color');
	});

	$('.box1, .box2, .box3, .box4').on('click', function() {
		$(this).css('background-color', paint);
	});
})