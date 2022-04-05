/*
* 2007-2020 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
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
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2020 PrestaShop SA
*  @version  Release: $Revision$
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
$(document).ready(function(){
    /* ----------- carousel For wdspecial ----------- */

				var wdspecial = $('.wdspecial-products .products').owlCarousel({
				items : 5, //1 items above 1000px browser width
				nav : false,
				dots : false,
				loop: false,
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
      $(".wdspecial_prev").click(function(){
			wdspecial.trigger('prev.owl.carousel',[700]);
	  })
	  $(".wdspecial_next").click(function(){
		 	wdspecial.trigger('next.owl.carousel',[700]);
	  })
	  

});
