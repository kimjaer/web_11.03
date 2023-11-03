$(document).ready(function () {

    setInterval(function(){
        $(".swiper-wrapper").animate({"marginLeft" : -1200}, 400, function(){
            $("div:first-child",this).appendTo($(this))
            $(this).css("marginLeft", 0)
        })
    
    },3000)

})