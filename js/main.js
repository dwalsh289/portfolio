$(document).ready(function() {
    // for responsiveness
    checkSize();

    $(window).resize(checkSize);

    //flip effect//
    $('.flip-container').click(function (e) {
        $(this).toggleClass('flipped');
        $(".clubOverlay").fadeOut();
    });


});

//Function to the css rule
function checkSize(){
    if ($(".sampleClass").css("float") == "none" ){
        // your code here
    }
}



// //popover//
// $(document).ready(function(){
//     $('[data-toggle="popover"]').popover();
// });
//
//
// // //image bob effect//
// var balloon = $('.imageOne');
// function runIt() {
//     balloon.animate({top:'+=15'}, 1200);
//     balloon.animate({top:'-=15'}, 1000, runIt);
// }
//
// runIt();
//
// var balloonTwo = $('.imageTwo');
// function runItTwo() {
//     balloonTwo.animate({top:'+=15'}, 1200);
//     balloonTwo.animate({top:'-=15'}, 1000, runItTwo);
// }
//
// runItTwo();

$(window).resize(function() {
    if ($(window).width() < 768) {
        $('#leadFlip').removeClass("pull-right").addClass("center-block");

    }
});


// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 170) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".page-scroll").addClass("color-change-on-scroll");

    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".page-scroll").removeClass("color-change-on-scroll");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});
