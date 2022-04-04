/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */
/* --------------------------- TmplateTrip JS ------------------------------ */

/* ----------- Start Page-loader ----------- */
$(window).load(function() {
    $(".wdloading-bg").fadeOut("slow");
})
/* ----------- End Page-loader ----------- */

	/* ----------- Start flexslider ----------- */
	$(window).load(function() {
		if($('.flexslider').length > 0){ 
			$('.flexslider').flexslider({	
				slideshowSpeed: $('.flexslider').data('interval'),
				pauseOnHover: $('.flexslider').data('pause'),
				animation: "fade"
			});
		}
	});
	/* ----------- End flexslider ----------- */

/* ------------ Start Content-width JS --------------- */
function contentwidth() {
	colsWidth = $('#right-column, #left-column').length;
	if($( window ).width() >= 1200) {
		$( "#content-wrapper" ).addClass( "Cwidth" );
		$( "#left-column" ).addClass( "Lwidth" );
		$( "#right-column" ).addClass( "Rwidth" );
		if (colsWidth == 2) {
			$('.Cwidth').css('width', '60%');
			$('.Lwidth').css('width', '20%');
			$('.Rwidth').css('width', '20%');
		} else if (colsWidth == 1) {
			$('.Cwidth').css('width', '80%');
			$('.Lwidth').css('width', '20%');
			$('.Rwidth').css('width', '20%');
		} else {
			$('.Cwidth').css('width', '100%');
		}
	} else if($( window ).width() > 991) {
		$( "#content-wrapper" ).addClass( "Cwidth" );
		$( "#left-column" ).addClass( "Lwidth" );
		$( "#right-column" ).addClass( "Rwidth" );
	if (colsWidth == 2) {
		$('.Cwidth').css('width', '60%');
		$('.Lwidth').css('width', '20%');
		$('.Rwidth').css('width', '20%');
		$("#right-column" ).addClass("Rtoggle" );
		$("#right-column h1.text-uppercase").click(function() {
			$(this).parent().toggleClass('active').find('.rightcolumn-toggle').slideToggle( "200" );
		});
	} else if (colsWidth == 1) {
		$('.Cwidth').css('width', '78%');
		$('.Lwidth').css('width', '22%');
		$('.Rwidth').css('width', '22%');
	} else {
		$('.Cwidth').css('width', '100%');
	}
	} else {
	$("#content-wrapper").removeClass("Cwidth");
	$("#left-column").removeClass("Lwidth");
	$("#right-column").removeClass("Rwidth");
	$("#right-column" ).removeClass("Rtoggle" );
	$('#content-wrapper').removeAttr("style");
	$('#left-column').removeAttr("style");
	$('#right-column').removeAttr("style");
	} 
}
$(document).ready(function(){contentwidth();});
$(window).resize(function() {contentwidth();});

/* ------------ End Content-width JS --------------- */

