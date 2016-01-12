$(window).load(function(){
  window.isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);
  $(".zoom-images").zoomScroller({
    animationTime: 1000,
    easing: "ease",
    initZoom: 1.15,
    zoom: 1
  });
});

$(document).ready(function() {

  $("body").addClass("js");

  $("a.scrollto").click(function(e) {
    e.preventDefault();
    var el = $($(this).attr("scrollto"));
    if(isMobile || !el[0].id.match("tab")) {
      $('html, body').animate({
        scrollTop: el.offset().top - 22
      }, 500);
    };
  });
  $("#select-options a").click(function(e) {
    $("#select-options li").removeClass("active");
    $(this).parent().addClass("active");
    $("body").attr("class", "");
    $("body").addClass("fus-" + $(this).attr("href").substring(1));
  });

  $(window).scroll(function () {
  		if ($(this).scrollTop() > 695) {
  		  $(".navbar").addClass("fus-navbar-solid");
  		} else {
  			$(".navbar").removeClass("fus-navbar-solid");
  		}

  	});
});
