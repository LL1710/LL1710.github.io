/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
//  展開/收合按鈕
function scrollToTop() {
  window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", function () {
  const animatedTextElements = document.querySelectorAll(".animated-text");
  const navbar = document.querySelector(".left_navbar");
  

  setTimeout(function () {
    navbar.style.display = "block"; // 這裡改變display屬性以顯示導航欄
  }, 10); // 5000毫秒等於5秒
  // 函數：添加動畫效果
  async function animateText() {
	for (const element of animatedTextElements) {
	  element.style.opacity = "0";
	  element.style.transform = "translateX(-50px)";
	}

	for (const element of animatedTextElements) {
	  await new Promise(resolve => setTimeout(resolve, 100)); // Delay between lines
	  element.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
	  element.style.opacity = "1";
	  element.style.transform = "translateX(0)";
	}
  }
  
  // 調用函數：給導航項目添加動畫效果
  animateText();
});

//<![CDATA[
(function(e,b,a,f){var d="vivaTimeline";var c=function(h,g){this.target=h;this.carouselInterval;this.checkImgLoad;this.imgLoad=false;this._init(g);this._event()};c.options={carousel:true,carouselTime:10000};c.prototype={_init:function(h){var g=this;g.options=e.extend(true,{},c.options,h);g.target.find(".events-body").each(function(){var l=e(this).find(".row").length;if(l>1){var k="<ol>";for(var j=0;j<l;j++){k+="<li data-target='"+j+"'></li>"}k+="</ol>";e(this).siblings(".events-footer").html(k).find("li").first().addClass("active")}});g.target.find(".events-body").each(function(){e(this).find(".row").first().show().siblings().hide()});g.target.find("img").on("load",function(){g.target.find(".events-body").each(function(){var i=0;e(this).find(".row").each(function(){if(e(this).height()>i){i=e(this).height()}});e(this).find(".row").height(i)})})},_event:function(){var g=this;g.target.find(".events-header").click(function(){e(this).siblings(".events-body").slideToggle().end().siblings(".events-footer").toggle()});g.target.find(".events-footer li").click(function(){g._carousel(e(this))});if(g.options.carousel){g.carouselInterval=setInterval(function(){g._carousel()},g.options.carouselTime);g.target.find(".events").hover(function(){clearInterval(g.carouselInterval);g.carouselInterval=null},function(){if(g.carouselInterval==f){g.carouselInterval=setInterval(function(){g._carousel()},g.options.carouselTime)}})}},_carousel:function(h){var g=this;if(h==f){g.target.find(".events-footer .active").each(function(){var j;if(e(this).is(":last-child")){j=e(this).siblings().first()}else{j=e(this).next()}g._carousel(j)})}else{var i=h.data().target;h.addClass("active").siblings().removeClass("active");h.closest(".events-footer").siblings(".events-body").find(".row").eq(i).show().siblings().hide()}}};e.fn[d]=function(h,g){var i;this.each(function(){i=new c(e(this),h)});return this}})(jQuery,window,document);
//]]>

document.addEventListener("DOMContentLoaded", animateText);

function toggleContent(id) {
    var content = document.getElementById('hiddenContent' + id);
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}


