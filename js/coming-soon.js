$(window).on('load', function () {
    $('#loading-page').hide();
}) 
$('#msg-error').hide();
$('#msg-success').hide();

$('.btn-close').on('click', function(){
    $(this).parent().slideUp('fast');
});

$('#input-email').on('focus', () => {
    $(this).addClass('shadow-bsInput');
});
$('#input-email').on('blur', () => {
    $(this).removeClass('shadow-bsInput');
});

const statusAnimate = (sts) => {
    if(sts==='#done'){
        $('#paper-plane')
        .removeClass('paper-plane-deactive')
        .addClass('paper-plane-active');
        var t1=1000, t2=1300, t3=2300, t4=2600;
    }
    else{
        var t1=700, t2=700, t3=1700, t4=2000;
    }

    $('#btn-submit')
        .addClass('notify-active-up');

    setTimeout(() => {
        $('#btn-submit')
        .removeClass('notify-active-up')
        .addClass('notify-active-down');
    }, t1);

    setTimeout(() => {
        $(sts)
        .removeClass('status-deactive')
        .addClass('status-active-middle');
        $(sts+'-icon')
        .addClass('icon-animate');
        $(sts)
        .addClass('text-animate');
    }, t2);

    setTimeout(() => {
        $(sts)
        .removeClass('status-active-middle')
        .addClass('status-active-up');
    }, t3);

    setTimeout(() => {
        $('#btn-submit')
        .removeClass('notify-active-down');
        $(sts)
        .removeClass('status-active-up')
        .addClass('status-deactive');
        $(sts+'-icon')
        .removeClass('icon-animate');
        $(sts)
        .removeClass('text-animate');
    }, t4);
}

// validation
$('#btn-submit').on('click', () => {
    if(!$('#input-email').val()){
        $('#msg-error').slideDown('fast');
        $('#msg-error').children('.text').text('Silakan masukan alamat email-mu!');
        statusAnimate('#failed');
    }
    else{
        const regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        const validateEmail = regex.test($('#input-email').val())
        if(!validateEmail){
            $('#msg-error').slideDown('fast');
            $('#msg-error').children('.text').text('Alamat email yang kamu masukan tidak valid! (Harus memiliki @ dan .)');
            statusAnimate('#failed');
        }
        else{
            $('#msg-error').slideUp();
            statusAnimate('#done');
            return;
        }
    }
});