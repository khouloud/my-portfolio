//fonction eb jquerry qui permet de scroller vers le lien qui commence par un #

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (elem) {
        elem.preventDefault();

        var lien = this.hash;
        var $lien = $(lien);


        $('html, body').stop().animate({
            'scrollTop': $lien.offset().top
        }, 900, 'swing', function () {
            window.location.hash = lien;
        });
    });
});

//*****************jQuery change hash while scrolling down page**************************/
$(document).bind('scroll',function(e){
    $('section').each(function(){
        if (
            $(this).offset().top < window.pageYOffset + 10
//begins before top
            && $(this).offset().top + $(this).height() > window.pageYOffset + 10
//but ends in visible area
//+ 10 allows you to change hash before it hits the top border
        ) {
            window.location.hash = $(this).attr('id');
            if (window.location.hash=="#about"){
                $('#photoshop').removeClass("photoshop").addClass("photoshop");
                $('#illustrator').removeClass("illustrator").addClass("illustrator");
                $('#wordpress').removeClass("wordpress").addClass("wordpress");
                $('#css').removeClass("css").addClass("css");
                $('#html5').removeClass("html5").addClass("html5");
                $('#jquery').removeClass("jquery").addClass("jquery");
                /*$('.photoshop').css({"-webkit-animation":"photoshop 2s ease-out"});
                 $('.photoshop').css({"-moz-animation":"photoshop 2s ease-out"});*/
            }
        }
    });
});


// fonction de jquery permettant le preloader

$(window).load(function() {
    $('#status')
        .animate(
        { top: '+=50px' }, {
            duration: 'slow',
            easing: 'easeOutBack'
        })

        .animate(
        { top: '-=50px' }, {

            duration: 'slow',
            easing: 'easeOutBack'
        });


    //$( "#status" ).toggle( "bounce", { times: 3 }, "slow" );

    $("#preloader").delay(1500).fadeOut("slow");
})

//	Animated header


$(function(){
    var shrinkHeader = 150;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if ( scroll >= shrinkHeader ) {
            $('.nav-nav').addClass('shrink');
            $('#logo img').first().attr("src",'images/logo%20coco.png');
            console.log("#logo img");
        }
        else {
            $('.nav-nav').removeClass('shrink');
            $('#logo img').first().attr("src",'images/logo%20cocob.png');

        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});


//fonction de jquery permettant de scroller vers le haut

$(window).scroll(function () {
    if ($(this)
            .scrollTop() > 100) {
        $('.scrollToTop')
            .fadeIn();
    } else {
        $('.scrollToTop')
            .fadeOut();
    }
});

$('.scrollToTop').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});


jQuery(function($) {


    // settings
    var $slider = $('.slider'); // class or id of carousel slider
    var $slide = 'li'; // could also use 'img' if you're not using a ul
    var $transition_time = 1000; // 1 second
    var $time_between_slides = 4000; // 4 seconds

    function slides(){
        return $slider.find($slide);
    }

    slides().fadeOut();
    // set active classes
    slides().first().addClass('active');
    slides().first().fadeIn($transition_time);
    // auto scroll
    $interval = setInterval(
        function(){
            var $i = $slider.find($slide + '.active').index();

            slides().eq($i).removeClass('active');
            slides().eq($i).fadeOut($transition_time);

            if (slides().length == $i + 1) $i = -1; // loop to start

            slides().eq($i + 1).fadeIn($transition_time);
            slides().eq($i + 1).addClass('active');
        }
        , $transition_time +  $time_between_slides
    );

});