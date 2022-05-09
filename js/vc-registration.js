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

    $('.ticket-container').click(function(){
        $(this).children().children("input[type=radio]").prop('checked', true);
        if((this).hasClass('free-ticket-container')){
            $('.free-title').removeClass('hidden');
            $('.free-requirements').removeClass('hidden');
            $('.paid-title').addClass('hidden');
            $('.paid-requirements').addClass('hidden');
        }else{
            $('.free-title').addClass('hidden');
            $('.free-requirements').addClass('hidden');
            $('.paid-title').removeClass('hidden');
            $('.paid-requirements').removeClass('hidden');
        }
    });

    $('.next-btn').click(function(){
        if($(this).hasClass('submit-btn') && !$('input[type=file]').val()){
            console.log($(this).eq())
            alert('no file');
            return;
        }
        if($(this).hasClass('checkout-btn')){
            if($('#ticket-free').is(':checked')){
                $('.free-title').removeClass('hidden');
                $('.free-requirements').removeClass('hidden');
                $('.paid-title').addClass('hidden');
                $('.paid-requirements').addClass('hidden');
            }else{
                $('.free-title').addClass('hidden');
                $('.free-requirements').addClass('hidden');
                $('.paid-title').removeClass('hidden');
                $('.paid-requirements').removeClass('hidden');
            }
        }
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

    $('#input-proof').change(function(){
        if($('input[type=file]').val()){
            $('.input-wrapper').addClass('hidden');
            var filename = $('input[type=file]').val().replace(/C:\\fakepath\\/i, '');
            console.log(filename);
            $('.file-name').html(filename);
            $('.inputed-wrapper').removeClass('hidden');
        }
    })
    $('.remove-file').click(function() {
        $('.input-wrapper').removeClass('hidden');
        $('.inputed-wrapper').addClass('hidden');
        $('input[type=file]').val('');
    });
});