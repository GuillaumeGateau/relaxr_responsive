$(".readmore").click(readMoreStuff);
$(".readless .hide").click(readLessStuff);

function readMoreStuff() {
	$(this).toggle();
	$(this).next().toggle();
	$(this).next().next().toggle();
}

function readlessStuff() {
	$(this).toggle();
	$(this).prev().toggle();
	$(this).prev().prev().toggle();
}