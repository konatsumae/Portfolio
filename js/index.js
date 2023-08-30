;(function($){

  $(function(){
    Smooth_scroll();
    scrollIn();
  });

  function Smooth_scroll() {
    $('a[href^="#"]').on('click', function(){
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      var docHeight = document.documentElement.scrollHeight;
      var winHeight = window.innerHeight || document.documentElement.clientHeight;
      if(docHeight-winHeight < position) {
        position = docHeight-winHeight;
      }
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  }


  function scrollIn() {
    $(window).scroll(function () {
      var windowHeight = $(window).height();
      var scroll = $(window).scrollTop();
  
      $('.scroll-in').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 300) {
          $(this).addClass("is-fadein");
        }
      });
    });
  }


})(jQuery);
