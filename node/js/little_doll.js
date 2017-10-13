$(document).ready(function() {
	var health = 10;
	var love = 10;
	var happiness = 10;

	$('.btn_feed').on('click', function() {
		health += randomInt(2, 4);

		$('.mouth').addClass('feed');
		setTimeout(function() {
			$('.mouth').removeClass('feed');
		}, 1000);

		decrementStats('feed');
	});

	$('.btn_hug').on('click', function() {
		love += randomInt(2, 4);

		$('#body').addClass('hug');
		setTimeout(function() {
			$('#body').removeClass('hug');
		}, 700);

		decrementStats('hug');
	});

	$('.btn_play').on('click', function() {
		happiness += randomInt(2, 4);

		$('#doll_container').addClass('play');
		setTimeout(function() {
			$('#doll_container').removeClass('play');
		}, 1000);

		decrementStats('play');
	});

	function decrementStats(action) {
		if (action == 'feed') {
			love -= randomInt(1, 2);
			happiness -= randomInt(1, 2);
		} else if (action == 'hug') {
			health -= randomInt(1, 2);
			happiness -= randomInt(0, 2);
		} else {
			health -= randomInt(1, 2);
			love -= randomInt(1, 2);
		}

		updateStats();
		styleDoll();
	}

	function updateStats() {
		if (health <= 0 || love <= 0 || happiness <= 0) {
			$('#bad_container').show();
		} else {
			$('#health').text('Health: ' + health);
			$('#love').text('Love: ' + love);
			$('#happiness').text('Happiness: ' + happiness);
		}
	}

	function styleDoll() {
		if (health >= 23) {
    		$('#body').css({top: 50, left:50, height:350, width:415});
    	} else if (health >= 18) {
    		$('#body').css({top: 100, left:100, height:250, width:300});
    	} else if (health >= 12) {
    		$('#body').css({top: 125, left:130, height:200, width:240});
    	} else {
    		$('#body').css({top: 150, left:160, height:150, width:180});
    	}

    	if ((love < 6 )|| (happiness < 6) || (health < 6)) {
    		$('.mouth').addClass('frown');
    		$('.mouth').removeClass('smile');
    		$('.mouth').removeClass('joy');
    	} else if (happiness >= 14) {
    		$('.mouth').addClass('joy');
    		$('.mouth').removeClass('smile');
    	} else if (happiness < 14 && happiness >= 6) {
    		$('.mouth').addClass('smile');
    		$('.mouth').removeClass('joy');
    		$('.mouth').removeClass('frown');
    	} 

    	if (love >= 23) {
    		$('#body').css({backgroundColor: '#d6003d'});
    	} else if (love >=18) {
    		$('#body').css({backgroundColor: '#ff749c'});
    	} else if (love >= 14) {
    		$('#body').css({backgroundColor: '#ff749c'});	    		
    	} else if (love < 14 && love >= 6) {
    		$('#body').css({backgroundColor: '#FFFFFA'});	    			    		
    	} else {
    		$('#body').css({backgroundColor: '#d8e6d4'});	    			    			    		
    	}
    }

	function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
});