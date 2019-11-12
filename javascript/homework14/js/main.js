$('.tabs').on('click', '.tabs-title', function(){
    
    $('.active').removeClass('active'); 
    $(this).addClass('active')
    
    $('.tabs-content li').removeClass('active');
    $('.tabs-content li').eq($(this).index()).addClass('active');

})
