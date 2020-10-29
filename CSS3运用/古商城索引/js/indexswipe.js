//按钮动画
var backplay = function() {
	// 使用默认参数创建时间轴
	var backgo = anime.timeline({
		easing: 'easeOutExpo',
		duration: 750
	});

	// 增加子项
	backgo
		.add({
			targets: '.backbg',
			opacity: [0, 1],
			duration: 1000

		})
		.add({
			targets: '.backdianleft',
			opacity: [0, 1],
			left: [135, 7]
		})
		.add({
			targets: '.backdianright',
			opacity: [0, 1],
			right: [135, 7]
		}, '-=750')
		.add({
			targets: '.backtext',
			translateY: [150, 0],
		});

}


//二级列表动画一
var showlist = function() {
	var showlistinit = anime.timeline({
		easing: 'easeOutExpo',
		duration: 800
	});

	// 增加子项
	showlistinit
		.add({
			targets: '.lione',
			rotateY: [90, 0],
		})
		.add({
			targets: '.litwo',
			rotateY: [90, 0],
		}, '-=500')
		.add({
			targets: '.lithree',
			rotateY: [90, 0],
		}, '-=500')
		.add({
			targets: '.lifour',
			rotateY: [90, 0],
		}, '-=500')
		.add({
			targets: '.lifive',
			rotateY: [90, 0],
		}, '-=500')
		.add({
			targets: '.lisix',
			rotateY: [90, 0],
		}, '-=500')
		.add({
			targets: '.liseven',
			rotateY: [90, 0],
		}, '-=500');
}
var showlisttwo = function() {
	var showlistinit = anime.timeline({
		easing: 'easeOutExpo',
		duration: 800,

	});

	// 增加子项
	showlistinit
		.add({
			targets: '.lifive',
			rotateY: [90, 0],
		})
		.add({
			targets: '.lisix',
			rotateY: [90, 0],
		}, '-=500')
		.add({
			targets: '.liseven',
			rotateY: [90, 0],
		}, '-=500')
		.add({
			targets: '.lieight',
			rotateY: [90, 0],
		}, '-=500')
		.add({
			targets: '.linine',
			rotateY: [90, 0],
		}, '-=500')
		.add({
			targets: '.liten',
			rotateY: [90, 0],
		}, '-=500')
		.add({
			targets: '.lieleven',
			rotateY: [90, 0],
		}, '-=500');
}

//二级图文详情动画
var imgplay = function(x, y) {

	var imglistplay = anime.timeline({
		easing: 'easeOutExpo',
		duration: 750,

	});

	// 增加子项
	imglistplay
	.add({
		targets: '.closebtn',
		opacity: [0, 0]
	}, '-=500')
		.add({
			targets: '.imgtext',
			opacity: [0, 0],
		}, '-=750')
		.add({
			targets: '.imglist',
			translateX: [x, x],
			translateY: [y, y],
			opacity: 1,
			width: [0, 150],
			height: [0, 5],
			duration: 500
		})
		.add({
			targets: '.imglist',
			translateX: [x, 150],
			translateY: [y, 0],
			rotate: [360, 0],
			width: [150, 150],
			height: [5, 5],
			duration: 1200
		})
		.add({
			targets: '.imglist',
			translateX: [150, 0],
			// translateY: [y, 0],
			// opacity: [0, 1],
			width: [150, 471],
			duration: 800

		}, '-=400')
		.add({
			targets: '.imglist',
			// translateX: [x, 0],
			// translateY: [y, 0],
			// opacity: [0, 1],
			width: [471, 471],
			height: [2, 786],
			duration: 800

		}, '-=400')
		.add({
			targets: '.imgtext',
			opacity: [0, 1],
		}, '-=280')
		.add({
			targets: '.closebtn',
			opacity: [0, 1]
		}, '-=500');

}

//图文关闭动画
var closeplay = function() {
	var imglistplay = anime.timeline({
		easing: 'easeOutExpo',
		duration: 500,

	});

	// 增加子项
	imglistplay
		.add({
			targets: '.imgtext',
			opacity: [1, 0],
		}, '-=750')
		.add({
			targets: '.closebtn',
			opacity: [1, 0]
		}, '-=750')
		.add({
			targets: '.imglist',
			opacity: [1, 1],
			bottom: [902, 902],
			width: [471, 471],
			height: [786, 786]

		})
		.add({
			targets: '.imglist',
			bottom: [902, 500],
			width: [471, 471],
			height: [786, 2],
			left: [471, 640]
		})
		.add({
			targets: '.imglist',
			bottom: [500, 500],
			width: [471, 0],
			height: [2, 0]
		})
		.add({
			targets: '.imglist',
			bottom: [902, 902],
			left: [471, 471],
			opacity: 0
		})
}

//图标浮动动画
// var flgplay=function(){
//  anime({
//    targets: '.textinput',
//    translateY: [150,0],
// loop: true
//  });
// }


