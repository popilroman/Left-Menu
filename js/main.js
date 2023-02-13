$(document).ready(function () {
    
    $(".menu__button").on("click", function(e) {
        e.preventDefault();
        $(".menu").toggleClass("menu__active");
        $(this).toggleClass("button__click");
        $(".content").toggleClass("content__active");
    });

});