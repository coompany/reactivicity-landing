(spectrum = function(){
	var colors = [
		'#8F0000',
		'#009900',
		'#CCFF66',
		'#FF6600',
		'#3399FF',
		'#66FFCC'];
	var hue1 = colors[(Math.floor(Math.random() * colors.length))];

	$('.jumbo h1 a').css('border-bottom-color', hue1);
})();
window.setInterval(spectrum, 1000);
