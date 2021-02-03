$(document).ready(function(){
    let changeBtn = $('#change_btn'),
        header = $('.header'),
        heading = header.find('h1');

    changeBtn.click(function(){
        $(this).toggleClass('animated');

        header.toggleClass('animated');
        heading.toggleClass('changed');
        if(heading.hasClass('changed')) heading.text('Day');
        else heading.text('Night');
        return false;
    });
});