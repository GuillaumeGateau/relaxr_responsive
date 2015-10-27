$(document).ready(function() {

$(".readmore").click(readMoreStuff);
$(".readless").click(readLessStuff);
$(".learnmore").click(learnMoreStuff);

function readMoreStuff() {
	event.preventDefault();
	$(this).toggle();
	$(this).next().toggle();
	$(this).next().next().toggle();
}

function learnMoreStuff() {
	event.preventDefault();
	$(this).toggle();
	$(this).next().toggle();	
}

function readLessStuff() {
	event.preventDefault();
	$(this).toggle();
	$(this).prev().toggle();
	$(this).prev().prev().toggle();
}

});