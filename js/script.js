$(document).ready(function() {

    $(document).ready(function() {
        $('.night-toggle').click(function() {
            $('.moon').toggleClass('sun');
            $('body').toggleClass('day-night');
            // $(":root").css({"--text-white" : "black"});
            // $(':root').css('--text-white' , '--text-black');
            $(':root').toggleClass('day-root');

            if($('.night-toggle .moon').hasClass('sun')) {
                $('.logo img').attr("src", "./images/Day-Logo.png");
                $('.upper-box img').attr("src", "./images/Day-Home-leftText.png");
                $('.bottom-content .left img').attr("src", "./images/Day-Product-Icon1.png");
                $('.bottom-content .middle img').attr("src", "./images/Day-Product-Icon2.png");
                $('.bottom-content .right img').attr("src", "./images/Day-Product-Icon3.png");
                $('.cases-col1-i1').attr("src", "./images/Day-Cases-subCol1-icon1.png");
                $('.cases-col1-i2').attr("src", "./images/Day-Cases-subCol1-icon2.png");
                $('.cases-col1-i3').attr("src", "./images/Day-Cases-subCol1-icon3.png");
                $('.cases-col1-i4').attr("src", "./images/Day-Cases-subCol1-icon4.png");

                $('.cases-col2-i1').attr("src", "./images/Day-Cases-subCol2-icon1.png");
                $('.cases-col2-i2').attr("src", "./images/Day-Cases-subCol2-icon2.png");
                $('.cases-col2-i3').attr("src", "./images/Day-Cases-subCol2-icon3.png");
                $('.cases-col2-i4').attr("src", "./images/Day-Cases-subCol2-icon4.png");

                $('.home-section .right-img').addClass('Day-right-img');
                $('.home-section .right-img').addClass('Day-right-img-vector');
                $('header').addClass('header-vector');
                $('.cases-section .upper-col').addClass('cases-vector1');
                $('.cases-section .lower-col').addClass('cases-vector2');

                $('.features-section img').attr("src" , "./images/Day-Features-rightCol-icon.png");

                $('.testimonial-section img').attr("src", "./images/Day-Testimonial-quote.png");
                $('.testimonial-section .slick-prev').addClass('day-prev');
                $('.testimonial-section .slick-next').addClass('day-next');

                $('.banner-section .banner-content').addClass('banner-vector');

                $('footer .contact .mail img').attr("src", "./images/Day-footer-mail-icon.png");
                $('footer .contact .call img').attr("src", "./images/Day-footer-call-icon.png");
                $('footer .contact .location img').attr("src", "./images/Day-footer-location-icon.png");

                $('footer .last-line .fb').attr("src", "./images/Day-footer-fb-icon.png");
                $('footer .last-line .twitter').attr("src", "./images/Day-footer-twitter-icon.png");
                $('footer .last-line .linkedin').attr("src", "./images/Day-footer-linkedin-icon.png");

                // Career Page Day
                $('.career-section .right-img').addClass('Day-right-img');
                $('.about-section .right-img').addClass('Day-right-img');
                $('.security-section .right-img').addClass('Day-right-img');

                $('.career-section .right-img').addClass('Day-right-img-vector');
                $('.about-section .right-img').addClass('Day-right-img-vector');
                $('.security-section .right-img').addClass('Day-right-img-vector');

                $('.benefit-section .i1').attr("src", "./images/Day-Benefit-upperCol-icon1.png");
                $('.benefit-section .i2').attr("src", "./images/Day-Benefit-upperCol-icon2.png");
                $('.benefit-section .i3').attr("src", "./images/Day-Benefit-lowerCol-icon1.png");
                $('.benefit-section .i4').attr("src", "./images/Day-Benefit-lowerCol-icon2.png");

                $('.benefit-section .main-content .row .col .sub-box').addClass('remove-bg');

                $('.mission-section .img1').attr("src", "./images/Day-Mission-img1.png");
                $('.mission-section .img2').attr("src", "./images/Day-Mission-img2.png");
                $('.mission-section .img1-mb').attr("src", "./images/Day-Mission-img1-mb.png");
                $('.mission-section .img2-mb').attr("src", "./images/Day-Mission-img2-mb.png");

                $('.press-release-section .img1').attr("src", "./images/Day-Press-release-img1.png");
                $('.press-release-section .img2').attr("src", "./images/Day-Press-release-img2.png");
                $('.press-release-section .img3').attr("src", "./images/Day-Press-release-img3.png");
                $('.press-release-section .img4').attr("src", "./images/Day-Press-release-img4.png");

                $('.protect-section .img1').attr("src", "./images/Day-Protect-upperCol-icon1.png");
                $('.protect-section .img2').attr("src", "./images/Day-Protect-upperCol-icon2.png");
                $('.protect-section .img3').attr("src", "./images/Day-Protect-lowerCol-icon1.png");
                $('.protect-section .img4').attr("src", "../images/Day-Protect-lowerCol-icon2.png");

                $('.protect-section .main-content .row').addClass('bg-none');
                $('.protect-section .main-content .row .col .sub-box').addClass('Day-bg');

                $('.FAQ-section .main-content .row .col .para').addClass('Day-para');
            }
            else {
                $('.logo img').attr("src", "./images/Logo.png");
                $('.upper-box img').attr("src", "./images/Home-leftText.png");
                $('.bottom-content .left img').attr("src", "./images/Product-Icon1.png");
                $('.bottom-content .middle img').attr("src", "./images/Product-Icon2.png");
                $('.bottom-content .right img').attr("src", "./images/Product-Icon3.png");
                $('.cases-col1-i1').attr("src", "./images/Cases-subCol1-icon1.png");
                $('.cases-col1-i2').attr("src", "./images/Cases-subCol1-icon2.png");
                $('.cases-col1-i3').attr("src", "./images/Cases-subCol1-icon3.png");
                $('.cases-col1-i4').attr("src", "./images/Cases-subCol1-icon4.png");

                $('.cases-col2-i1').attr("src", "./images/Cases-subCol2-icon1.png");
                $('.cases-col2-i2').attr("src", "./images/Cases-subCol2-icon2.png");
                $('.cases-col2-i3').attr("src", "./images/Cases-subCol2-icon3.png");
                $('.cases-col2-i4').attr("src", "./images/Cases-subCol2-icon4.png");

                $('.home-section .right-img').removeClass('Day-right-img');
                $('.home-section .right-img').removeClass('Day-right-img-vector');
                $('header').removeClass('header-vector');
                $('.cases-section .upper-col').removeClass('cases-vector1');
                $('.cases-section .lower-col').removeClass('cases-vector2');

                $('.features-section img').attr("src" , "./images/Features-rightCol-icon.png");

                $('.testimonial-section img').attr("src", "./images/Testimonial-quote.png");
                $('.testimonial-section .slick-prev').removeClass('day-prev');
                $('.testimonial-section .slick-next').removeClass('day-next');

                $('.banner-section .banner-content').removeClass('banner-vector');

                $('footer .contact .mail img').attr("src", "./images/footer-mail-icon.png");
                $('footer .contact .call img').attr("src", "./images/footer-call-icon.png");
                $('footer .contact .location img').attr("src", "./images/footer-location-icon.png");

                $('footer .last-line .fb').attr("src", "./images/footer-fb-icon.png");
                $('footer .last-line .twitter').attr("src", "./images/footer-twitter-icon.png");
                $('footer .last-line .linkedin').attr("src", "./images/footer-linkedin-icon.png");


                // Career Page Day
                $('.career-section .right-img').removeClass('Day-right-img');
                $('.about-section .right-img').removeClass('Day-right-img');
                $('.security-section .right-img').removeClass('Day-right-img');

                $('.career-section .right-img').removeClass('Day-right-img-vector');
                $('.about-section .right-img').removeClass('Day-right-img-vector');
                $('.security-section .right-img').removeClass('Day-right-img-vector');

                $('.benefit-section .i1').attr("src", "./images/Benefit-upperCol-icon1.png");
                $('.benefit-section .i2').attr("src", "./images/Benefit-upperCol-icon2.png");
                $('.benefit-section .i3').attr("src", "./images/Benefit-lowerCol-icon1.png");
                $('.benefit-section .i4').attr("src", "./images/Benefit-lowerCol-icon2.png");

                $('.benefit-section .main-content .row .col .sub-box').removeClass('remove-bg');

                $('.mission-section .img1').attr("src", "./images/Mission-img1.png");
                $('.mission-section .img1-mb').attr("src", "./images/Mission-img1-mb.png");
                $('.mission-section .img2').attr("src", "./images/Mission-img2.png");
                $('.mission-section .img2-mb').attr("src", "./images/Mission-img2-mb.png");

                $('.press-release-section .img1').attr("src", "./images/Press-release-img1.png");
                $('.press-release-section .img2').attr("src", "./images/Press-release-img2.png");
                $('.press-release-section .img3').attr("src", "./images/Press-release-img3.png");
                $('.press-release-section .img4').attr("src", "./images/Press-release-img4.png");

                $('.protect-section .img1').attr("src", "./images/Protect-upperCol-icon1.png");
                $('.protect-section .img2').attr("src", "./images/Protect-upperCol-icon2.png");
                $('.protect-section .img3').attr("src", "./images/Protect-lowerCol-icon1.png");
                $('.protect-section .img4').attr("src", "../images/Protect-lowerCol-icon2.png");

                $('.protect-section .main-content .row').removeClass('bg-none');

                $('.protect-section .main-content .row .col .sub-box').removeClass('Day-bg');

                $('.FAQ-section .main-content .row .col .para').removeClass('Day-para');

            }            
            
        });
        
    });


    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('.menu').toggleClass('active-menu');
    });

    $('header ul li').click(function() {
        $('header ul li').removeClass('active-li');
        $(this).addClass('active-li');
    });
    

    
    $('.testimonial-section .secondary-btn').click(function() {
        $('.ind-filter').removeClass('active-tab');
        $('.bs-filter').removeClass('active-tab');
        $(this).toggleClass('active-tab');
    });
    $('.our-product-section .secondary-btn').click(function() {
        $('.ind-btn').removeClass('active-tab');
        $('.bs-btn').removeClass('active-tab');
        $(this).toggleClass('active-tab');
    });
    $('header .secondary-btn').click(function() {
        $('.login-btn').removeClass('active-tab');
        $('.sign-up-btn').removeClass('active-tab');
        $(this).toggleClass('active-tab');
    });

    $('.filtering').slick({
        infinite: false,
        slidesToShow: 3,
        responsive : [
            {
            breakpoint : 769,
            settings : {
                slidesToShow : 2,
            }
            },
            {
            breakpoint : 577,
            settings : {
                slidesToShow : 1,
            }
            }
        ]
    });
    var filtered_bs = false;
    var filtered_ind = true;
    $('.bs-filter').on('click' , function(){
        if(filtered_bs === false) {
            $('.filtering').slick('slickUnfilter' , '.ind');
            $('.filtering').slick('slickFilter' , '.bs');
            filtered_bs = true;
            filtered_ind = false;
        };
    });
    $('.ind-filter').on('click' , function(){
        if(filtered_ind === false) {
            $('.filtering').slick('slickUnfilter' , '.bs');
            $('.filtering').slick('slickFilter' , '.ind');
            filtered_ind = true;
            filtered_bs = false;
        };
    });

    // FAQ Section Script
    $('.load-btn').click(function() {
        $('.FAQ-section .main-content .row .col').removeClass('hide-col');
        $('.FAQ-section .para').addClass('loaded')
        $(this).hide()
    });

    // Features Section Tabbing
    var mixer = mixitup('.right-col');

    $('.features-section .primary-btn').click(function() {
        $('.features-section .primary-btn').removeClass('active-btn')
        $(this).addClass('active-btn');
    })


});

// let moon = localStorage.getItem('.moon');
// if (!moon) {
//     moon = '.sun';
//     localStorage.setItem('.moon', '.sun');
// }
// localStorage.setItem('.sun', '.moon');
// moon = localStorage.getItem('.moon');
