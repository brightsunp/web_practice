(function($){
    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
})(jQuery);

$(document).ready(function() {
	var canvas = document.getElementById('canvas'), 
		draw = canvas.getContext('2d'), 
		colorToggle = 'solid',  
		balls = [];

	var h = window.innerHeight - 25, 
		w = window.innerWidth;
	canvas.height = h;
	canvas.width = w;

	$('body').disableSelection();
	$('#canvas').on('click', function(e) {
		var x = e.pageX - canvas.offsetLeft;
		var y = e.pageY - canvas.offsetTop;

		showBalls(x, y);
	});
	$('#solid').on('click', function(e) {
		e.stopPropagation();
		colorToggle = 'blink';
	});
	$('#blink').on('click', function(e) {
		e.stopPropagation();
		colorToggle = 'solid';
	});

	window.setInterval(clock, 30);

	function Balls(x1, y1, x2, y2) {
		this.x1 = x1;
		this.x2 = -x2;
		this.y1 = y1;
		this.y2 = -y2;

		this.move = function() {
			if (this.x1 > w - 10) {
				this.x1 = w - 10;
			} else if (this.x1 < 10) {
				this.x1 = 10;
			}

			if (this.y1 > h - 10) {
				this.y1 = h - 10;
			} else if (this.y1 < 10) {
				this.y1 = 10;
			}

			this.x1 += this.x2;
			this.y1 += this.y2;

			draw.beginPath();
			draw.arc(this.x1, this.y1, 5, 0, Math.PI * 2);
			draw.closePath();
			draw.fill();
		};
	}

	function showBalls(x, y) {
		balls.push(new Balls(x, y, Math.random() * 5, Math.random() * 5));
	}

	function clock() {
		draw.clearRect(0, 0, w, h);

		if (colorToggle == 'solid') {
			draw.fillStyle = '#eee';
		} else {
			draw.fillStyle = randomColor();
		}

		for (var i = 0; i < balls.length; i++) {
			balls[i].move();
		}
	}

	function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	}
})