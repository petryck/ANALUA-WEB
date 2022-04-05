/**
 * 2007-2021 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2021 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
*/

$(document).ready(function() {

    /* ----------- Start Carousel For Topcategories  ----------- */
	var wdcategoryfeature = $('#wd_cat_featured').owlCarousel({
		items : 5, //1 items above 1000px browser width
		// nav : true,
		loop: true,
		// autoplay:true,	
		onmouseover: true,
		// autoplaySpeed: 700,
		// smartSpeed:450,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:5
        },
		1400:{
            items:5
        }
    }
	});
// Custom Navigation Events
$(".wdcategoryfeature_next").click(function(){
	wdcategoryfeature.trigger('next.owl.carousel',[700]);
})
$(".wdcategoryfeature_prev").click(function(){
	 wdcategoryfeature.trigger('prev.owl.carousel',[700]);
})



// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     loop:true,
//     nav:true,
//     margin:10
// });


// $('.owl-carousel').owlCarousel({
// 	items:5,
//     loop:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// });
// owl.on('mousewheel', '.owl-stage', function (e) {
//     if (e.deltaY>0) {
//         owl.trigger('next.owl');
//     } else {
//         owl.trigger('prev.owl');
//     }
//     e.preventDefault();
// });

    /* ----------- End Carousel For Topcategories  ----------- */
});


