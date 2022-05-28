$(document).ready(function(){
    'use strict';

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);
    alert("Thanks For Watching :)")

    $(window).scroll(function(){
        // sticky navbar on scroll script
        $(window).on('scroll', function () {
            if ($(document).scrollTop() > 200) {
                $(".navbar").css({ "background-color": "#ffffff", "transition": "all 0.8s ease-in-out", "box-shadow": "0px 3px 4.6px 0.3px rgba(0, 0, 0, 0.25)" });
                $(".navbar-collapse").css("background-color", "transparent");
            } else {
                $(".navbar").css({ "background-color": "transparent", "box-shadow": "none" });
            }
        });
        
        

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Coder", "Web Developer", "Designer", "Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Coder", "Web Developer", "Designer", "Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

var counter=1;
setInterval(function(){
    document.getElementById('radio' +counter).checked = true;
    counter++;
    if(counter>6){
        counter = 1;
    }
}, 4000);