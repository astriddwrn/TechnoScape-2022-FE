$(document).ready(function() {
    // rundown
    $('.see-rundown').click(function(){
        $('.popup-rundown').removeClass('hidden');
        $('.popup-rundown').animate({opacity: 1});
    })
    $('.close-rundown').click(function(){
        $('.popup-rundown').animate({opacity: 0},
            function(){
                $('.popup-rundown').addClass('hidden');
            });
    })

    
    $('.wrapper-section.hidden').animate({opacity: 0});

    $('.next-btn').click(function(){
        // $(this).parents('.wrapper-section').addClass('hidden');
        $(this).parents('.wrapper-section').next().removeClass('hidden');
        $(this).parents('.wrapper-section').animate({opacity: 0},
            function(){
                $(this).next().animate({opacity: 1});
                $(this).addClass('hidden');
            });
        let index = $(this).parents('.wrapper-section').index();
        $('.step').eq(index).removeClass('current');
        $('.step').eq(index).addClass('before');
        $('.step').eq(index+1).addClass('current');
    });
    $('.prev-btn').click(function(){
        // $(this).parents('.wrapper-section').addClass('hidden');
        $(this).parents('.wrapper-section').prev().removeClass('hidden');
        $(this).parents('.wrapper-section').animate({opacity: 0}, 
            function(){
                $(this).prev().animate({opacity: 1});
                $(this).addClass('hidden');
            })
        let index = $(this).parents('.wrapper-section').index();
        $('.step').eq(index).removeClass('current');
        $('.step').eq(index-1).removeClass('before');
        $('.step').eq(index-1).addClass('current');
    })
});