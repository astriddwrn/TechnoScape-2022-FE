// $(window).on('load', function () {
//     $('#loading-page').hide();
// });
// $('#msg-error').hide();
// $('#msg-success').hide();

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
        var t1=1000, t2=1300, t3=2300, t4=2600, t5=3000;
    }
    else{
        var t1=700, t2=700, t3=1700, t4=2000, t5=2500;
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

        $('#paper-plane')
        .removeClass('paper-plane-active')
        .addClass('paper-plane-deactive');
    }, t4);

        setTimeout( ()=>{
            $('#btn-submit').removeClass('btn-disabled');
        }, t5);

}

// validation
$('form input').on('keypress', function(e){
    if(e.keyCode == 13){
        $('#btn-submit').click();
        e.preventDefault();
    }
});

$('#btn-submit').off('dblclick');

$('#btn-submit').on('click', () => {
    if($('#btn-submit').hasClass('btn-disabled')){
        return;
    }
    else{
        $('#btn-submit').addClass('btn-disabled');
    }
    $('#msg-error').slideUp();
    $('#msg-success').slideUp();
    if(!$('#input-email').val()){
        $('#msg-error').slideDown('fast');
        $('#msg-error').children('.text').text('Silakan masukkan alamat email Anda!');
        statusAnimate('#failed');
    }
    else{
        const regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        const validateEmail = regex.test($('#input-email').val())
        if(!validateEmail){
            $('#msg-error').slideDown('fast');
            $('#msg-error').children('.text').text('Alamat email yang Anda masukkan tidak valid! (Harus memiliki @ dan .)');
            statusAnimate('#failed');
        }
        else{
            // console.log('masukk');
            (async () => {
                let email = {email : document.getElementById("input-email").value};
                // console.log(email);
                await fetch('https://technoscape.id/api/subscription', {
                    method: 'POST',
                    body: JSON.stringify(email),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                .then(res => {
                    res.json().then(data => {
                        // console.log(data);
                        if (data.code == 200){
                            $('#msg-success').slideDown('fast');
                            statusAnimate('#done');
                        }
                        else if (data.code == 400) {
                            $('#msg-error').slideDown('fast');
                            $('#msg-error').children('.text').text('Alamat email yang Anda masukkan sudah ada.');
                            statusAnimate('#failed');
                        }
                        // console.log(data.code)
                    });
                })
            })()

            return;
        }
    }
});