(function($){
    $(document).ready(function(){
        //~ $('a.tabs').click(function(event){
            //~ var url=$(this).attr('href');
            //~ $('.content').load(url);
            //~ event.preventDefault();
        //~ });
        $('.description').live('mouseenter',
        function(){
            $(this).addClass('hover');
        }).live('mouseleave',function(){
            $(this).removeClass('hover');
        });
        
        // fix sub nav on scroll 0910從bootstrap官網抓的
        var $win = $(window)
          , $nav = $('.subnav')
          , navTop = $('.subnav').length && $('.subnav').offset().top - 40
          , isFixed = 0
    
        processScroll()
    
        $win.on('scroll', processScroll)
    
        function processScroll() {
          var i, scrollTop = $win.scrollTop()
          if (scrollTop >= navTop && !isFixed) {
            isFixed = 1
            $nav.addClass('subnav-fixed')
          } else if (scrollTop <= navTop && isFixed) {
            isFixed = 0
            $nav.removeClass('subnav-fixed')
          }
        }
    });        
})(jQuery);
