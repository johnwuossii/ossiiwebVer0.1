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
    });        
})(jQuery);
