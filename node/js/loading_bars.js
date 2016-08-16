(function($) {
    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
})(jQuery);

$(document).ready(function() {
	var count = 0;
	var container = $('#main_container');
	var message = $('#message');

	$('body').disableSelection();
	$('body').on('click', function(e) {
		if (count == 0) {
			container.append('<img class="throbber" id="bar_0" src="images/throbber_1.gif" />');
			$('#bar_0').css('margin-top', '50px');
			count++;

			setTimeout(function() {
				message.text('That\'s odd. Try clicking somewhere else.');
			}, 1500);
		} else if (count == 1) {
			makeThrobber(e);
			setTimeout(function() {
				message.text('So weird! Maybe try the other side?');
			}, 1000);
		} else if (count == 2) {
			makeThrobber(e);
			setTimeout(function() {
				message.text('Welp. I got nothing else for you. You\'re on your own now.');
			}, 1000);
			setTimeout(function() {
				message.fadeOut('2000');
			}, 4000);
		} else {
			makeThrobber(e);
		}
	});

	function makeThrobber(e) {
		var id = 'bar_' + count;
		var gifIndex = Math.round(Math.random() * 13);
		var format = gifIndex == 13 ? '.png': '.gif';
		var throbber = '<img class="throbber" id="' + id + '" src="images/throbber_' + 
						gifIndex + format + '" />';

		container.append(throbber);
		if (gifIndex == 13) {
			$('#' + id).addClass('spin');
		}
		$('#' + id).css({position: 'absolute', 
						top: e.pageY, 
						left: e.pageX});

		count++;
	}
});