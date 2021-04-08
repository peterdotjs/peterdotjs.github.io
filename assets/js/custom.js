function domLoaded() {
    $('html').addClass('loaded');

    $('.profile-photo').on('touchstart', function(evt){
      $(this).toggleClass('hover');
    });
  
    var resizeHandle = null;
  
    window.onresize = function(){
      if(resizeHandle){
        clearTimeout(resizeHandle);
      }
      resizeHandle = setTimeout(resizeCb,100);
    };
  
    var iOS = false,
        p = navigator.platform;
  
    if( p === 'iPad' || p === 'iPhone' || p === 'iPod' ){
        iOS = true;
    }
  
    if(iOS){
      $('body').addClass('iOS');
    }
  
    resizeCb();
  }
  
  function resizeCb(){
    handleViewport();
  
    if($('.about-me-container').length > 0){
      var amMarginTop = ($(window).height() + $(window).scrollTop() - $('#header').height() - $('footer').height() - $('.about-me-container').height())/3;
      $('.about-me-container').css('margin-top', amMarginTop < 0 ? '0px' : amMarginTop + 'px');
    }
  }
  
  $(function() {
    domLoaded();
  });