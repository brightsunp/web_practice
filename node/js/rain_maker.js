$(document).ready(function() {
	var curDrops = 'rain';

	makeDrop(150, randomInt(35, 280));
	makeRain(150, 150);

	$('#water_btn').on('click', function() {
		$('.drop').removeClass(curDrops).addClass('rain');
		$('.drop').html('');
		curDrops = 'rain';
	});

	$('#love_btn').on('click', function() {
		$('.drop').removeClass(curDrops).addClass('heart');
		$('.drop').html('');
		curDrops = 'heart';
	});

	$('#bacon_btn').on('click', function() {
		$('.drop').removeClass(curDrops);
		insertBacon(150);
		curDrops = 'bacon';
	});

	function insertBacon(num) {
		if (num > 0) {
			$('#drop_' + num).html('<img src="images/bacon_' + randomInt(0, 2) + '.png" />');
			num--;
			insertBacon(num);
		}
	}

	function makeRain(num, speed) {
		if (num > 0) {
			setTimeout(function() {
				$('#drop_' + randomInt(1, num)).addClass('animate');
				num--;
				makeRain(num, speed);
			}, speed);
		}
	}

	function makeDrop(num, offset) {
		if (num > 0) {
			var drop = '<div class="drop rain" id="drop_' + num + '"></div>';

			$('#drop_container').append(drop);
			$('#drop_' + num).css('left', offset);
			num--;
			makeDrop(num, randomInt(60, 280));
		}
	}

	function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
});