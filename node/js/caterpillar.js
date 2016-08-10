$(document).ready(function() {
	makeSpots(20);
	var mouseX = 0, mouseY = 0;

	$(document).on('mousemove', function(e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
	});

	document.addEventListener('touchmove', function(e) {
		e.preventDefault();

		mouseX = e.pageX;
		mouseY = e.pageY;
	}, false);

	for (var i = 0; i < 20; i++) {
		moveSpots('#spot_' + i, randomInt(8, 50));
	}

	function makeSpots(num) {
		for (var i = 0; i < num; i++) {
			var size = randomInt(3, 63);
			var color = randomColor();

			var spot = $('<div class="spot" id="spot_' + i + '"></div>');
			$('#container').append(spot);
			$('#spot_' + i).css({'background-color': color, 'height': size, 'width': size});
		}
	}

	function moveSpots(elm, speed) {
		var x = 0, y = 0;
		setInterval(function() {
			x += (mouseX - x) / speed;
			y += (mouseY - y) / speed;

			$(elm).css({'left': x, 'top': y});
		}, 30);
	}

	function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	}
});