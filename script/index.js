//index.js

// 스크롤 header 처리
$(window).on('scroll', function(){
    var scTop = $(this).scrollTop();
    var vh = $('body').height();

    //console.log(scTop + '\n' + vh);

    if(scTop > vh) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
});

$(function(){
    //main text effect
    //$('main .intro-txt').delay(200).fadeIn(1200);
    $('main .intro-txt').animate({
        top: '50%',
        opacity: 1
    }, 800);

    //modal 
    $('.box1 a, .box2 a').on('click', function(e){
        e.preventDefault();

        $('#modal').show();
    });

    $('#modal .close').on('click', function(){
        $('#modal').hide();
    });
});