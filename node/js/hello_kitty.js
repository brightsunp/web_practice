$(document).ready(function() {
	$('.fish').draggable({});
	$('#head_container').droppable({
		drop: function(event, ui) {
			eatAnimation();
			$('.pupil').animate({top: '15px', 
								left: '15px', 
								height: '30px', 
								width: '30px'}); 
		},
		over: function(event, ui) {
			$('.pupil').animate({top: '3px', 
								left: '3px', 
								height: '54px', 
								width: '54px'}); 
		}
	});

	setTimeout(function() {
		$('#fish_text').fadeOut('slow');
	}, 2000);

	$('.head').on('click', function() {
		$('#text_bubble').show();
		$('#bubble_text').text('Purr...');
		$('#kitty_container').addClass('purr');

		setTimeout(function() {
			$('#kitty_container').removeClass('purr');
			$('#text_bubble').fadeOut('500');
		}, 3000);
	});

	$('.paw').on('click', function() {
		var elm = this;
		$('#text_bubble').fadeOut('500');
		$(elm).addClass('paw_animation');
		$('.mouth').animate({width: '20px', 
							height: '10px', 
							backgroundColor: '#ab0014', 
							left: '90px'});

		setTimeout(function() {
			$(elm).removeClass('paw_animation');
			$('.mouth').animate({width: '12px', 
								height: '3px', 
								backgroundColor: '#202123', 
								left: '94px'});
		}, 1500);
	});

	$('.ear').on('click', function() {
		$('#text_bubble').show();
		$('#bubble_text').text('Meow!');

		setTimeout(function() {
			$('#text_bubble').fadeOut('500');
		}, 2000);
	});

	function eatAnimation() {
		$('.eye').addClass('eat_eyes');
		$('#nose_container').addClass('eat_nose');
		$('.mouth').addClass('eat_mouth');
		$('.fish').fadeOut('500');
		$('#text_bubble').show();
		$('#bubble_text').text('GULP!');

		setTimeout(function() {
			$('.eye').removeClass('eat_eyes');
			$('#nose_container').removeClass('eat_nose');
			$('.mouth').removeClass('eat_mouth');
			$('#text_bubble').fadeOut('500');
			$('.fish').css({top: '0', left: '0'}).show();
		}, 1000);
	}
});