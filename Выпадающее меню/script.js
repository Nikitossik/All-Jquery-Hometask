$(document).ready(function(){
    let navBtn = $('#nav_btn'),
        menu = $('.menu'),
        header = $('.header');

    $('.menu .drop_block').slideUp();

    navBtn.click(function(){
        $(this).toggleClass('clicked');
        menu.toggleClass('active');
        header.toggleClass('active');
        return false;
    });

    menu.find('.dropdown_btn').click(function(){
        if ($(this).find('i').hasClass('fa-caret-down')) $(this).find('i').removeClass('fa-caret-down').addClass('fa-caret-up');
        else $(this).find('i').removeClass('fa-caret-up').addClass('fa-caret-down');

        $(this).toggleClass('opened').next().slideToggle(300);
        $(this).siblings('.dropdown_btn').removeClass('opened').next().slideUp(300);
        $(this).siblings('.dropdown_btn').find('i').removeClass('fa-caret-up').addClass('fa-caret-down');
    });
});