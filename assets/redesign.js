$( document ).ready( function() {
//  $( document ).on( 'click', '.read-more-btn', function() {
//         $( this ).toggleClass( 'active' );
//         $( '.dropdown-content' ).toggleClass( 'active' );
//     });

 
  
  
  
    var ua = detect.parse(navigator.userAgent);

    $( 'html' ).addClass( ua.browser.family );
    console.clear();
    console.log(ua.browser.family);

    if($( window ).width() > 767) {
        $(".banner-video.banner-img").append('<video playsinline="true" disablePictureInPicture autoplay="true" muted="muted" id="videoTeaser" loop="true"><source id="videoTeaserSource" src="https://cdn.shopify.com/s/files/1/2373/2631/files/girl_3.mp4?v=1603183149" type="video/mp4"></video>')
    }
    $( window ).resize(function() {
        if($( window ).width() > 767) {
            if(!($(".banner-video.banner-img").find($("#videoTeaser")))){
                $(".banner-video.banner-img").append('<video playsinline="true" disablePictureInPicture autoplay="true" muted="muted" id="videoTeaser" loop="true"><source id="videoTeaserSource" src="https://cdn.shopify.com/s/files/1/2373/2631/files/girl_3.mp4?v=1603183149" type="video/mp4"></video>')
            }
        }
    });
    var videoTeaser = document.getElementById( 'videoTeaser' );
    if (videoTeaser) {
        videoTeaser.oncanplaythrough = function () {
            videoTeaser.play();
        }
    }

    if ($( window ).width() <= 1200) {
        $( '.header__nav' ).css({ 'height': 'calc(100vh - ' + $( ".header__top" ).outerHeight() + 'px)' });
    }

    if ($( window ).width() <= 767) {
        $( '.section-heading__more' ).each( function() {$( this ).appendTo($( this ).closest( '.container' ))});
//       $('.js-toogle-dropdown-content').addClass( 'active' );
//      	$( '.js-toogle-read-more-btn' ).addClass( 'active' );
    }

    if ($( window ).width() <= 1200) {
        $( '.read-more-col' ).insertAfter( '.collection-footer .content' );
        $( '.article-pd' ).insertBefore( '.article-share .social-sharing' );
        $( '.article-side .article-tags' ).insertAfter( '.article-share' );
    }

    var ccc = parseInt($( '.header__cart-active' ).text());
    $( '.product-single .product-form__cart-submit' ).click( function () {
        ccc = ccc + parseInt($( '.product-single .js-qty input' ).val());
        $( '.header__cart-active' ).text( ccc );
    });

    $( '.cart-layout .js-qty button.js-qty__adjust--minus' ).click( function () {
        var ipc = parseInt($( this ).siblings('input').val());
        ipc = ipc - 1;
        $( this ).siblings('input').val( ipc );

        ccc = 0;
        $( '.cart-layout .js-qty input' ).each( function () {
            ccc += parseInt($( this ).val());
        });
        $( '.header__cart-active' ).text( ccc );
    });

    $( '.cart-layout .js-qty button.js-qty__adjust--plus' ).click( function () {
        var ipc = parseInt($( this ).siblings('input').val());
        ipc = ipc + 1;
        $( this ).siblings('input').val( ipc );

        ccc = 0;
        $( '.cart-layout .js-qty input' ).each( function () {
            ccc += parseInt($( this ).val());
        });
        $( '.header__cart-active' ).text( ccc );
    });
});

$( window ).on( 'scroll', function() {
    if ($( window ).scrollTop() > 300) {
        $( '.up' ).addClass( 'active' );
    } else {
        $( '.up' ).removeClass( 'active' );
    }
});

$( 'body' ).on( 'click', '.up', function () {
    var body = $("html, body");
    body.stop().animate({scrollTop:0}, 500, 'swing', function() {});
});

$( 'body' ).on( 'click', '.blog-tags li.current', function() {
    if ($( window ).width() <= 767) {
        $( '.blog-tags li:not(.current)' ).slideToggle();
        $( '.blog-tags' ).toggleClass( 'active' );
    }
});

$( 'body' ).on( 'click', '.header__nav-toggle', function() {
    $( '.header__nav' ).slideToggle('300');
    $( '.header__nav' ).toggleClass( 'active' );
    $( '.header__actions' ).toggleClass( 'active' );
    $( 'body, html' ).toggleClass( 'ovh' );
    $( this ).toggleClass( 'active' );
    $( '.header__top' ).toggleClass( 'active' );
});

$( 'body' ).on( 'click', '.read-more-col', function() {
    $( this ).toggleClass( 'active' );
    $( '.collection-footer .content' ).toggleClass( 'active' );
});

$( 'body' ).on( 'change', '#sortCollestions', function() {
    window.location = '?sort_by=' + $( this ).val();
});

$( 'body' ).on( 'click', '.recoverAcc', function() {
    $( '#CustomerLoginForm, #RecoverPasswordForm' ).slideToggle();
});

$( 'body' ).on( 'click', '.cancel', function() {
    $( '#CustomerLoginForm, #RecoverPasswordForm' ).slideToggle();
});

$( 'body' ).on( 'click', '.add-address-toggle', function() {
    $( '.add-address' ).slideToggle();
    $( '.address-heading .title' ).toggle();
});
//
// $( 'body' ).on( 'click', '.order-form-wrap .cancel', function() {
//     $( this ).closest( '.addresses-layout' ).find('.edit-address').slideToggle();
// });

$( 'body' ).on( 'click', '.edit, .order-form-wrap .cancel', function() {
    $( this ).closest( '.addresses-layout, .addresses-list-m' ).find('.edit-address, .add-address').slideToggle();
});



$( 'body' ).on( 'click', '.alert__close', function() {
    $( '.alert' ).remove();
});

// $( 'body' ).on( 'submit', '.buy form', function( e ) {
//     e.preventDefault();
//     if ( $( '.alert' ).length == 0 ) {
//         $( '<div class="alert"><span>Item added to cart. <a href="/cart">View card and checkout.</a></span><span class="alert__close"></span></div>' ).insertAfter( '.breadcrumbs nav' );
//     }
// });

$( 'body' ).on( 'click', '.product-form__cart-submit', function() {
    if ( $( '.alert' ).length == 0 ) {
        $( '<div class="alert"><span>Item added to cart. <a href="/cart">View card and checkout.</a></span><span class="alert__close"></span></div>' ).insertAfter( '.breadcrumbs nav' );
    }
});

$( 'body' ).on( 'click', '.faqTitle', function() {
    $(this).parent().toggleClass('active');
    $(this).parent().find('.faqContent').slideToggle();
});
$('.slider').slick({
    slidesToShow:3,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 601,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
        ]
})
