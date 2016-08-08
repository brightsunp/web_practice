$(document).ready(function() {
	var rock = 'images/rock.png';
	var paper = 'images/paper.png';
	var scissors = 'images/scissors.png';
	var choices = ['rock', 'paper', 'scissors'];
	var userChoice, compChoice;

	$('.btn').on('click', clickBtn);
	
	function clickBtn() {
		userChoice = this.id;
		compChoice = choices[Math.floor(Math.random() * 3)];

		$('.result').hide();
		$('.fist').show();
		countDown();
	}

	function countDown() {
		var i = 3;
		count();

		function count() {
			$('.hand').addClass('shake');
			$('#score_container').text(i);

			if (i == 0) {
				displayResult();
			} else {
				--i;
				setTimeout(count, 500);
			}
		}
	}

	function displayResult() {
		$('.hand').removeClass('shake');
		$('#score_container').text('Result!')
		$('.fist').hide();
		$('.left_' + compChoice).show();
		$('.right_' + userChoice).show();

		setTimeout(function() {
			if (userChoice == compChoice) {
				$('#score_container').text('Tie!');
			} else if ((userChoice == 'rock' && compChoice == 'scissors') ||
						(userChoice == 'scissors') && compChoice == 'paper' ||
						(userChoice == 'paper' && compChoice == 'rock')) {
				$('#score_container').text('You Win!');
			} else {
				$('#score_container').text('You Lose!');
			}
		}, 400);
	}
});