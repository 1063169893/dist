require.config({
    paths: {
        jquery: "jquery.min"
    }
});
require(['jquery'], function($) {
    $(window).scroll(function() {
        var stop = $(document).scrollTop();
        console.log()
        console.log(stop);
        if (stop > 150) {
            $('header').addClass('nav-topfixed');
        } else {
            $('header').removeClass('nav-topfixed');
        }
        if (stop > $('.women').eq(0).offset().top - 155) {
            $('#leftnav li').eq(0).addClass('index-nav').siblings().removeClass('index-nav');
            $('#leftnav').addClass('jsposition');
        } else {
            $('#leftnav').removeClass('jsposition');
        }
        if (stop > $('.women').eq(1).offset().top - 155) {
            $('#leftnav li').eq(1).addClass('index-nav').siblings().removeClass('index-nav');
        }
        if (stop > $('.women').eq(2).offset().top - 155) {
            $('#leftnav li').eq(2).addClass('index-nav').siblings('.index-nav').removeClass('index-nav');
        }
        if (stop > $('.women').eq(3).offset().top - 155) {
            $('#leftnav li').eq(3).addClass('index-nav').siblings('.index-nav').removeClass('index-nav');
        }
        if (stop > $('.women').eq(4).offset().top - 155) {
            $('#leftnav li').eq(4).addClass('index-nav').siblings('.index-nav').removeClass('index-nav');
        }
        if (stop > $('.women').eq(5).offset().top - 155) {
            $('#leftnav li').eq(5).addClass('index-nav').siblings('.index-nav').removeClass('index-nav');
        }
        if (stop > $('.women').eq(6).offset().top - 155) {
            $('#leftnav li').eq(6).addClass('index-nav').siblings('.index-nav').removeClass('index-nav');
        }
        if (stop > $('.women').eq(7).offset().top - 155) {
            $('#leftnav li').eq(7).addClass('index-nav').siblings('.index-nav').removeClass('index-nav');
        }
        if (stop > $('.women').eq(8).offset().top - 155) {
            $('#leftnav li').eq(8).addClass('index-nav').siblings('.index-nav').removeClass('index-nav');
        }
        if (stop > $('.women').eq(9).offset().top - 155) {
            $('#leftnav li').eq(9).addClass('index-nav').siblings('.index-nav').removeClass('index-nav');
        }
        if (stop > $('.women').eq(10).offset().top - 155) {
            $('#leftnav li').eq(10).addClass('index-nav').siblings('.index-nav').removeClass('index-nav');
        }
        // if (stop > $('.women').eq(11).offset().top - 155) {
        //     $('#leftnav li').eq(11).addClass('index-nav').siblings().removeClass('index-nav');
        // }
    });
    $('#leftnav li').on('click', function() {
        var index = $('#leftnav li').index(this);
        switch (index) {
            case 0:
                $('html,body').animate({ scrollTop: $('.women').eq(0).offset().top - 50 }, 500);
                break;
            case 1:
                $('html,body').animate({ scrollTop: $('.women').eq(1).offset().top - 50 }, 500);
                break;
            case 2:
                $('html,body').animate({ scrollTop: $('.women').eq(2).offset().top - 50 }, 500);
                break;
            case 3:
                $('html,body').animate({ scrollTop: $('.women').eq(3).offset().top - 50 }, 500);
                break;
            case 4:
                $('html,body').animate({ scrollTop: $('.women').eq(4).offset().top - 50 }, 500);
                break;
            case 5:
                $('html,body').animate({ scrollTop: $('.women').eq(5).offset().top - 50 }, 500);
                break;
            case 6:
                $('html,body').animate({ scrollTop: $('.women').eq(6).offset().top - 50 }, 500);
                break;
            case 7:
                $('html,body').animate({ scrollTop: $('.women').eq(7).offset().top - 50 }, 500);
                break;
            case 8:
                $('html,body').animate({ scrollTop: $('.women').eq(8).offset().top - 50 }, 500);
                break;
            case 9:
                $('html,body').animate({ scrollTop: $('.women').eq(9).offset().top - 50 }, 500);
                break;
            case 10:
                $('html,body').animate({ scrollTop: $('.women').eq(10).offset().top - 50 }, 500);
                break;
                // case 11:
                //     $('html,body').animate({ scrollTop: $('.women').eq(11).offset().top - 50 }, 500);
                //     break;
        }
    });
})