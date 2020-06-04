$(function(){
	'use strict';
	var winh=$(window).height(),
		uberh=$('.uber').innerHeight(),
		navh=$('.navbar').innerHeight();
$('.slider,.carousel-item').height(winh - (uberh + navh));	
})