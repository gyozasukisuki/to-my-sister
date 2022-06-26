function fadeAnime(){

    $('.fadeUpTrigger').each(function(){
        var elemPos = $(this).offset().top-25;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll >= elemPos - windowHeight){
            $(this).addClass('fadeUp');
        }else{
            $(this).removeClass('fadeUp');
        }
    });
}

$(window).scroll(function(){
    fadeAnime();
});