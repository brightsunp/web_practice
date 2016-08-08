$(document).ready(function() {
	var animations = ['shake',
					  'hop',
					  'spin',
					  'grow',
					  'hooray'];

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$('.sushi_box').on('click', function() {
		var animation = animations[getRandomInt(0,4)];

		$(this).addClass(animation);

		setTimeout(function() {
			$(this).removeClass(animation);
		}, 2100);
	});
	
});