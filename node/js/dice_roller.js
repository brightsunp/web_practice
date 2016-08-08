$(document).ready(function() {
	$('.pt4').hide();
	pressBtn('#shaker');

	$('#shaker').on('click', function() {
		$('#title').text('Shake, shake, shake...');
		$('#title').addClass('shake');

		setTimeout(function() {
			var roll1 = makeRoll('#dice1');
			var roll2 = makeRoll('#dice2');
			$('#title').removeClass('shake');

			if (roll1 + roll2 == 2) {
				$('#title').text('Snake eyes!');
			} else {
				$('#title').text(roll1 + roll2);
			}
		}, 1000);
	});

	function pressBtn(button) {
		$(button).on('mousedown', function() {
			$(this).removeClass('btn_up');
			$(this).addClass('btn_down');
		});
		$(button).on('mouseup', function() {
			$(this).removeClass('btn_down');
			$(this).addClass('btn_up');
		});
	}

	function makeRoll(diceId) {
		var roll = Math.floor(Math.random() * 6 + 1);
		var all = diceId + ' .point'
		var p1 = diceId + '_1';
		var p2 = diceId + '_2';
		var p3 = diceId + '_3';
		var p4 = diceId + '_4';
		var p5 = diceId + '_5';
		var p6 = diceId + '_6';
		var p7 = diceId + '_7';

		switch(roll) {
			case 1: {
				$(all).hide();
				$(p4).show();
				break;
			}
			case 2: {
				$(all).hide();
				$(p1 + ', ' + p7).show();
				break;
			}
			case 3: {
				$(all).hide();
				$(p1 + ', ' + p4 + ', ' + p7).show();
				break;
			}
			case 4: {
				$(all).show();
				$(p2 + ', ' + p4 + ', ' + p6).hide();
				break;
			}
			case 5: {
				$(all).show();
				$(p2 + ', ' + p6).hide();
				break;
			}
			case 6: {
				$(all).show();
				$(p4).hide();
				break;
			}
		}

		return roll;

	}
});