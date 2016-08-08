/*
window.onload = function() {
	var btn = document.getElementById("button");
	btn.onclick = function() {
		document.body.css('background-color', getRandomColor());
	};

	function getRandomColor() {
		return '#' + Math.floor(Math.random()*16777215).toString(16);
	}
}
*/

$(document).ready(function() {
	function randomColor() {
		return '#' + Math.random().toString(16).slice(2,8);
	};

	$('#button').on('click', function() {
		$('body').css('background-color', randomColor());
	});
});

