$(document).ready(function(){
    $('.scroll-link').click(function(e){
        e.preventDefault();
        const destino = $(this).data('target');
        const targetOffset = $('#' + destino).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset
        },1500)
    })    
})