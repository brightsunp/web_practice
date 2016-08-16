$(document).ready(function() {
	$('#start').on('click', function() {
		var clicks = 0;

		$('#index_container').hide();
		$('#counter').show();
		$('body').css('cursor', 'pointer');
		$('body').disableSelection();
		$('.spinner').addClass('spinner_animation');
		$('.filler').addClass('filler_animation');
		$('.mask').addClass('mask_animation');

		$('body').on('click', function() {
			clicks++;
			$('#counter').text(clicks);
		});

		setTimeout(function() {
			var clickStr = clicks == 1 ? 'click': 'clicks';
			var cps = Math.round((clicks / 30) * 100) / 100;
			var cpsStr = cps == 1 ? 'click': 'clicks';

			$('body').css('cursor', 'auto');
			$('h1').text('Time\'s Up!');
			$('h2').text('You got ' + clicks + ' ' + clickStr + '.');
			$('#cps').text('That\'s ' + cps + ' ' + cpsStr + ' per second!');
			$('h3').html('<a href="0803.html">Try Again?</a>');

			$('button').hide();
			$('#index_container').show();
			$('#counter').hide();
		}, 30000);
	});
});

(function($) {
	$.fn.disableSelection = function() {
		return this
             .attr('unselectable', 'on')
             .css('user-select', 'none')
             .on('selectstart', false);
	}
})(jQuery);