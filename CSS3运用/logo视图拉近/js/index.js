$(function(){
	
	//点击动画
var bodyclick=function(){
	var tl = anime.timeline({
	  easing: 'easeOutExpo',
	  duration: 750
	});
	
	// 增加子项
	tl
	.add({
	   targets: '.box',
	   translateZ: [-2008,-300],
	    duration: 10000
	})
	.add({
	  targets: '.logo',
	  opacity:[0,1],
	  rotateX:[88,0],
	  translateZ: [-500,10],
	  duration: 2000
	},'-=8000');

}
	$('body').click(function(){
		$('.yuan1').css({"opacity":1});
		$('.yuan2').css({"opacity":1});
		bodyclick();
	})
})