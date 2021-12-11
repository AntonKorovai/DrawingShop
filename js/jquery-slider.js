let offset = 0;
const sliderLine= document.querySelector('.carousel_line');
 
document.querySelector('.button_right').addEventListener('click', function() {
     offset = offset + 635;
     if (offset > 11720) {
         offset = 0;
     }
     sliderLine.style.left = -offset + 'px';
     
});

document.querySelector('.button_left').addEventListener('click', function() {
    offset = offset - 635;
    if (offset < 0) {
        offset = 11720;
    }
    sliderLine.style.left = -offset + 'px';
});

var img = document.querySelectorAll("#myImg");
var span = document.querySelectorAll(".close")

img.forEach(function(item){
    item.addEventListener("click", function(){
        item.parentNode.querySelector("#myModal").style.display = "block"
        item.parentNode.querySelector("#img01").src = item.src
        item.parentNode.querySelector("#caption").innerHTML = item.alt
        document.querySelector(".header_nav").style.zIndex = '-1';
        document.querySelector(".wrapper_header").style.border = "none";
        document.querySelector(".left_menu").style.zIndex = '-2';
    })
})

span.forEach(function(item){
    item.addEventListener("click", function(){
        item.parentNode.parentNode.parentNode.querySelector("#myModal").style.display = "none"
        document.querySelector(".header_nav").style.zIndex = '7';
        document.querySelector(".wrapper_header").style.borderBottom = "1px solid #eaeaea";
        document.querySelector(".left_menu").style.zIndex = '0';
    })
})



$(".nav_button").mouseenter(function(e){
    $el = $(e.currentTarget)
    $el.next().animate({width: '100%'});
});

$('.nav_button').click(function(){
    $('aside').addClass('aside_section_isActive')
    $('.wrapper_close_button_nav').addClass('button_close_nav_isActive')
    $('.aside_background_opacity').addClass('aside_opacity_isActive')
    $('.header_nav').addClass('header_menu_is_active')
});

$(".nav_button").mouseleave(function(e){
    $el = $(e.currentTarget)
    $el.next().animate({width: '0px'});
});

$('.left_menu_button').click(function(e){
    $el = $(e.currentTarget)
    $el.next().animate({width:'100%'});
})

$('.button_close_nav').click(function(){
    $('aside').removeClass('aside_section_isActive')
    $('.wrapper_close_button_nav').removeClass('button_close_nav_isActive')
    $('.aside_background_opacity').removeClass('aside_opacity_isActive')
    $('.header_nav').removeClass('header_menu_is_active')
})

$('.button_carousel_aside').mouseenter(function(e){
    $el = $(e.currentTarget)
    $el.animate({width:'55px'},300);
})

$('.button_carousel_aside').mouseleave(function(e){
    $el = $(e.currentTarget)
    $el.animate({width:'40px'},300);
})

$('.underlineNavElem_first').addClass('underline_is_active')

$('.underlineNavElem_left_menu_first').addClass('underline_is_active')

let offsetAside = 0;
const sliderLineAside = document.querySelector('.aside_carousel_frame')

document.querySelector('.button_right_aside').addEventListener('click', function() {
    offsetAside = offsetAside + 791;
    if (offsetAside > 791) {
        offsetAside = 0;
    }
    sliderLineAside.style.left = -offsetAside + 'px';
    
});

document.querySelector('.button_left_aside').addEventListener('click', function() {
    offsetAside = offsetAside - 791;
    if (offsetAside < 0) {
       offsetAside = 791;
    }
    sliderLineAside.style.left = -offsetAside + 'px';
});







/*const akline = document.querySelector('.akline');
 
document.querySelector('.button_right').addEventListener('click', function() {
    $wid = $('.boxer').width()
    offset = offset + $wid;
    if (offset > 11720) {
        offset = 0;
    }
    akline.style.left = -offset + 'px';
     
});

document.querySelector('.button_left').addEventListener('click', function() {
    offset = offset - $wid;
    if (offset < 0) {
        offset = 11720;
    }
    akline.style.left = -offset + 'px';
});
*/
