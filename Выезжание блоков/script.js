$(document).ready(function(){
    $('#wrap').css('min-height', ($('#wrap')[0].scrollHeight + 300) + 'px');

    $(window).scroll(function(){
        $('section.sliding').each(function(){
            let pos = $(this).offset().top,
                scroll =  $(window).scrollTop();
            if (pos < scroll + 600){
                $(this).addClass('animated');
            }
        });
    });
    
});