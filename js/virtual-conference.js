$(document).ready(() => {
    // FAQ
    $('.faq-button').click(function(){
        if( $(this).siblings('.answer-container').hasClass('active')){
            $(this).siblings('.answer-container').removeClass('active');
            $(this).siblings('.answer-container').css('max-height', '0px');
        }
        else{
            $('.answer-container').each(function(){
                $(this).removeClass('active');
                $(this).css('max-height', '0px');
                console.log('hi');
            });
            $(this).siblings('.answer-container').addClass('active');
            setHeight(this);
        }
    });

    function setHeight(a){
        let faq_height = document.getElementsByClassName('active')[0].scrollHeight+'px';
        console.log(faq_height);
        $('.answer-container.active').css('max-height', faq_height);  
    }
    //end faq

    //event
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
    //end event 

    //share
    $('.share-button').click(function(){
        console.log('hi');
        $(this).addClass('active');
    });
    //end share
});