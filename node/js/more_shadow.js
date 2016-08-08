(function($){
	// jQuery定义函数的方法
	$.fn.disableSelection = function() {
		return this
				.attr('unselectable', 'on')
				.css('user-select', 'none')
				.on('selectstart', false);
	};
})(jQuery);

$(document).ready(function() {
	$('.box_shadow').on('click', function() {
		var current = $(this).css('box-shadow');

		var a = current.split('px');
		var blur = a[a.length - 3];
		var spread = a[a.length - 2];
		var newBlur = parseInt(blur) + 1;
		var newSpread = parseInt(spread) + 3;

		$(this).css('box-shadow', '0px 0px ' + newBlur + 'px ' + 
			'newSpread' + 'px ' + 'rgba(-1, 1, 0, 0.35)');
	});

	$('.text_shadow').on('click', function() {
		var current = $(this).css('text_shadow');

		var a = current.split('px');
		var blur = a[a.length - 2];
		var vert = a[a.length - 3];
		var newBlur = parseInt(blur) + 1;
		var newVert = parseInt(vert) + 1;

		$(this).css('text_shadow', '1px ' + 'newVert' +'px ' + 
			'newBlur' + 'px ' + 'rgb(-1, 1, 0)');
	});

	$('body').disableSelection();
});