//swipe实例化
var swiper = new Swiper('.box', {
	pagination: '.swiper-pagination',
	effect: 'cube',
	grabCursor: true,
	cube: {
		shadow: true,
		slideShadows: true,
		shadowOffset: 20,
		shadowScale: 0.94
	}
});

//导览按钮初始选项设置
var startbtn = function() {
	var deleteactiveone = function() {
		$(".list_two_ul li span").removeClass("active");
	}
	var inputgo = function() {
		$(".textinput").removeClass("inputtextactive");
		setTimeout(function() {
			$(".textinput").addClass("inputtextactive");
		}, 1000);
	}
	$(".list_one_ul li:eq(0) img").attr("src", "images/newimg/1a.png");
	$(".list_one_ul li:eq(1) img").attr("src", "images/newimg/2b.png");
	$(".list_one_ul li:eq(2) img").attr("src", "images/newimg/3b.png");
	$(".list_one_ul li:eq(3) img").attr("src", "images/newimg/4b.png");
	$(".list_one_ul li:eq(4) img").attr("src", "images/newimg/5b.png");
	$(".list_one_ul li:eq(5) img").attr("src", "images/newimg/6b.png");
	$(".list_one_ul li:eq(6) img").attr("src", "images/newimg/7b.png");
	$(".list_one_ul li:eq(7) img").attr("src", "images/newimg/8b.png");
	$(".list_one_ul li:eq(8) img").attr("src", "images/newimg/9b.png");
	$(".list_one_ul li:eq(9) img").attr("src", "images/newimg/10b.png");
	$(".list_one_ul li:eq(10) img").attr("src", "images/newimg/11b.png");
	$(".list_one_ul li:eq(11) img").attr("src", "images/newimg/12b.png");
	$(".list_one_ul li:eq(12) img").attr("src", "images/newimg/13b.png");
	$(".list_one_ul li:eq(13) img").attr("src", "images/newimg/14b.png");
	$(".list_one_ul li:eq(14) img").attr("src", "images/newimg/15b.png");
	$(".list_one_ul li:eq(15) img").attr("src", "images/newimg/16b.png");
	$(".list_one_ul li:eq(0) span").addClass("active");
	$(".list_one_ul li:eq(0)").siblings().find("span").removeClass("active");
	deleteactiveone();
	$(".imgtext img").attr("src", "images/images/text/textdqyj.png");
	$(".map img").attr("src", "images/images/map/daqingyouju.png");
	$(".textinput").css({
		"right": "586px",
		"top": "95px"
	});
	$(".fontp").text("大清邮局");
	imgplay();
	inputgo();
	$(".list_box").css({
		"transform": "translate3d(0px, -0px, 0px)"
	})
	// swiperlist.slideTo(0, 1000, false);
}

$('.index_btn').click(function() {
	swiper.slideTo(1, 1000, false); //切换到第一个slide，速度为1秒
	$(".list_one_ul li").css("pointer-events", "none");
	setTimeout(function() {
		$(".list_one_ul li").css("pointer-events", "auto");
	}, 3000);
	showlist();
	startbtn();
	backplay();
	// imgplay();
});

var swiperlist = new Swiper('.list_btn', {
	direction: 'vertical',

});
var count=1;
$('.next').click(function() {
	if(count==1){
		$(".list_box").css({
			"transform": "translate3d(0px,-920px, 0px)"
		})
		$(".next").css({
			"left": "200px"
		});
		$(".prev").css({
			"display": "block"
		});
		$(".prev").css({
			"left": "250px"
		});
		count++
	}
	else if(count==2){
		$(".list_box").css({
			"transform": "translate3d(0px,-1383px, 0px)"
			
		});
		$(".next").css({
			"display": "none"
		});
		$(".prev").css({
			"left": "230px"
		});
		count++;
	}
	
	// swiperlist.slideTo(0.5, 1000, false); //切换到第一个slide，速度为1秒
	// showlisttwo();
});
$('.prev').click(function() {
	if(count==2){
		$(".list_box").css({
			"transform": "translate3d(0px, 0px, 0px)"
		})
		$(".prev").css({
			"display": "none"
		});
		$(".next").css({
			"left": "230px"
		});
		count--;
	}else if(count==3){
		$(".list_box").css({
			"transform": "translate3d(0px,-920px, 0px)"
		});
		$(".next").css({
			"display": "block"
		});
		$(".next").css({
			"left": "200px"
		});
		$(".prev").css({
			"left": "250px"
		});
		count--;
	}
	
	// swiperlist.slideTo(0.5, 1000, false); //切换到第一个slide，速度为1秒
	// showlisttwo();
	// showlist();
});
$('.back').click(function() {
	count=1;
	swiper.slideTo(0, 1000, false); //切换到第一个slide，速度为1秒
	$(".prev").css({
		"display": "none"
	});
	$(".next").css({
		"left": "230px"
	});
	$(".next").css({
		"display": "block"
	});
});