$(document).ready(function() {
						   
	$("#product-comments-list-header").click(function(){
			$(this).toggleClass("active");
			$(".product-comments-list-main").slideToggle();
	});

    /* Go to Top JS START */
    if ($('#goToTop').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#goToTop').addClass('show');
                } else {
                    $('#goToTop').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#goToTop').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    /* Go to Top JS END */


    /*-----------End Product spinner ------------*/
	$('.flexslider .slides li').each(function(i) {
		$(this).attr('id', 'slide'+(i+1));
	});

	
    $(".block-contact,.footer-container .block-social").wrapAll("<div class='social-contact links col-sm-3'></div>");



    /* ----------- Start WebDigify User-info ----------- */
	
	$('.wduserheading').click(function(event){
	$(this).toggleClass('active');
	event.stopPropagation();
	$(".user-info").slideToggle("fast");
	$(".header-top .wdsearchtoggle").slideUp("slow");
	$(".language-selector-wrapper .dropdown-menu").slideUp("slow");
	$(".currency-selector .dropdown-menu").slideUp("slow");
	$(".language-selector").removeClass("open");
	$(".currency-selector").removeClass("open");
	$("#search_widget").removeClass("active");
	$("body").removeClass("search-open");
	$("body").removeClass("language-open");
	$("body").removeClass("currency-open");
	$("body").toggleClass("user-open");
	});
	$(".user-info").on("click", function (event) {
	event.stopPropagation();
	});



	/*---------------- Start Search ---------------- */

    $(".full-header .wdsearch_button").click(function() {
        $('.full-header .wdsearchtoggle').parent().toggleClass('active');
        $(".user-info").css('display', 'none');
        $(".wduserheading").removeClass("active");
        $('.full-header .wdsearchtoggle').toggle('fast', function() {});
        $('.full-header #search_query_top').attr('autofocus', 'autofocus').focus();
    });
    /*---------------- End Search ---------------- */	

/*--------------- Start langauge-currency toggle -----------*/
	$(".language-selector-wrapper").click(function() {
		$(".header-top .wdsearchtoggle").slideUp("slow");
		$("#search_widget").removeClass("active");
		$(".user-info").slideUp("fast");
		$(".wduserheading").removeClass("active");
		$("body").removeClass("search-open");
		$("body").toggleClass("language-open");
		$("body").removeClass("currency-open");
		$("body").removeClass("user-open");
	});
	
	$(".currency-selector").click(function() {
		$(".header-top .wdsearchtoggle").slideUp("slow");
		$("#search_widget").removeClass("active");
		$(".user-info").slideUp("fast");
		$(".wduserheading").removeClass("active");
		$("body").removeClass("search-open");
		$("body").removeClass("language-open");
		$("body").toggleClass("currency-open");
		$("body").removeClass("user-open");
	});
	
	/*--------------- Start newsletter popup close -----------*/
		 $(".wdpopupclose").click(function() {
        $("#wdPopupnewsletter").removeClass("in");
        $("#wdPopupnewsletter").css('display', 'none');
        $(".modal-backdrop").remove();
        $("body").removeClass("modal-open");
		$("body").css('padding-right', '0');
    });

	/*--------------- End langauge-currency toggle -----------*/

/* -------------- Start Homepage Tab ------------------- */

$("#hometab").prepend("<div class='tabs'><ul class='nav nav-tabs'></ul></div>");
$("#hometab .wdfeatured-products .tab-title").wrap("<li class='nav-item'><a class='nav-link' data-toggle='tab' href='#wdfeatured-content'></a></li>");
$("#hometab .wdbestseller-products .tab-title").wrap("<li class='nav-item'><a class='nav-link' data-toggle='tab' href='#wdbestseller-content'></a></li>");
$("#hometab .wdnew-products .tab-title").wrap("<li class='nav-item'><a class='nav-link' data-toggle='tab' href='#wdnew-content'></a></li>");
$("#hometab .tabs ul.nav-tabs").append($("#hometab > section li.nav-item"));

$("#hometab > section.wdfeatured-products").wrap("<div class='tab-pane row fade' id='wdfeatured-content'>");
$("#hometab > section.wdbestseller-products").wrap("<div class='tab-pane row fade' id='wdbestseller-content'>");
$("#hometab > section.wdnew-products").wrap("<div class='tab-pane row fade' id='wdnew-content'>");
$("#hometab > .tab-pane").wrapAll("<div class='home-tab-content' id='home-tab-content' />");
$("#hometab").append($("#hometab > .home-tab-content"));

$('#hometab .tabs ul.nav-tabs > li:first-child a').addClass('active');
$('#hometab #home-tab-content .tab-pane:first-child').addClass('in active');
$(".homebg .wd-title,#hometab .tabs").wrapAll("<div class='wd-titletab'/>");

/* -------------- End Homepage Tab ------------------- */

		$("#_desktop_cart,#_mobile_cart").hover(
			function () {
				$("body").toggleClass("cart_hover");
			},
		);

    /* ----------- End WebDigify User-info ----------- */

	   var wdleftnew = $('.new-products .new_product .products').owlCarousel({
				items : 1, //1 items above 1000px browser width
				nav : false,
				dots : false,
				loop: false,
				autoplay:false,	
				pagination:false,
				rtl:false,
				responsive: {
					0:{
						items:1
					},
					768:{
						items:1
					},
					992:{
						items:1
					},
					1200:{
						items:1
					}
				}
			});
		// Custom Navigation Events
      $(".wdleftnew_prev").click(function(){
			wdleftnew.trigger('prev.owl.carousel',[700]);
	  })
	  $(".wdleftnew_next").click(function(){
		 	wdleftnew.trigger('next.owl.carousel',[700]);
	  })

 	/* ----------- carousel For new-products ----------- */

	


    /* ----------- carousel For viewproduct ----------- */

	 var viewproduct = $('.view-product .products').owlCarousel({
				items : 6, //1 items above 1000px browser width
				nav : false,
				dots : false,
				loop: true,
				autoplay:false,	
				rtl:false,
				responsive: {
					0:{
						items:1
					},
					320:{
						items:2
					},
					544:{
						items:3
					},
					768:{
						items:3
					},
					1200:{
						items:4
					},
					1500:{
						items:5
					}
				}
			});

		// Custom Navigation Events
      $(".viewproduct_prev").click(function(){
			viewproduct.trigger('prev.owl.carousel',[700]);
	  })
	  $(".viewproduct_next").click(function(){
		 	viewproduct.trigger('next.owl.carousel',[700]);
	  })
    /* ----------- carousel For Crossselling ----------- */

	 var Crossselling = $('.crossselling-product .products').owlCarousel({
				items : 6, //1 items above 1000px browser width
				nav : false,
				dots : false,
				loop: true,
				autoplay:false,	
				rtl:false,
				responsive: {
					0:{
						items:1
					},
					320:{
						items:2
					},
					544:{
						items:3
					},
					768:{
						items:3
					},
					1200:{
						items:4
					},
					1500:{
						items:5
					}
				}
			});

		// Custom Navigation Events
      $(".Crossselling_prev").click(function(){
			Crossselling.trigger('prev.owl.carousel',[700]);
	  })
	  $(".Crossselling_next").click(function(){
		 	Crossselling.trigger('next.owl.carousel',[700]);
	  })
    /* ----------- carousel For Categoryproducts ----------- */

	   var Categoryproducts = $('.category-products .products').owlCarousel({
				items : 6, //1 items above 1000px browser width
				nav : false,
				dots : false,
				loop: true,
				autoplay:false,	
				rtl:false,
				responsive: {
					0:{
						items:1
					},
					320:{
						items:2
					},
					544:{
						items:3
					},
					768:{
						items:3
					},
					1200:{
						items:4
					},
					1500:{
						items:5
					}
				}
			});

		// Custom Navigation Events
      $(".Categoryproducts_prev").click(function(){
			Categoryproducts.trigger('prev.owl.carousel',[700]);
	  })
	  $(".Categoryproducts_next").click(function(){
		 	Categoryproducts.trigger('next.owl.carousel',[700]);
	  })

    /* ----------- carousel For accessories ----------- */
	  var accessories = $('.product-accessories .products').owlCarousel({
				items : 6, //1 items above 1000px browser width
				nav : false,
				dots : false,
				loop: true,
				autoplay:false,	
				rtl:false,
				responsive: {
					0:{
						items:1
					},
					320:{
						items:2
					},
					544:{
						items:3
					},
					768:{
						items:3
					},
					1200:{
						items:4
					},
					1500:{
						items:5
					}
				}
			});
		// Custom Navigation Events
      $(".accessories_prev").click(function(){
			accessories.trigger('prev.owl.carousel',[700]);
	  })
	  $(".accessories_next").click(function(){
		 	accessories.trigger('next.owl.carousel',[700]);
	  })
    

	var wdproductthumbs = $('#wdproduct-thumbs').owlCarousel({
				items : 4, //1 items above 1000px browser width
				nav : false,
				dots : false,
				loop: false,
				autoplay:false,	
				rtl:false,
				navigationText: [
				"<i class='material-icons'>&#xE5CB;</i>",
				"<i class='material-icons'>&#xE5CC;</i>"
				],
				responsive: {
					0:{
						items:1
					},
					481:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:4
					}
				}
			});
	

    /* ----------- End Carousel Productpage Thumbs ----------- */

    /* -----------Start carousel For WD- brand logo ----------- */

	var wdbrandlogo = $('#wdbrandlogo-carousel').owlCarousel({
				items : 5, //1 items above 1000px browser width
				nav : false,
				dots : false,
				loop: true,
				autoplay:true,	
				autoplayHoverPause:true,
				rtl:false,
				responsive: {
					0:{
						items:2
					},
					481:{
						items:2
					},
					544:{
						items:3
					},
					992:{
						items:4
					},
					1200:{
						items:5
					}
				}
			});
		// Custom Navigation Events
      $(".wdbrandlogo_prev").click(function(){
			wdbrandlogo.trigger('prev.owl.carousel',[700]);
	  })
	  $(".wdbrandlogo_next").click(function(){
		 	wdbrandlogo.trigger('next.owl.carousel',[700]);
	  })

    /* -----------End carousel For WD brand logo ----------- */
	




	
	
	/* -----------Start carousel For services-carousel----------- */
	
		var services = $('.services-carousel').owlCarousel({
				items : 4, //1 items above 1000px browser width
				nav : false,
				dots : false,
				loop: false,
				autoplay:true,	
				autoplayHoverPause:true,
				rtl:false,
				navText: [
				"<i class='material-icons'>&#xE5CB;</i>",
				"<i class='material-icons'>&#xE5CC;</i>"
				],
				responsive: {
					0:{
						items:1
					},
					481:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:3
					},
					1200:{
						items:4
					}
				}
			});

    /* -----------End carousel For services-carousel ----------- */

/* ----------- End bestseller JS ----------- */
var featured = $('.featured-products .products').owlCarousel({
	items : 6, //1 items above 1000px browser width
	nav : false,
	dots : false,
	loop: true,
	rtl:false,
	responsive: {
		0:{
			items:1
		},
		320:{
			items:2
		},
		544:{
			items:3
		},
		768:{
			items:3
		},
		1200:{
			items:4
		},
		1500:{
			items:5
		}
		
	}
});
 	 // Custom Navigation Events
$(".featuredproduct_prev").click(function(){
	featured.trigger('prev.owl.carousel',[800]);
})
$(".featuredproduct_next").click(function(){
	featured.trigger('next.owl.carousel',[800]);
})

/* ----------- Start Smart Blog JS ----------- */

	var smartblog = $('#smartblog-carousel').owlCarousel({
	items : 4, //1 items above 1000px browser width
	nav : false,
	dots : false,
	loop: true,
	rtl:false,
	responsive: {
		0:{
			items:1
		},
		510:{
			items:1
		},
		544:{
			items:2
		},
		992:{
			items:3
		},
		1201:{
			items:4
		}
		
	}
});


	 // Custom Navigation Events
$(".wdblog_prev").click(function(){
smartblog.trigger('prev.owl.carousel',[800]);
})
$(".wdblog_next").click(function(){
smartblog.trigger('next.owl.carousel',[800]);
})


    /* ---------------- End WebDigify more menu ----------------------*/

    /* ----------- Start WebDigify AddToCart Button ----------- */

    $(".wd-button-container .add-to-cart").mousedown(function() {
        var form_className = $(this).parent().attr('class');
        $(this).parent().attr('id', form_className);

        var hidden_page_className = $(this).parent().find('.product-quantity .product_page_product_id').attr('class');
        $(this).parent().find('.product-quantity .product_page_product_id').attr('id', hidden_page_className);

        var customization_className = $(this).parent().find('.product-quantity .product_customization_id').attr('class');
        $(this).parent().find('.product-quantity .product_customization_id').attr('id', customization_className);

        var quantity_className = $(this).parent().find('.product-quantity .quantity_wanted').attr('class');
        $(this).parent().find('.product-quantity .quantity_wanted').attr('id', quantity_className);
    });

    $(".wd-button-container .add-to-cart").mouseup(function() {
        $(this).parent().removeAttr('id');
        $(this).parent().find('.product-quantity > input').removeAttr('id');
    });

    /* ----------- End WebDigify AddToCart Button ----------- */

    productadditional("#wd-jqzoom");
	subcategories("#subcategories ul");
	$('#zoom1').zoom();

	initialize_owl($('#owl1'));
	
		$('a[href="#wdfeatured-content"]').on('shown.bs.tab', function () {
			initialize_owl($('#owl1'));
		}).on('hide.bs.tab', function () {
			destroy_owl($('#owl1'));
		});
	
		$('a[href="#wdbestseller-content"]').on('shown.bs.tab', function () {
			initialize_owl($('#owl2'));
		}).on('hide.bs.tab', function () {
			destroy_owl($('#owl2'));
		});
	
		$('a[href="#wdnew-content"]').on('shown.bs.tab', function () {
			initialize_owl($('#owl3'));
		}).on('hide.bs.tab', function () {
			destroy_owl($('#owl3'));
		});
	
  });

  function initialize_owl(el) {
    el.owlCarousel({
        items : 6, //1 items above 1000px browser width
		nav : false,
		dots : false,
		loop: true,
		autoplay:false,	
		autoplayHoverPause:true,
		responsive: {
			0:{
				items:1
			},
			320:{
				items:2
			},
			544:{
				items:3
			},
			768:{
				items:3
			},
			1200:{
				items:4
			},
			1500:{
				items:5
			}
		}
    });

	// Custom Navigation Events

	  $(".wdfeature_prev,.wdbestseller_prev,.wdnew_prev").click(function(){
			el.trigger('prev.owl.carousel',[700]);
	  })
	  $(".wdfeature_next,.wdbestseller_next,.wdnew_next").click(function(){
		 	el.trigger('next.owl.carousel',[700]);
	  })

}

