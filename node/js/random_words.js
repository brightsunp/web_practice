$(document).ready(function() {
	var words = getWordsArray();
	var ifStart = true;
	var start;

	startWords();

	$('.btn').on('click', function() {
		if (ifStart) {
			stopWords();
		} else {
			startWords();
		}
	});

	function startWords() {
		start = setInterval(function() {
					ifStart = true;
					$('.btn').val('Stop').removeClass('start').addClass('stop');
					$('#word_container').text(words[Math.floor(Math.random() * words.length)]);
				}, 100);
	}

	function stopWords() {
		ifStart = false;
		$('.btn').val('Start').removeClass('stop').addClass('start');
		clearInterval(start);
	}

	function getWordsArray() {
		var array;

		$.ajax({
			type: 'GET', 
			url: 'words.html', 
			async: false, 
			success: function(data) {
				array = data.split('\n');
			}
		});

		return array;
	}
});