$(document).ready(function(){
    $(".mainImg").slick({
        dots:true,
        prevArrow:$(".leftBtn"),
        nextArrow:$(".rightBtn"),
        autoplay:true,
        autoplaySpeed:100,
    })
    
    $(".pauseBtn").click(function(){
        $(".pauseBtn").toggleClass("play");
        if($(".pauseBtn").hasClass("play")){
            $(".mainImg").slick("slickPause")
        }else if(!$(".pauseBtn").hasClass("play")){
            $(".mainImg").slick("slickPlay")
        }
    })
})