function destroy_owl(el) {
    if(typeof el.data('owlCarousel') != 'undefined') {
		el.data('owlCarousel').destroy();
		el.removeClass('owl-carousel');
	}
}



  
function productadditional(productId){
	var wdadditional = $(productId).owlCarousel({
		items : 3, //1 items above 1000px browser width
		nav : true,
		dots : false,
		loop: false,
		autoplay:false,	
		rtl:false,
		navText: [
		"<i class='material-icons'>&#xE5CB;</i>",
		"<i class='material-icons'>&#xE5CC;</i>"
		],
		responsive: {
			0:{
				items:2
			},
			544:{
				items:3
			},
			768:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:3
			}
		}
	});
}

/* ----------- carousel For sub categories ----------- */

function subcategories(subId){	
	var wdcategories = $(subId).owlCarousel({
		items : 4, //1 items above 1000px browser width
		nav : false,
		dots : false,
		loop: false,
		autoplay:true,	
		pagination:false,
		rtl:false,
		responsive: {
			0:{
				items:1
			},
			480:{
				items:2
			},
			650:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});
	}
	/* ----------- carousel For sub categories ----------- */

/*****************start animation script*******************/
	function hb_animated_contents() {
		$(".hb-animate-element:in-viewport").each(function (i) {
		var $this = $(this);
		if (!$this.hasClass('hb-in-viewport')) {
			setTimeout(function () {
				$this.addClass('hb-in-viewport');
				}, 180 * i);
				}
			});
	}
		
		$(window).scroll(function () {
			hb_animated_contents();
		});
		$(window).load(function () {
			hb_animated_contents();
		});
	
/*****************end animation script*******************/
/* Start Homepage header JS */

function header() {
    if (jQuery(window).width() > 1200) {
        if (jQuery(this).scrollTop() > 246) {
            jQuery('.full-header').addClass("fixed");
        } else {
            jQuery('.full-header').removeClass("fixed");
        }
    } else {
        jQuery('.full-header').removeClass("fixed");
    }
}

$(document).ready(function() {
    header();
});
jQuery(window).resize(function() {
    header();
});
jQuery(window).scroll(function() {
    header();
});

/* End Homepage header JS */

/*--------- Start js for left-column -------------*/

function responsivecolumn() {
    if ($(document).width() <= 991) {
        $('.container #left-column').insertAfter('#content-wrapper');
    } else if ($(document).width() >= 992) {
        $('.container #left-column').insertBefore('#content-wrapper');
    }
}
$(document).ready(function() {
    responsivecolumn();
});
$(window).resize(function() {
    responsivecolumn();
});


/*--------- End js for left-right-column -------------*/

/*--------- Start js for menu -------------*/

function responsivemenu() {
    if ($(document).width() <= 991) {
        $('.container_wd_horizontalmenu').insertBefore('#_mobile_logo');
    } else if ($(document).width() >= 992) {
        $('.container_wd_horizontalmenu').insertAfter('#_desktop_logo');
    }
}
$(document).ready(function() {
    responsivemenu();
});
$(window).resize(function() {
    responsivemenu();
});
/*--------- End js for menu -------------*/



/*--------- Start js for menu -------------*/

function responsivewish() {
    if ($(document).width() <= 1199) {
        $('.header-wishtlist').appendTo('.user-info');
        $('.header-compare').appendTo('.user-info');
    } else if ($(document).width() >= 1200) {
        $('.header-wishtlist').insertAfter('#_desktop_user_info');
        $('.header-compare').insertAfter('#_desktop_user_info');
    }
}
$(document).ready(function() {
    responsivewish();
});
$(window).resize(function() {
    responsivewish();
});
/*--------- End js for menu -------------*/

		function stickyleft() {
				if ($(document).width() <= 1199) {
					jQuery('#content-wrapper, #left-column, #right-column').theiaStickySidebar({
			  additionalMarginBottom: 30,
			  additionalMarginTop: 70
			});
				} else if ($(document).width() >= 1200) {
					jQuery('#content-wrapper, #left-column, #right-column').theiaStickySidebar({
			  additionalMarginBottom: 30,
			  additionalMarginTop: 170
			});
				}
				}
			$(document).ready(function() {
				stickyleft();
			});
			$(window).resize(function() {
				stickyleft();
			});


/* ------------ Start Grid List JS --------------- */


function bindGrid() {
    var view = localStorage.getItem('display');
        display(view);
		
}
function display(view) {

	if (view === null || localStorage.getItem('display') == 'grid') {
		$('.grid_view').trigger('click');
	}
	else if (localStorage.getItem('display') == 'list') {
		$('.list_view').trigger('click');
	} 
	else if (localStorage.getItem('display') == 'sortlist') {
		$('.sort_view').trigger('click');
	}
	else if (localStorage.getItem('display') == 'grid2') {
		$('.grid_view2').trigger('click');
	}
	else if (localStorage.getItem('display') == 'list2') {
		$('.list_view2').trigger('click');
	}
	
	//Grid	
    $(document).on('click', '.grid_view', function(e) {
        localStorage.setItem('display', 'grid');
    });
    //List
    $(document).on('click', '.list_view', function(e) {
        localStorage.setItem('display', 'list');
    });
    //ShortList
    $(document).on('click', '.sort_view', function(e) {
        localStorage.setItem('display', 'sortlist');
	});
	//ShortList
    $(document).on('click', '.grid_view2', function(e) {
        localStorage.setItem('display', 'grid2');
	});
	//ShortList
    $(document).on('click', '.list_view2', function(e) {
        localStorage.setItem('display', 'list2');
    });
}



$(document).ready(function(){
	bindGrid();
});
/* ------------ End Grid List JS --------------- */


// Qty Plus Minus
function qtyminus(product_id) {
  var input = $("input[data-id='input-quantity-" + product_id + "']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
      var minValue = parseInt(input.attr('min'));
      if (!minValue) minValue = 1;
      if (currentVal > minValue) {
          input.val(currentVal - 1).change();
      }
      if (parseInt(input.val()) == minValue) {
          $(this).attr('disabled', true);
      }
  }
  else {
      input.val(1);
  }
}

function qtyplus(product_id) {
  var input = $("input[data-id='input-quantity-" + product_id + "']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
      var maxValue = parseInt(input.attr('max'));
      if (!maxValue) maxValue = 999;
      if (currentVal < maxValue) {
          input.val(currentVal + 1).change();
          $('.dis-' + product_id).prop('disabled', false);    
      }
      if (parseInt(input.val()) == maxValue) {
          $(this).attr('disabled', true);
      }
  }
  else {
      input.val(1);
  }
}