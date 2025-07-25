//navigation.js

$(function(){
    $('.gnb > li').mouseenter(function(){
        $(this).find('.lnb').stop().slideDown(600);
    }).mouseleave(function(){
        $('.lnb').stop().slideUp(600);
    });

});