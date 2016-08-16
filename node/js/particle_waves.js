$(document).ready(function() {
	var numOfCards = _.range(1000);

	_.each(numOfCards, function(position) {
		$('div', {
			id: 'card' + position, 
			class: 'card'
		}).on('click', function(event) {
			$(this).off('click');
			cascade(event, position);
		}).appendTo('#main_container');
	});

	$('#main_container').append('<br class="clear" />');

	function cascade(event, position) {
		flip(position);

		setTimeout(function() {
			$('#card' + (position + 1)).trigger('click');
			$('#card' + (position - 1)).trigger('click');
			$('#card' + (position - 40)).trigger('click');
			$('#card' + (position + 40)).trigger('click');
		}, 50);

		setTimeout(function() {
			$('#card' + position).on('click', function(evevt) {
				$(this).off('click');
				cascade(evevt, position);
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