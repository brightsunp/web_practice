$(document).ready(function() {
	var numOfCards = _.range(1000);

	_.each(numOfCards, function(pos) {
		$('<div>', {
			id: 'card' + pos, 
			class: 'card'
		}).on('click', function(event) {
			$(this).off('click');
			cascade(event, pos);
		}).appendTo('#main_container');
	});

	$('#main_container').append('<br class="clear" />');

	function cascade(event, pos) {
		flip(pos);

		setTimeout(function() {
			$('#card' + (pos + 1)).trigger('click');
			$('#card' + (pos - 1)).trigger('click');
			$('#card' + (pos - 40)).trigger('click');
			$('#card' + (pos + 40)).trigger('click');
		}, 50);

		setTimeout(function() {
			$('#card' + pos).on('click', function(evevt) {
				$(this).off('click');
				cascade(evevt, pos);
			});
		}, 800);
	}

	function flip(id) {
		var cardId = '#card' + id;
		$(cardId).addClass('wave');

		setTimeout(function() {
			$(cardId).removeClass('wave');
		}, 400);
	}
});