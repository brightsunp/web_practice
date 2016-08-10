$(document).ready(function() {
	$('form').on('submit', function(event) {
		event.preventDefault();

		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var year, month, day;
		var bday = $('#bday').val();

		if (bday == 0) {
			$('.party').text('No Birthday? No Parties for You!');
		} else if (bday.indexOf('/') >= 0) {
			birthday = bday.split('/');
			year = birthday[0];
			month = birthday[1] - 1;
			day = birthday[2];
		} else {
			birthday = bday.split('-');
			year = birthday[0];
			month = birthday[1] - 1;
			day = birthday[2];
		}

		var btime = $('#btime').val().split(':');
		var hour = btime[0];
		var min = btime[1];

		var birth_day = new Date(year, month, day);
		var birth_time = new Date(year, month, day, hour, min);
		var today = new Date();
		var age = today.getFullYear() - year;

		if (today.getMonth() < month || (today.getMonth == month && today.getDate() < day)) {
			age--;
		}

		var li_days = Math.floor((today - birth_day) / (24 * 60 * 60 * 1000));
		var li_mins = Math.floor((today - birth_day) / (60 * 1000));
		var tenKD = birth_day.getTime() + 8.64e11;
		var li_10kD = getPartyDate(tenKD);
		var li_20kD = getPartyDate(tenKD * 2);
		var milM = birth_time.getTime() + 6e10;
		var li_milM = getPartyDate(milM);
		var li_10milM = getPartyDate(milM * 10);
		var li_50milM = getPartyDate(milM * 50);
		var li_1bilS = getPartyDate(birth_time.getTime() + 1e12);

		if (today.getMonth() == month && today.getDate() == day) {
			$('.party').text('Today\'s your birthday! PARTY TIME!');
		} else if (today.toDateString() == (li_10kD || li_20kD || li_milM ||
					 li_10milM || li_50milM || li_1bilS)) {
			$('.party').text('Looks Like We\'ve Got a Party Here!');
		} else {
			$('.party').text('Boo! No Parties Today.');
		}

		$('.date').text('Your birthday is ' + months[month] + ' ' + day);
		if (age <= 1) {
			$('.years').text('You are ' + age + ' year old.');
		} else {
			$('.years').text('You are ' + age + ' years old.');
		}
		if (li_days <= 1) {
			$('.days').text('You are ' + li_days + ' day old.');
		} else {
			$('.days').text('You are ' + li_days + ' days old.');
		}
		$('.mins').text('You are ' + li_mins + ' minutes old.');

		$('.tenKD').text('Your 10,000th day is ' + li_10kD + '.');
		$('.twentyKD').text('Your 20,000th day is ' + li_20kD + '.');
		$('.milM').text('Your one millionth minute is ' + li_milM + '.');
		$('.tenMilM').text('Your ten millionth minute is ' + li_10milM + '.');
		$('.fiftyMilM').text('Your fifty millionth minute is ' + li_50milM + '.');
		$('.oneBilS').text('Your one billionth second is ' + li_1bilS + '.');
	})

	function getPartyDate(time) {
		var partyDate = (new Date(time)).toDateString();
		return partyDate;
	}
});