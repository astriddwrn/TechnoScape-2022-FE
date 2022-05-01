$(document).ready(() => {
    // FAQ
    $('.answer-container').hide();
    $('.question-button').click(function(){
        if($(this).parent().next().is(':visible')){
            $(this).parent().next().slideUp();
        }
        else{
            $(this).parent().next().slideDown();
        }
    });

    $('.event-day .title').each(function(){
        $(this).click(function(){
            // title
            $('.event-day').each(function (i, element) {
                $(element).removeClass('title-colored');
            });
            $(this).parent().addClass('title-colored');
            // cards
            $('.event-wrapper').each(function (i, element) {
                $(element).removeClass('event-active');
                $(element).children('.card-list').removeClass('card-list-active');
            });
            let index = $('.event-day .title').index($(this));
            $('.event-wrapper').eq(index).addClass('event-active');
            let length = $('.event-active .card-list').length;
            // transition card loop
            (function transitionLoop(i) {
                setTimeout(function() {
                    $('.event-active').children('.card-list').eq(i).addClass('card-list-active');            
                  if (++i<length) transitionLoop(i);  
                }, 200)
              })(0); 

        })
    })
});