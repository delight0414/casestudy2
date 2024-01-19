$(function(){
    const mainSwiper = new Swiper(".mainSwiper", {
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
        },
        pagination: {
        el: ".swiper-pagination",
        }
    });
    const subSwiper = new Swiper(".subSwiper", {
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: {
            delay: 0
        },
        speed: 6000,
    });

    $("#gnb .gnb_inner > ul > li").hover(function(){
    if($(this).children().length == 2) {
        $("#gnb .gnb_inner > ul > li").removeClass("on");
        $(this).addClass("on");
        $("#gnb .gnb_inner > ul > li").removeClass("active");
        $(this).addClass("active");
        $("#gnb .dum").addClass("active");
    }
    else {
        $("#gnb .gnb_inner > ul > li").removeClass("on");
        $(this).addClass("on");
        $("#gnb .dum").removeClass("active");
    }
    },
    function(){
        $(this).removeClass("on");
        $(this).removeClass("active");
        $("#gnb .dum").removeClass("active");
    });
    $("#gnb .gnb_inner > ul > li > a").focusin(function(){
        if($(this).next().length == 1){
            $("#gnb .gnb_inner > ul > li").removeClass("on");
            $(this).parent().addClass("on");
            $("#gnb .gnb_inner > ul > li").removeClass("active");
            $(this).parent().addClass("active");
            $("#gnb .dum").addClass("active");
        }
        else {
            $("#gnb .gnb_inner > ul > li").removeClass("active");
            $(this).parent().addClass("active");
            // $("#gnb .gnb_inner > ul > li").removeClass("active");
            $("#gnb .dum").removeClass("active");      
        }
    });

    $("#gnb ul ul.twoDepth li:last-child ul.threeDepth li:last-child").focusout(function(){
    if($("#gnb .gnb_inner > ul > li > a").next().length == 1) {
        $("#gnb .gnb_inner > ul > li").removeClass("active");
        $("#gnb .gnb_inner > ul > li").removeClass("on");
    }
    else {
        $("#gnb .gnb_inner > ul > li").removeClass("on");
    }
    });
    $("#gnb li ul.twoDepth li a").focusin(function(){
        $(this).parent().addClass("on");
    });
    $("#gnb li ul.threeDepth li:last-child a").focusout(function(){
        $("#gnb li ul.twoDepth li").removeClass("on");
    });
});