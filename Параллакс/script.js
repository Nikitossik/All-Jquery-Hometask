$(document).ready(function(){

    $('.layer').each(function(){
        $(this).attr('data-scroll-dist', $(this).offset().top);
    });

    const universe = $('#universe'),
          asteroids = universe.find('.asteroids'),
          astro = universe.find('.astro');


    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        
        universe.css('background-size', (100 + (scroll * 0.05)) + '%');
        asteroids.find('.asteroid').each(function(){
            let data = $(this).data(); 
            $(this).css(data.side, 'calc(' + data.x + ' + ' + scroll * data['speedX'] + 'px)')
            .css('top', 'calc(' + data.y + ' + ' + scroll * data['speedY'] + 'px)')
            .css('transform', 'rotate(' + scroll*data.rotate + 'deg)')
            .css('width', 'calc(' + data.width + ' + ' + scroll*data.scale + 'px)');
        });
        if (scroll > astro.data('scroll-dist') && scroll < astro.data('scroll-dist') + astro.height()){
            astro.find('.elem').each(function(){
            let data = $(this).data();  
            if ($(this).hasClass('space-station')){
                $(this).css('top', 'calc(' + data.y + ' + ' + (scroll - astro.data('scroll-dist')) * data['speedY'] + 'px)')
                .css('width', 'calc(' + data.width + ' + ' + (scroll - astro.data('scroll-dist')) * data.scale + 'px)');
            }
            else if ($(this).hasClass('astr')){
                $(this).css('left', 'calc('+ data.x + ' + ' + (scroll - astro.data('scroll-dist')) * data['speedX'] + 'px)')
                .css('top', 'calc(' + data.y + ' + ' + (scroll - astro.data('scroll-dist')) * data['speedY'] + 'px)')
                .css('transform', 'rotate(' + (scroll - astro.data('scroll-dist'))*data.rotate + 'deg)')
                .css('width', 'calc(' + data.width + ' + ' + (scroll - astro.data('scroll-dist'))*data.scale + 'px)');
            }
        });
    }
    });
});
