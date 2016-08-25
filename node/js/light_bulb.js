(function($){
    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
})(jQuery);

$(document).ready(function() {
	var mouse;
	var chain = $('#chain_container');
	var state = 'on';

	setTimeout(function() {
		$('#hint').fadeOut(1500);
	}, 2000);

	$('body').disableSelection();

	chain.draggable({
		start: function(e) {
			mouse = e.pageY;
		}, 
		stop: function(e) {
			lightSwitch(e);
			chain.animate({top: '-200px'}, 100);
		}
	})

	function lightSwitch(e) {
		if (e.pageY >= mouse + 100) {
			$('body').addClass(state);
			$('#bulb_' + state).show();
			$('#chain_' + state).show();
			
			if (state == 'on') {
				state = 'off';
			} else {
				state = 'on'
			}
			$('body').removeClass(state);
			$('#bulb_' + state).hide();
			$('#chain_' + state).hide();
		}
	}
});