(function($){$.fn.numberRock=function(options){var defaults={speed:24,count:100};var opts=$.extend({},defaults,options);var div_by=100,count=opts["count"],speed=Math.floor(count/div_by),sum=0,$display=this,run_count=1,int_speed=opts["speed"];var int=setInterval(function(){if(run_count<=div_by&&speed!=0){$display.text(sum=speed*run_count);run_count++;}else if(sum<count){$display.text(++sum);}else{clearInterval(int);}},int_speed);}})(jQuery);

// 成交次数跳动
$(function(){
  $(window).on('scroll',function(){
    var st = $(document).scrollTop();
    if( st=1500 ){
      $(".value").numberRock({
        speed:20,
        count:2150
      })
      $(".value2").numberRock({
        speed:20,
        count:2260
      })
      $(".value3").numberRock({
        speed:20,
        count:3340
      })
      $(".value4").numberRock({
        speed:20,
        count:4010
      })
      $(".value5").numberRock({
        speed:20,
        count:1010
      })
      $(".value6").numberRock({
        speed:20,
        count:910
      })
      $(".value7").numberRock({
        speed:20,
        count:510
      })
      $(".value8").numberRock({
        speed:20,
        count:723
      })
    }
  });
});

$(".head-r form ul li").click(function () {
  $(".head-r form ul li.on").removeClass("on");
  $(this).addClass("on");
})
$("nav ul li a").click(function(){
  $("nav ul li a").removeClass("active");
  $(this).addClass("active");
})

// 首页轮播
let mySwiper = new Swiper('.swiper-container', {
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletElement : 'li'
  },
  // effect : 'fade',
  autoplay: true,
  loop: true,
  autoplay: {
    disableOnInteraction: false,
  }
})

jQuery(".show-r-list").slide({
  titCell: ".hd ul",
  mainCell: ".bd ul",
  autoPlay: true,
  effect: "leftLoop",
  vis: 3,
  delayTime: 700,
  interTime: 3000,
  trigger: "click"
});


// 触摸边框旋转
$(function(){
  $(".guarantee ul li a").hover(
    function(){
      $(this).children(".bz-box").css('transform', 'rotate(360deg)') ;
    },
    function(){
      $(this).children(".bz-box").css('transform', 'rotate(0deg)');
    }
  );
});


// 专家
jQuery(".expert").slide({
  mainCell: ".bd ul",
  autoPlay: true,
  effect: "leftLoop",
  vis: 4,
  trigger: "click"
});


// 精品欣赏 / Boutique appreciation
jQuery(".hot").slide({
  titCell: ".ex-list ul li",
  mainCell: ".ex-center",
  trigger: "click"
})

// 成交信息 / Transaction information
jQuery(".hot-items").slide({
  mainCell: ".bd ul",
  autoPlay: true,
  effect: "leftLoop",
  vis: 4,
  trigger: "click"
});
jQuery(".hot").slide({
  titCell: ".ex-list ul li",
  mainCell: ".hot-details",
  trigger: "click"
})

// 成交记录
jQuery(".infor-table").slide({
  mainCell: ".infor-list ul",
  autoPlay: true,
  effect: "topMarquee",
  vis: 8,
  interTime: 50,
  trigger: "click"
});

// 产品内页
$(document).ready(function() {
  $('.zoom').magnify({
    speed: 200
  });
});

// 关于我们轮播
jQuery(".aboutus-l").slide({mainCell:".bd ul",autoPlay:true});

// 新闻资讯轮播
jQuery(".news-l").slide({mainCell:".bd ul",autoPlay:true});

// 新闻资讯
jQuery(".news").slide({
  titCell: ".news-list li",
  mainCell: ".news-r",
  trigger: "click"
})

// 线下活动
jQuery(".offline").slide({
  mainCell:".offline-con ul",
  autoPage:true,
  effect:"leftMarquee",
  autoPlay:true,
  vis:4,
  interTime:50
});

// 内页猜你喜欢
jQuery("#bout-con-item").slide({
  mainCell: ".bd ul",
  autoPlay: true,
  effect: "leftMarquee",
  vis: 4,
  interTime: 50,
  trigger: "click"
});

// 内页类型切换
$(".bout-list2 ul li a").click(function(){
  $(".bout-list2 ul li a").removeClass("active");
  $(this).addClass("active");
})

/*右侧热门藏品滚动*/
jQuery(".coll_r_list").slide({
  mainCell: "ul",
  vis: 4,
  prevCell: ".paget",
  nextCell: ".pageb",
  effect: "topLoop",
  autoPlay: true
});

// 服务指南
$(document).ready(function () {
  $('.galleryImage').hover(
    function () {
      $(this).find('img').animate({
        width: 180,
        marginTop: 10,
        marginLeft: 10
      }, 400);
      $(this).find('.wenzi').fadeOut(300);
    },
    function () {
      $(this).find('img').animate({
        width: 351,
        marginTop: 0,
        marginLeft: 0
      }, 300);
      $(this).find('.wenzi').fadeIn();
    });
});

// 新闻内页
$(".news-list ul li").click(function(){
  $(".news-list ul li.on").removeClass("on");
  $(this).addClass("on");
})

$(function () {
	var marqueeScroll = function (id1, id2, id3, timer) {
		var $parent = $("#" + id1);
		var $goal = $("#" + id2);
		var $closegoal = $("#" + id3);
		$closegoal.html($goal.html());
		function Marquee() {
			if (parseInt($parent.scrollLeft()) - $closegoal.width() >= 0) {
				$parent.scrollLeft(parseInt($parent.scrollLeft()) - $goal.width());
			}
			else {
				$parent.scrollLeft($parent.scrollLeft() + 1);
			}
		}

		setInterval(Marquee, timer);
	}
	var marqueeScroll1 = new marqueeScroll("marquee-box", "wave-list-box1", "wave-list-box2", 20);
	var marqueeScroll2 = new marqueeScroll("marquee-box3", "wave-list-box4", "wave-list-box5", 40);
});