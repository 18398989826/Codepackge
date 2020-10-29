$(function() {
	var deleteactiveone = function() {
		$(".list_two_ul li span").removeClass("active");
	}
	var deleteactivetwo = function() {
		$(".list_one_ul li span").removeClass("active");
	}
	var inputgo = function() {
		$(".textinput").removeClass("inputtextactive");
		setTimeout(function() {
			$(".textinput").addClass("inputtextactive");
		}, 1000);
	}
	$(".list_one_ul li").click(function() {
		$(".list_one_ul li").css("pointer-events", "none");
		setTimeout(function() {
			$(".list_one_ul li").css("pointer-events", "auto");
		}, 3500);
		var num = $(this).index();
		// imgplay.restart;
		console.log(num);
		switch (num) {
			case 0:
				$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/newimg/1a.png");
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
				$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				deleteactiveone();
				$(".imgtext img").attr("src", "images/images/text/textdqyj.png");
				$(".map img").attr("src", "images/images/map/daqingyouju.png");
				$(".textinput").css({
					"right": "586px",
					"top": "95px"
				});
				var x = 710;
				var y = 30;
				$(".fontp").text("大清邮局");
				imgplay(x, y);
				inputgo();
				break;
			case 1:
				$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/newimg/2a.png");
				$(".list_one_ul li:eq(0) img").attr("src", "images/newimg/1b.png");
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
				$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				deleteactiveone();
				$(".imgtext img").attr("src", "images/images/text/textsyt.png");
				$(".map img").attr("src", "images/images/map/mapsyt.png");
				$(".textinput").css({
					"right": "590px",
					"top": "80px"
				});
				var x = 710;
				var y = 20;
				$(".fontp").text("三益堂");
				imgplay(x, y);
				inputgo();
				break;
			case 2:
				$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/newimg/3a.png");
				$(".list_one_ul li:eq(0) img").attr("src", "images/newimg/1b.png");
				$(".list_one_ul li:eq(1) img").attr("src", "images/newimg/2b.png");
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
				$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				deleteactiveone();
				$(".imgtext img").attr("src", "images/images/text/textone.png");
				$(".map img").attr("src", "images/images/map/mapone.png");
				$(".textinput").css({
					"right": "530px",
					"top": "176px"
				});
				var x = 770;
				var y = 135;
				$(".fontp").text("瑞蚨祥");
				imgplay(x, y);
				inputgo();
				break;
			case 3:
				$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/newimg/4a.png");
				$(".list_one_ul li:eq(0) img").attr("src", "images/newimg/1b.png");
				$(".list_one_ul li:eq(1) img").attr("src", "images/newimg/2b.png");
				$(".list_one_ul li:eq(2) img").attr("src", "images/newimg/3b.png");
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
				$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				deleteactiveone();
				$(".imgtext img").attr("src", "images/images/text/texttwo.png");
				$(".map img").attr("src", "images/images/map/maptwo.png");
				$(".textinput").css({
					"right": "473px",
					"top": "244px"
				});
				var x = 790;
				var y = 180;
				$(".fontp").text("民俗博物馆");
				imgplay(x, y);
				inputgo();
				break;
			case 4:
				$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/newimg/5a.png");
				$(".list_one_ul li:eq(0) img").attr("src", "images/newimg/1b.png");
				$(".list_one_ul li:eq(1) img").attr("src", "images/newimg/2b.png");
				$(".list_one_ul li:eq(2) img").attr("src", "images/newimg/3b.png");
				$(".list_one_ul li:eq(3) img").attr("src", "images/newimg/4b.png");
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
				$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				deleteactiveone();
				$(".imgtext img").attr("src", "images/images/text/textthree.png");
				$(".map img").attr("src", "images/images/map/mapthree.png");
				$(".textinput").css({
					"right": "587px",
					"top": "234px"
				});
				var x = 690;
				var y = 170;
				$(".fontp").text("英美烟草公司");
				imgplay(x, y);
				inputgo();
				break;
			case 5:
				$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/newimg/6a.png");
				$(".list_one_ul li:eq(0) img").attr("src", "images/newimg/1b.png");
				$(".list_one_ul li:eq(1) img").attr("src", "images/newimg/2b.png");
				$(".list_one_ul li:eq(2) img").attr("src", "images/newimg/3b.png");
				$(".list_one_ul li:eq(3) img").attr("src", "images/newimg/4b.png");
				$(".list_one_ul li:eq(4) img").attr("src", "images/newimg/5b.png");
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
				$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				deleteactiveone();
				$(".imgtext img").attr("src", "images/images/text/text12.png");
				$(".map img").attr("src", "images/images/map/map12.png");
				$(".textinput").css({
					"right": "597px",
					"top": "800px"
				});
				var x = 600;
				var y = 750;
				$(".fontp").text("咔咔魔相馆");
				imgplay(x, y);
				inputgo();
				break;
			case 6:
				$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/newimg/7a.png");
				$(".list_one_ul li:eq(0) img").attr("src", "images/newimg/1b.png");
				$(".list_one_ul li:eq(1) img").attr("src", "images/newimg/2b.png");
				$(".list_one_ul li:eq(2) img").attr("src", "images/newimg/3b.png");
				$(".list_one_ul li:eq(3) img").attr("src", "images/newimg/4b.png");
				$(".list_one_ul li:eq(4) img").attr("src", "images/newimg/5b.png");
				$(".list_one_ul li:eq(5) img").attr("src", "images/newimg/6b.png");
				$(".list_one_ul li:eq(7) img").attr("src", "images/newimg/8b.png");
				$(".list_one_ul li:eq(8) img").attr("src", "images/newimg/9b.png");
				$(".list_one_ul li:eq(9) img").attr("src", "images/newimg/10b.png");
				$(".list_one_ul li:eq(10) img").attr("src", "images/newimg/11b.png");
				$(".list_one_ul li:eq(11) img").attr("src", "images/newimg/12b.png");
				$(".list_one_ul li:eq(12) img").attr("src", "images/newimg/13b.png");
				$(".list_one_ul li:eq(13) img").attr("src", "images/newimg/14b.png");
				$(".list_one_ul li:eq(14) img").attr("src", "images/newimg/15b.png");
				$(".list_one_ul li:eq(15) img").attr("src", "images/newimg/16b.png");
				$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				deleteactiveone();
				$(".imgtext img").attr("src", "images/images/text/textfour.png");
				$(".map img").attr("src", "images/images/map/mapfour.png");
				$(".textinput").css({
					"right": "508px",
					"top": "314px"
				});
				var x = 750;
				var y = 255;
				$(".fontp").text("周村烧饼博物馆");
				imgplay(x, y);
				inputgo();
				break;
			case 7:
				$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/newimg/8a.png");
				$(".list_one_ul li:eq(0) img").attr("src", "images/newimg/1b.png");
				$(".list_one_ul li:eq(1) img").attr("src", "images/newimg/2b.png");
				$(".list_one_ul li:eq(2) img").attr("src", "images/newimg/3b.png");
				$(".list_one_ul li:eq(3) img").attr("src", "images/newimg/4b.png");
				$(".list_one_ul li:eq(4) img").attr("src", "images/newimg/5b.png");
				$(".list_one_ul li:eq(5) img").attr("src", "images/newimg/6b.png");
				$(".list_one_ul li:eq(6) img").attr("src", "images/newimg/7b.png");
				$(".list_one_ul li:eq(8) img").attr("src", "images/newimg/9b.png");
				$(".list_one_ul li:eq(9) img").attr("src", "images/newimg/10b.png");
				$(".list_one_ul li:eq(10) img").attr("src", "images/newimg/11b.png");
				$(".list_one_ul li:eq(11) img").attr("src", "images/newimg/12b.png");
				$(".list_one_ul li:eq(12) img").attr("src", "images/newimg/13b.png");
				$(".list_one_ul li:eq(13) img").attr("src", "images/newimg/14b.png");
				$(".list_one_ul li:eq(14) img").attr("src", "images/newimg/15b.png");
				$(".list_one_ul li:eq(15) img").attr("src", "images/newimg/16b.png");
				$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				deleteactiveone();
				$(".imgtext img").attr("src", "images/images/text/textfive.png");
				$(".map img").attr("src", "images/images/map/mapfive.png");
				$(".textinput").css({
					"right": "469px",
					"top": "449px"
				});
				var x = 820;
				var y = 390;
				$(".fontp").text("今日无税碑");
				imgplay(x, y);
				inputgo();
				break;
			case 8:
				$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/newimg/9a.png");
				$(".list_one_ul li:eq(0) img").attr("src", "images/newimg/1b.png");
				$(".list_one_ul li:eq(1) img").attr("src", "images/newimg/2b.png");
				$(".list_one_ul li:eq(2) img").attr("src", "images/newimg/3b.png");
				$(".list_one_ul li:eq(3) img").attr("src", "images/newimg/4b.png");
				$(".list_one_ul li:eq(4) img").attr("src", "images/newimg/5b.png");
				$(".list_one_ul li:eq(5) img").attr("src", "images/newimg/6b.png");
				$(".list_one_ul li:eq(6) img").attr("src", "images/newimg/7b.png");
				$(".list_one_ul li:eq(7) img").attr("src", "images/newimg/8b.png");
				$(".list_one_ul li:eq(9) img").attr("src", "images/newimg/10b.png");
				$(".list_one_ul li:eq(10) img").attr("src", "images/newimg/11b.png");
				$(".list_one_ul li:eq(11) img").attr("src", "images/newimg/12b.png");
				$(".list_one_ul li:eq(12) img").attr("src", "images/newimg/13b.png");
				$(".list_one_ul li:eq(13) img").attr("src", "images/newimg/14b.png");
				$(".list_one_ul li:eq(14) img").attr("src", "images/newimg/15b.png");
				$(".list_one_ul li:eq(15) img").attr("src", "images/newimg/16b.png");
				$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				deleteactiveone();
				$(".imgtext img").attr("src", "images/images/text/textnine.png");
				$(".map img").attr("src", "images/images/map/mapnine.png");
				$(".textinput").css({
					"right": "501px",
					"top": "393px"
				});
				var x = 770;
				var y = 320;
				$(".fontp").text("状元府");
				imgplay(x, y);
				inputgo();
				break;
			case 9:
				$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/newimg/10a.png");
				$(".list_one_ul li:eq(0) img").attr("src", "images/newimg/1b.png");
				$(".list_one_ul li:eq(1) img").attr("src", "images/newimg/2b.png");
				$(".list_one_ul li:eq(2) img").attr("src", "images/newimg/3b.png");
				$(".list_one_ul li:eq(3) img").attr("src", "images/newimg/4b.png");
				$(".list_one_ul li:eq(4) img").attr("src", "images/newimg/5b.png");
				$(".list_one_ul li:eq(5) img").attr("src", "images/newimg/6b.png");
				$(".list_one_ul li:eq(6) img").attr("src", "images/newimg/7b.png");
				$(".list_one_ul li:eq(7) img").attr("src", "images/newimg/8b.png");
				$(".list_one_ul li:eq(8) img").attr("src", "images/newimg/9b.png");
				$(".list_one_ul li:eq(10) img").attr("src", "images/newimg/11b.png");
				$(".list_one_ul li:eq(11) img").attr("src", "images/newimg/12b.png");
				$(".list_one_ul li:eq(12) img").attr("src", "images/newimg/13b.png");
				$(".list_one_ul li:eq(13) img").attr("src", "images/newimg/14b.png");
				$(".list_one_ul li:eq(14) img").attr("src", "images/newimg/15b.png");
				$(".list_one_ul li:eq(15) img").attr("src", "images/newimg/16b.png");
				$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				deleteactiveone();
				$(".imgtext img").attr("src", "images/images/text/textsix.png");
				$(".map img").attr("src", "images/images/map/mapsix.png");
				$(".textinput").css({
					"right": "539px",
					"top": "560px"
				});
				var x = 670;
				var y = 500;
				$(".fontp").text("票证博物馆");
				imgplay(x, y);
				inputgo();
				break;
			case 10:
				$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/newimg/11a.png");
				$(".list_one_ul li:eq(0) img").attr("src", "images/newimg/1b.png");
				$(".list_one_ul li:eq(1) img").attr("src", "images/newimg/2b.png");
				$(".list_one_ul li:eq(2) img").attr("src", "images/newimg/3b.png");
				$(".list_one_ul li:eq(3) img").attr("src", "images/newimg/4b.png");
				$(".list_one_ul li:eq(4) img").attr("src", "images/newimg/5b.png");
				$(".list_one_ul li:eq(5) img").attr("src", "images/newimg/6b.png");
				$(".list_one_ul li:eq(6) img").attr("src", "images/newimg/7b.png");
				$(".list_one_ul li:eq(7) img").attr("src", "images/newimg/8b.png");
				$(".list_one_ul li:eq(8) img").attr("src", "images/newimg/9b.png");
				$(".list_one_ul li:eq(9) img").attr("src", "images/newimg/10b.png");
				$(".list_one_ul li:eq(11) img").attr("src", "images/newimg/12b.png");
				$(".list_one_ul li:eq(12) img").attr("src", "images/newimg/13b.png");
				$(".list_one_ul li:eq(13) img").attr("src", "images/newimg/14b.png");
				$(".list_one_ul li:eq(14) img").attr("src", "images/newimg/15b.png");
				$(".list_one_ul li:eq(15) img").attr("src", "images/newimg/16b.png");
				$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				deleteactiveone();
				$(".imgtext img").attr("src", "images/images/text/textdianyin.png");
				$(".map img").attr("src", "images/images/map/mapdianyin.png");
				$(".textinput").css({
					"right": "560px",
					"top": "580px"
				});
				var x = 730;
				var y = 530;
				$(".fontp").text("老电影音乐餐厅");
				imgplay(x, y);
				inputgo();
				break;
			case 11:
				$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/newimg/12a.png");
				$(".list_one_ul li:eq(0) img").attr("src", "images/newimg/1b.png");
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
				$(".list_one_ul li:eq(12) img").attr("src", "images/newimg/13b.png");
				$(".list_one_ul li:eq(13) img").attr("src", "images/newimg/14b.png");
				$(".list_one_ul li:eq(14) img").attr("src", "images/newimg/15b.png");
				$(".list_one_ul li:eq(15) img").attr("src", "images/newimg/16b.png");
				$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				deleteactiveone();
				$(".imgtext img").attr("src", "images/images/text/textseven.png");
				$(".map img").attr("src", "images/images/map/mapseven.png");
				$(".textinput").css({
					"right": "570px",
					"top": "610px"
				});
				var x = 720;
				var y = 560;
				$(".fontp").text("票号博物馆");
				imgplay(x, y);
				inputgo();
				break;
			case 12:
				$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/newimg/13a.png");
				$(".list_one_ul li:eq(0) img").attr("src", "images/newimg/1b.png");
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
				$(".list_one_ul li:eq(13) img").attr("src", "images/newimg/14b.png");
				$(".list_one_ul li:eq(14) img").attr("src", "images/newimg/15b.png");
				$(".list_one_ul li:eq(15) img").attr("src", "images/newimg/16b.png");
				$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				deleteactiveone();
				$(".imgtext img").attr("src", "images/images/text/texteight.png");
				$(".map img").attr("src", "images/images/map/mapeight.png");
				$(".textinput").css({
					"right": "389px",
					"top": "700px"
				});
				var x = 900;
				var y = 657;
				$(".fontp").text("大染房");
				imgplay(x, y);
				inputgo();
				break;
			case 13:
				$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/newimg/14a.png");
				$(".list_one_ul li:eq(0) img").attr("src", "images/newimg/1b.png");
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
				$(".list_one_ul li:eq(14) img").attr("src", "images/newimg/15b.png");
				$(".list_one_ul li:eq(15) img").attr("src", "images/newimg/16b.png");
				$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				deleteactiveone();
				$(".imgtext img").attr("src", "images/images/text/textten.png");
				$(".map img").attr("src", "images/images/map/mapten.png");
				$(".textinput").css({
					"right": "480px",
					"top": "776px"
				});
				var x = 780;
				var y = 735;
				$(".fontp").text("魁星阁");
				imgplay(x, y);
				inputgo();
				break;
			case 14:
				$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/newimg/15a.png");
				$(".list_one_ul li:eq(0) img").attr("src", "images/newimg/1b.png");
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
				$(".list_one_ul li:eq(15) img").attr("src", "images/newimg/16b.png");
				$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				deleteactiveone();
				$(".imgtext img").attr("src", "images/images/text/texteleven.png");
				$(".map img").attr("src", "images/images/map/mapeleven.png");
				$(".textinput").css({
					"right": "672px",
					"top": "25px"
				});
				var x = 600;
				var y = -50;
				$(".fontp").text("千佛寺");
				imgplay(x, y);
				inputgo();
				break;
			case 15:
				$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/newimg/16a.png");
				$(".list_one_ul li:eq(0) img").attr("src", "images/newimg/1b.png");
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
				$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				deleteactiveone();
				$(".imgtext img").attr("src", "images/images/text/text13.png");
				$(".map img").attr("src", "images/images/map/map13.png");
				$(".textinput").css({
					"right": "522px",
					"top": "140px"
				});
				var x = 750;
				var y = 80;
				$(".fontp").text("花舞盛宴");
				imgplay(x, y);
				inputgo();
				break;

				// case 0:
				// 	$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/images/list1.png");
				// 	$(".list_one_ul li:eq(1) img").attr("src", "images/images/list2a.png");
				// 	$(".list_one_ul li:eq(2) img").attr("src", "images/images/list3a.png");
				// 	$(".list_one_ul li:eq(3) img").attr("src", "images/images/list4a.png");
				// 	$(".list_one_ul li:eq(4) img").attr("src", "images/images/list5a.png");
				// 	$(".list_one_ul li:eq(5) img").attr("src", "images/images/list6a.png");
				// 	$(".list_one_ul li:eq(6) img").attr("src", "images/images/list7a.png");
				// 	$(".list_one_ul li:eq(7) img").attr("src", "images/images/list8a.png");
				// 	$(".list_one_ul li:eq(8) img").attr("src", "images/images/list9a.png");
				// 	$(".list_one_ul li:eq(9) img").attr("src", "images/images/list10a.png");
				// 	$(".list_one_ul li:eq(10) img").attr("src", "images/images/list11a.png");
				// 	$(".list_one_ul li:eq(11) img").attr("src", "images/images/list12a.png");
				// 	$(".list_one_ul li:eq(12) img").attr("src", "images/images/list13a.png");
				// 	$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				// 	$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				// 	deleteactiveone();
				// 	$(".imgtext img").attr("src", "images/images/text/textone.png");
				// 	$(".map img").attr("src", "images/images/map/mapone.png");
				// 	$(".textinput").css({
				// 		"right": "530px",
				// 		"top": "176px"
				// 	});
				// 	var x = 770;
				// 	var y = 100;
				// 	$(".fontp").text("瑞蚨祥");
				// 	imgplay(x, y);
				// 	inputgo();
				// 	break;
				// case 1:
				// 	$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/images/list2.png");
				// 	$(".list_one_ul li:eq(0) img").attr("src", "images/images/list1a.png");
				// 	$(".list_one_ul li:eq(2) img").attr("src", "images/images/list3a.png");
				// 	$(".list_one_ul li:eq(3) img").attr("src", "images/images/list4a.png");
				// 	$(".list_one_ul li:eq(4) img").attr("src", "images/images/list5a.png");
				// 	$(".list_one_ul li:eq(5) img").attr("src", "images/images/list6a.png");
				// 	$(".list_one_ul li:eq(6) img").attr("src", "images/images/list7a.png");
				// 	$(".list_one_ul li:eq(7) img").attr("src", "images/images/list8a.png");
				// 	$(".list_one_ul li:eq(8) img").attr("src", "images/images/list9a.png");
				// 	$(".list_one_ul li:eq(9) img").attr("src", "images/images/list10a.png");
				// 	$(".list_one_ul li:eq(10) img").attr("src", "images/images/list11a.png");
				// 	$(".list_one_ul li:eq(11) img").attr("src", "images/images/list12a.png");
				// 	$(".list_one_ul li:eq(12) img").attr("src", "images/images/list13a.png");
				// 	$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				// 	$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				// 	deleteactiveone();
				// 	$(".imgtext img").attr("src", "images/images/text/texttwo.png");
				// 	$(".map img").attr("src", "images/images/map/maptwo.png");
				// 	$(".textinput").css({
				// 		"right": "473px",
				// 		"top": "244px"
				// 	});
				// 	var x = 790;
				// 	var y = 180;
				// 	$(".fontp").text("民俗博物馆");
				// 	imgplay(x, y);
				// 	inputgo();



				// 	break;
				// case 2:
				// 	$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/images/list3.png");
				// 	$(".list_one_ul li:eq(0) img").attr("src", "images/images/list1a.png");
				// 	$(".list_one_ul li:eq(1) img").attr("src", "images/images/list2a.png");
				// 	$(".list_one_ul li:eq(3) img").attr("src", "images/images/list4a.png");
				// 	$(".list_one_ul li:eq(4) img").attr("src", "images/images/list5a.png");
				// 	$(".list_one_ul li:eq(5) img").attr("src", "images/images/list6a.png");
				// 	$(".list_one_ul li:eq(6) img").attr("src", "images/images/list7a.png");
				// 	$(".list_one_ul li:eq(7) img").attr("src", "images/images/list8a.png");
				// 	$(".list_one_ul li:eq(8) img").attr("src", "images/images/list9a.png");
				// 	$(".list_one_ul li:eq(9) img").attr("src", "images/images/list10a.png");
				// 	$(".list_one_ul li:eq(10) img").attr("src", "images/images/list11a.png");
				// 	$(".list_one_ul li:eq(11) img").attr("src", "images/images/list12a.png");
				// 	$(".list_one_ul li:eq(12) img").attr("src", "images/images/list13a.png");
				// 	$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				// 	$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				// 	deleteactiveone();
				// 	$(".imgtext img").attr("src", "images/images/text/textthree.png");
				// 	$(".map img").attr("src", "images/images/map/mapthree.png");
				// 	$(".textinput").css({
				// 		"right": "587px",
				// 		"top": "234px"
				// 	});
				// 	var x = 690;
				// 	var y = 170;
				// 	$(".fontp").text("英美烟草公司");
				// 	imgplay(x, y);
				// 	inputgo();

				// 	break;
				// 	case 3:
				// 		$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/images/list4.png");
				// 		$(".list_one_ul li:eq(0) img").attr("src", "images/images/list1a.png");
				// 		$(".list_one_ul li:eq(1) img").attr("src", "images/images/list2a.png");
				// 		$(".list_one_ul li:eq(2) img").attr("src", "images/images/list3a.png");
				// 		$(".list_one_ul li:eq(4) img").attr("src", "images/images/list5a.png");
				// 		$(".list_one_ul li:eq(5) img").attr("src", "images/images/list6a.png");
				// 		$(".list_one_ul li:eq(6) img").attr("src", "images/images/list7a.png");
				// 		$(".list_one_ul li:eq(7) img").attr("src", "images/images/list8a.png");
				// 		$(".list_one_ul li:eq(8) img").attr("src", "images/images/list9a.png");
				// 		$(".list_one_ul li:eq(9) img").attr("src", "images/images/list10a.png");
				// 		$(".list_one_ul li:eq(10) img").attr("src", "images/images/list11a.png");
				// 		$(".list_one_ul li:eq(11) img").attr("src", "images/images/list12a.png");
				// 		$(".list_one_ul li:eq(12) img").attr("src", "images/images/list13a.png");
				// 		$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				// 		$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				// 		deleteactiveone();
				// 		$(".imgtext img").attr("src", "images/images/text/text12.png");
				// 		$(".map img").attr("src", "images/images/map/map12.png");
				// 		$(".textinput").css({
				// 			"right": "597px",
				// 			"top": "800px"
				// 		});
				// 		var x = 600;
				// 		var y = 750;
				// 		$(".fontp").text("咔咔魔相馆");
				// 		imgplay(x, y);
				// 		inputgo();

				// 		break;
				// case 4:
				// 	$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/images/list5.png");
				// 	$(".list_one_ul li:eq(0) img").attr("src", "images/images/list1a.png");
				// 	$(".list_one_ul li:eq(1) img").attr("src", "images/images/list2a.png");
				// 	$(".list_one_ul li:eq(2) img").attr("src", "images/images/list3a.png");
				// 	$(".list_one_ul li:eq(3) img").attr("src", "images/images/list4a.png");
				// 	$(".list_one_ul li:eq(5) img").attr("src", "images/images/list6a.png");
				// 	$(".list_one_ul li:eq(6) img").attr("src", "images/images/list7a.png");
				// 	$(".list_one_ul li:eq(7) img").attr("src", "images/images/list8a.png");
				// 	$(".list_one_ul li:eq(8) img").attr("src", "images/images/list9a.png");
				// 	$(".list_one_ul li:eq(9) img").attr("src", "images/images/list10a.png");
				// 	$(".list_one_ul li:eq(10) img").attr("src", "images/images/list11a.png");
				// 	$(".list_one_ul li:eq(11) img").attr("src", "images/images/list12a.png");
				// 	$(".list_one_ul li:eq(12) img").attr("src", "images/images/list13a.png");
				// 	$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				// 	$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				// 	deleteactiveone();
				// 	$(".imgtext img").attr("src", "images/images/text/textfour.png");
				// 	$(".map img").attr("src", "images/images/map/mapfour.png");
				// 	$(".textinput").css({
				// 		"right": "508px",
				// 		"top": "314px"
				// 	});
				// 	var x = 750;
				// 	var y = 255;
				// 	$(".fontp").text("周村烧饼博物馆");
				// 	imgplay(x, y);
				// 	inputgo();

				// 	break;
				// case 5:
				// 	$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/images/list6.png");
				// 	$(".list_one_ul li:eq(0) img").attr("src", "images/images/list1a.png");
				// 	$(".list_one_ul li:eq(1) img").attr("src", "images/images/list2a.png");
				// 	$(".list_one_ul li:eq(2) img").attr("src", "images/images/list3a.png");
				// 	$(".list_one_ul li:eq(3) img").attr("src", "images/images/list4a.png");
				// 	$(".list_one_ul li:eq(4) img").attr("src", "images/images/list5a.png");
				// 	$(".list_one_ul li:eq(6) img").attr("src", "images/images/list7a.png");
				// 	$(".list_one_ul li:eq(7) img").attr("src", "images/images/list8a.png");
				// 	$(".list_one_ul li:eq(8) img").attr("src", "images/images/list9a.png");
				// 	$(".list_one_ul li:eq(9) img").attr("src", "images/images/list10a.png");
				// 	$(".list_one_ul li:eq(10) img").attr("src", "images/images/list11a.png");
				// 	$(".list_one_ul li:eq(11) img").attr("src", "images/images/list12a.png");
				// 	$(".list_one_ul li:eq(12) img").attr("src", "images/images/list13a.png");
				// 	$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				// 	$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				// 	deleteactiveone();
				// 	$(".imgtext img").attr("src", "images/images/text/textfive.png");
				// 	$(".map img").attr("src", "images/images/map/mapfive.png");
				// 	$(".textinput").css({
				// 		"right": "469px",
				// 		"top": "449px"
				// 	});
				// 	var x = 820;
				// 	var y = 390;
				// 	$(".fontp").text("今日无税碑");
				// 	imgplay(x, y);
				// 	inputgo();

				// 	break;
				// case 6:
				// 	$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/images/list7.png");
				// 	$(".list_one_ul li:eq(0) img").attr("src", "images/images/list1a.png");
				// 	$(".list_one_ul li:eq(1) img").attr("src", "images/images/list2a.png");
				// 	$(".list_one_ul li:eq(2) img").attr("src", "images/images/list3a.png");
				// 	$(".list_one_ul li:eq(3) img").attr("src", "images/images/list4a.png");
				// 	$(".list_one_ul li:eq(4) img").attr("src", "images/images/list5a.png");
				// 	$(".list_one_ul li:eq(5) img").attr("src", "images/images/list6a.png");
				// 	$(".list_one_ul li:eq(7) img").attr("src", "images/images/list8a.png");
				// 	$(".list_one_ul li:eq(8) img").attr("src", "images/images/list9a.png");
				// 	$(".list_one_ul li:eq(9) img").attr("src", "images/images/list10a.png");
				// 	$(".list_one_ul li:eq(10) img").attr("src", "images/images/list11a.png");
				// 	$(".list_one_ul li:eq(11) img").attr("src", "images/images/list12a.png");
				// 	$(".list_one_ul li:eq(12) img").attr("src", "images/images/list13a.png");
				// 	$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				// 	$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				// 	deleteactiveone();
				// 	$(".imgtext img").attr("src", "images/images/text/textsix.png");
				// 	$(".map img").attr("src", "images/images/map/mapsix.png");
				// 	$(".textinput").css({
				// 		"right": "539px",
				// 		"top": "560px"
				// 	});
				// 	var x = 670;
				// 	var y = 500;
				// 	$(".fontp").text("票证博物馆");
				// 	imgplay(x, y);
				// 	inputgo();

				// 	break;
				// case 7:
				// 	$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/images/list8.png");
				// 	$(".list_one_ul li:eq(0) img").attr("src", "images/images/list1a.png");
				// 	$(".list_one_ul li:eq(1) img").attr("src", "images/images/list2a.png");
				// 	$(".list_one_ul li:eq(2) img").attr("src", "images/images/list3a.png");
				// 	$(".list_one_ul li:eq(3) img").attr("src", "images/images/list4a.png");
				// 	$(".list_one_ul li:eq(4) img").attr("src", "images/images/list5a.png");
				// 	$(".list_one_ul li:eq(5) img").attr("src", "images/images/list6a.png");
				// 	$(".list_one_ul li:eq(6) img").attr("src", "images/images/list7a.png");
				// 	$(".list_one_ul li:eq(8) img").attr("src", "images/images/list9a.png");
				// 	$(".list_one_ul li:eq(9) img").attr("src", "images/images/list10a.png");
				// 	$(".list_one_ul li:eq(10) img").attr("src", "images/images/list11a.png");
				// 	$(".list_one_ul li:eq(11) img").attr("src", "images/images/list12a.png");
				// 	$(".list_one_ul li:eq(12) img").attr("src", "images/images/list13a.png");
				// 	$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				// 	$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				// 	deleteactiveone();
				// 	$(".imgtext img").attr("src", "images/images/text/textseven.png");
				// 	$(".map img").attr("src", "images/images/map/mapseven.png");
				// 	$(".textinput").css({
				// 		"right": "629px",
				// 		"top": "610px"
				// 	});
				// 	var x = 635;
				// 	var y = 550;
				// 	$(".fontp").text("票号博物馆");
				// 	imgplay(x, y);
				// 	inputgo();
				// 	break;
				// case 8:
				// 	$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/images/list9.png");
				// 	$(".list_one_ul li:eq(0) img").attr("src", "images/images/list1a.png");
				// 	$(".list_one_ul li:eq(1) img").attr("src", "images/images/list2a.png");
				// 	$(".list_one_ul li:eq(2) img").attr("src", "images/images/list3a.png");
				// 	$(".list_one_ul li:eq(3) img").attr("src", "images/images/list4a.png");
				// 	$(".list_one_ul li:eq(4) img").attr("src", "images/images/list5a.png");
				// 	$(".list_one_ul li:eq(5) img").attr("src", "images/images/list6a.png");
				// 	$(".list_one_ul li:eq(6) img").attr("src", "images/images/list7a.png");
				// 	$(".list_one_ul li:eq(7) img").attr("src", "images/images/list8a.png");
				// 	$(".list_one_ul li:eq(9) img").attr("src", "images/images/list10a.png");
				// 	$(".list_one_ul li:eq(10) img").attr("src", "images/images/list11a.png");
				// 	$(".list_one_ul li:eq(11) img").attr("src", "images/images/list12a.png");
				// 	$(".list_one_ul li:eq(12) img").attr("src", "images/images/list13a.png");
				// 	$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				// 	$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				// 	deleteactiveone();
				// 	$(".imgtext img").attr("src", "images/images/text/texteight.png");
				// 	$(".map img").attr("src", "images/images/map/mapeight.png");
				// 	$(".textinput").css({
				// 		"right": "389px",
				// 		"top": "700px"
				// 	});
				// 	var x = 900;
				// 	var y = 657;
				// 	$(".fontp").text("大染房");
				// 	imgplay(x, y);
				// 	inputgo();
				// 	break;
				// case 9:
				// 	$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/images/list10.png");
				// 	$(".list_one_ul li:eq(0) img").attr("src", "images/images/list1a.png");
				// 	$(".list_one_ul li:eq(1) img").attr("src", "images/images/list2a.png");
				// 	$(".list_one_ul li:eq(2) img").attr("src", "images/images/list3a.png");
				// 	$(".list_one_ul li:eq(3) img").attr("src", "images/images/list4a.png");
				// 	$(".list_one_ul li:eq(4) img").attr("src", "images/images/list5a.png");
				// 	$(".list_one_ul li:eq(5) img").attr("src", "images/images/list6a.png");
				// 	$(".list_one_ul li:eq(6) img").attr("src", "images/images/list7a.png");
				// 	$(".list_one_ul li:eq(7) img").attr("src", "images/images/list8a.png");
				// 	$(".list_one_ul li:eq(8) img").attr("src", "images/images/list9a.png");
				// 	$(".list_one_ul li:eq(10) img").attr("src", "images/images/list11a.png");
				// 	$(".list_one_ul li:eq(11) img").attr("src", "images/images/list12a.png");
				// 	$(".list_one_ul li:eq(12) img").attr("src", "images/images/list13a.png");
				// 	$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				// 	$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				// 	deleteactiveone();
				// 	$(".imgtext img").attr("src", "images/images/text/textnine.png");
				// 	$(".map img").attr("src", "images/images/map/mapnine.png");
				// 	$(".textinput").css({
				// 		"right": "501px",
				// 		"top": "393px"
				// 	});
				// 	var x = 770;
				// 	var y = 320;
				// 	$(".fontp").text("状元府");
				// 	imgplay(x, y);
				// 	inputgo();
				// 	break;
				// case 10:
				// 	$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/images/list11.png");
				// 	$(".list_one_ul li:eq(0) img").attr("src", "images/images/list1a.png");
				// 	$(".list_one_ul li:eq(1) img").attr("src", "images/images/list2a.png");
				// 	$(".list_one_ul li:eq(2) img").attr("src", "images/images/list3a.png");
				// 	$(".list_one_ul li:eq(3) img").attr("src", "images/images/list4a.png");
				// 	$(".list_one_ul li:eq(4) img").attr("src", "images/images/list5a.png");
				// 	$(".list_one_ul li:eq(5) img").attr("src", "images/images/list6a.png");
				// 	$(".list_one_ul li:eq(6) img").attr("src", "images/images/list7a.png");
				// 	$(".list_one_ul li:eq(7) img").attr("src", "images/images/list8a.png");
				// 	$(".list_one_ul li:eq(8) img").attr("src", "images/images/list9a.png");
				// 	$(".list_one_ul li:eq(9) img").attr("src", "images/images/list10a.png");
				// 	$(".list_one_ul li:eq(11) img").attr("src", "images/images/list12a.png");
				// 	$(".list_one_ul li:eq(12) img").attr("src", "images/images/list13a.png");
				// 	$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				// 	$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				// 	deleteactiveone();
				// 	$(".imgtext img").attr("src", "images/images/text/textten.png");
				// 	$(".map img").attr("src", "images/images/map/mapten.png");
				// 	$(".textinput").css({
				// 		"right": "480px",
				// 		"top": "776px"
				// 	});
				// 	var x = 780;
				// 	var y = 735;
				// 	$(".fontp").text("魁星阁");
				// 	imgplay(x, y);
				// 	inputgo();
				// 	break;
				// case 11:
				// 	$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/images/list12.png");
				// 	$(".list_one_ul li:eq(0) img").attr("src", "images/images/list1a.png");
				// 	$(".list_one_ul li:eq(1) img").attr("src", "images/images/list2a.png");
				// 	$(".list_one_ul li:eq(2) img").attr("src", "images/images/list3a.png");
				// 	$(".list_one_ul li:eq(3) img").attr("src", "images/images/list4a.png");
				// 	$(".list_one_ul li:eq(4) img").attr("src", "images/images/list5a.png");
				// 	$(".list_one_ul li:eq(5) img").attr("src", "images/images/list6a.png");
				// 	$(".list_one_ul li:eq(6) img").attr("src", "images/images/list7a.png");
				// 	$(".list_one_ul li:eq(7) img").attr("src", "images/images/list8a.png");
				// 	$(".list_one_ul li:eq(8) img").attr("src", "images/images/list9a.png");
				// 	$(".list_one_ul li:eq(9) img").attr("src", "images/images/list10a.png");
				// 	$(".list_one_ul li:eq(10) img").attr("src", "images/images/list11a.png");
				// 	$(".list_one_ul li:eq(12) img").attr("src", "images/images/list13a.png");
				// 	$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				// 	$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				// 	deleteactiveone();
				// 	$(".imgtext img").attr("src", "images/images/text/texteleven.png");
				// 	$(".map img").attr("src", "images/images/map/mapeleven.png");
				// 	$(".textinput").css({
				// 		"right": "672px",
				// 		"top": "25px"
				// 	});
				// 	var x = 600;
				// 	var y = -50;
				// 	$(".fontp").text("千佛寺");
				// 	imgplay(x, y);
				// 	inputgo();
				// 	break;
				// case 12:
				// 	$(".list_one_ul li:eq(" + num + ") img").attr("src", "images/images/list13.png");
				// 	$(".list_one_ul li:eq(0) img").attr("src", "images/images/list1a.png");
				// 	$(".list_one_ul li:eq(1) img").attr("src", "images/images/list2a.png");
				// 	$(".list_one_ul li:eq(2) img").attr("src", "images/images/list3a.png");
				// 	$(".list_one_ul li:eq(3) img").attr("src", "images/images/list4a.png");
				// 	$(".list_one_ul li:eq(4) img").attr("src", "images/images/list5a.png");
				// 	$(".list_one_ul li:eq(5) img").attr("src", "images/images/list6a.png");
				// 	$(".list_one_ul li:eq(6) img").attr("src", "images/images/list7a.png");
				// 	$(".list_one_ul li:eq(7) img").attr("src", "images/images/list8a.png");
				// 	$(".list_one_ul li:eq(8) img").attr("src", "images/images/list9a.png");
				// 	$(".list_one_ul li:eq(9) img").attr("src", "images/images/list10a.png");
				// 	$(".list_one_ul li:eq(10) img").attr("src", "images/images/list11a.png");
				// 	$(".list_one_ul li:eq(11) img").attr("src", "images/images/list12a.png");
				// 	$(".list_one_ul li:eq(" + num + ") span").addClass("active");
				// 	$(".list_one_ul li:eq(" + num + ")").siblings().find("span").removeClass("active");
				// 	deleteactiveone();
				// 	$(".imgtext img").attr("src", "images/images/text/text13.png");
				// 	$(".map img").attr("src", "images/images/map/map13.png");
				// 	$(".textinput").css({
				// 		"right": "522px",
				// 		"top": "140px"
				// 	});
				// 	var x = 750;
				// 	var y = 80;
				// 	$(".fontp").text("花舞盛宴");
				// 	imgplay(x, y);
				// 	inputgo();
				// 	break;
		}
	})

	$('.closebtn').click(function() {
		closeplay();
	})
})
