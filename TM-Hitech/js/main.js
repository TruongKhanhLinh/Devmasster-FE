
//Scroll

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
     if (scroll >= 50) {
        //clearHeader, not clearheader - caps H
        $(".header-menu").addClass("active-header-menu");
        $(".header-list-menu ul").addClass("menu-header-active");
        $(".scroll-top").addClass("active-scroll"); // Scroll Menu - Mobile
        $(".header-top").addClass("active-header-menu-mobile");
    } 
    else {
        $(".header-menu").removeClass("active-header-menu");
        $(".header-list-menu ul").removeClass("menu-header-active");
        $(".scroll-top").removeClass("active-scroll");
         $(".top").removeClass("active-header-menu-mobile");
    }
    }); //missing );  

// Scroll Menu 



// Click
$(document).ready(function() {
    $(".icon-menu-mobile").click(function() {
        /* Act on the event */
        console.log('123');
        $(".header-list-menu").slideToggle();
    }); 
        // Menu - Mobile
        // Chống lag Link 
        $(".header-list-menu").click(function (event) {
        });
        $(".header-list-menu ul li a").click(function (event) {
        });
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        }); //missing );
    });

// Sự Kiện Click




//tab
            // b1 : Thêm sự kiện Click
        $('.next-tab-top ul li a').click(function(){
            // b2 : ẫn tất cả các class đang được chọn (active) 
            $('.next-tab-top ul li a').removeClass('active');
            // b3 : Hiện class được chọn 
            $(this).addClass('active');
            // b4 : thêm biến data - Cái đang được click sẽ lấy ra data-tab
            let data = $(this).attr('data-tab');
            // b5 : ẫn tất cả các phần content - của class content-tab đag được chọn
            $('.content-tab').removeClass('active');
            // b6 : hiện content - của class content-tab đang được chọn
            $('#'+data).addClass('active');
        });

        $(function() {
    //tab click function
});

// Sự kiện Next Tab



// scroll To Top

$(".scroll-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// Show - Search

// show search
$('.btn-show-search').click(function() {
    $('.modal-search').addClass('active');
});
$('.search_close').click(function() {
    $('.modal-search').removeClass('active');
});

    //


// 

// click images

// Active menu
$(document).ready(function() {
 $(".list-menu-header ul li a  ").click(function(event){
    $('.list-menu-header ul li a').removeClass('active-menu-destop');
    $(this).addClass('active-menu-destop');
});
});


// carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// menu-mobile

$(document).ready(function( $ ) {
    $("#menu-mobile").mmenu({
     "extensions": [
     "fx-menu-zoom",
     "pagedim-black",
     "theme-dark"
     ]
 });
});




    