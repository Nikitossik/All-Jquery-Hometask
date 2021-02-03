$(document).ready(function(){
    $('a[href^="#"]').click(function(){
        let path = $(this).attr('href');
        if ($(path)) window.scrollTo({top: 0, left: $(path).offset().left,behavior: 'smooth'}); 
        return false;
    });
});