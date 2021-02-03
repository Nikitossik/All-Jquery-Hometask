$(document).ready(function(){
    const changeBtn = $('#change_btn'), 
        back = $('.layer.background'),
        sun = $('.layer.sun'),
        moon = $('.layer.moon'),
        city = $('.layer.city'),
        hills = $('.layer.hills');

    

    changeBtn.click(function(){
        $(this).toggleClass('bright');
        sun.toggleClass('hidden');
        moon.toggleClass('hidden');

        if ($(this).hasClass('bright')) $(this).animate({backgroundColor: '#0A0B1F'}, 250);
        else $(this).animate({backgroundColor: '#FC8631'}, 250);

        if (sun.hasClass('hidden')) {
            sun.animate({top: '-=100', left:'+=600'}, 500, 'linear')
            .animate({top: 200, left:'+=600'}, 500, 'linear')
            .animate({top: 300, left:'+=600'}, 500, 'linear');
            back.removeClass('day').addClass('night');
            hills.animate({bottom: '-100%'}, 500);
            city.animate({bottom: '0%'}, 500);
        }
        else {
            sun.css({top: 300, left: -500});
            sun.animate({top: 200, left: 100}, 500);
        }

        if (moon.hasClass('hidden')) {
            moon.animate({top: '-=100', left:'+=600'}, 500, 'linear')
            .animate({top: 200, left:'+=600'}, 500, 'linear')
            .animate({top: 300, left:'+=600'}, 500, 'linear');
            back.removeClass('night').addClass('day');
            city.animate({bottom: '-100%'}, 500);
            hills.animate({bottom: '0%'}, 500);
        }
        else {
            moon.css({top: 300, left: -500});
            moon.animate({top: 200, left: 100}, 500);
        }

        return false;
    });
});