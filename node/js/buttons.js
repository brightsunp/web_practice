$(document).ready(function() {
	$('button').on('click', function() {
		$(this).hide();
		nextButton();
	});

	function nextButton() {
		var btn = randomInt(0, 5);

		if (btn == 5) {
			$('.btn_5').css({top: randomInt(50, 450), 
							left: randomInt(50, 800), 
							backgroundColor: randomColor(), 
							height: randomInt(30, 100), 
							width: randomInt(80, 200)})
						.show();
		} else {
			$('.btn_' + btn).css({top: randomInt(50, 450), 
								left: randomInt(50, 800)})
							.show();
		}
	}

	function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	}
});