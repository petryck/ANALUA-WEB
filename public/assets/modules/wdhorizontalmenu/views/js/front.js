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
	$('#wd-menu-horizontal .title-horizontalmenu-mobile').click(function() { 
		$('.title-horizontalmenu-mobile').toggleClass('active');
		$(".user-info").css('display','none');
		$('body').toggleClass('active'); 
		$('.horizontalmain-menu').slideToggle("2000"); 
	}); 
	}); 
	$(document).ready(function(){ 
		$(".container_wd_horizontal .wdmenu-content ul.horizontalmenu-content > li.parent").hover(
		function () {
			$("body").toggleClass("menu_hover");
		},
	);
});

function menuToggle() {
	if($( window ).width() <= 991) {		
		
		$(".wd-menu-horizontal .parent .icon-drop-mobile").remove(".icon-drop-mobile");
		$(".wd-menu-horizontal .parent > .wdinnermenu").after("<span class='icon-drop-mobile'></span>");
		
		$(".wd-menu-horizontal .parent .icon-drop-mobile").unbind("click");
		$(".wd-menu-horizontal .parent .icon-drop-mobile").click(function() {
			$(this).parent().toggleClass("active").find(".menu-dropdown").first().slideToggle();
		});
	}
	else {
		$(".wd-menu-horizontal .parent .icon-drop-mobile").remove(".icon-drop-mobile");
	}
}
$(document).ready(function() {menuToggle();});
$( window ).resize(function(){menuToggle();});
