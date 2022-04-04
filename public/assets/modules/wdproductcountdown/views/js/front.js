/**
* 2007-2021 PrestaShop
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
*  @copyright  2007-2021 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
 */

if (typeof updateDisplay === 'function') {
    var updateDisplay_wdpc_original = updateDisplay;
    updateDisplay = function () {
        updateDisplay_wdpc_original();
        wdpc_refreshProductTimers();
    }
} else {
    $('.wdpc-combi-wrp:first').removeClass('wdpc-cw-hide').fadeIn(100);
}

$(function () {
    wdpc_initCountdown();

    $(document).on('click', '#grid', function(e){
        e.preventDefault();
        wdpc_initCountdown('.wdproductcountdown');
    });

    $(document).on('click', '#list', function(e){
        e.preventDefault();
        wdpc_initCountdown('.wdproductcountdown');
    });
});

function wdpc_initCountdown(selector) {
    selector = (selector ? selector : '.wdpc-inactive');
    $(selector).each(function(){
        var $wdpc = $(this);
        var $wdpc_container = $(this).parent('.wdpc-wrp');
        $wdpc_container = ($wdpc_container.length ? $wdpc_container : $wdpc);

        // get "to" date
        var to = $wdpc.data('to');
        if (typeof to === 'undefined' || !to) {
            return true;
        }
        // Check if "to" is a number or a string
        to = (isNaN(to) ? dateStringToTimestamp(to) : parseInt(to));

        $wdpc.addClass('wdproductcountdown').removeClass('wdpc-inactive');
        var $wdpc_main = $wdpc.find('.wdpc-main').clone();
        $wdpc.html('');
        if ($wdpc_main.length) {
            $wdpc_main.appendTo($wdpc);
        } else {
            $wdpc.append('<div class="wdpc-main" />');
        }
        $wdpc_main = $wdpc.find('.wdpc-main');

        var now = +new Date();
        if (!to || (to < now && (wdpc_hide_expired || wdpc_hide_after_end))) {
            $wdpc.hide();
            return true;
        }
// adjust countdown position at the page
        if (wdpc_adjust_positions) {
            var $parent = $wdpc_container.parents('.product-grid:first');
            if (wdpc_position_product === 'displayProductCountdowndisplayProductCountdown' && $parent.length) {
                $wdpc_container.detach().appendTo($parent);
            } else if (wdpc_position_list === 'over_img') {
                var $img = $wdpc_container.parents('.product-grid:first').find('.wdproducthover');
                $img = ($img.length ? $img : $wdpc_container.parents('.ajax_block_product:first').find('.wdproducthover'));
                if ($img.length) {
                    $wdpc_container.detach();
                    $img.after($wdpc_container);
                    $wdpc_container.parent().addClass('wdpc-parent');
                }
            }
        }
		
		
		if (wdpc_adjust_positions) {
            var $parent = $wdpc_container.parents('.product-list:first');
            if (wdpc_position_product === 'displayProductCountdown' && $parent.length) {
                $wdpc_container.detach().appendTo($parent);
            } else if (wdpc_position_list === 'over_img') {
                var $img = $wdpc_container.parents('.product-list:first').find('.highlighted-informations');
                $img = ($img.length ? $img : $wdpc_container.parents('.ajax_block_product:first').find('.highlighted-informations'));
                if ($img.length) {
                    $wdpc_container.detach();
                    $img.after($wdpc_container);
                    $wdpc_container.parent().addClass('wdpc-parent');
                }
            }
        }
		
		if (wdpc_adjust_positions) {
            var $parent = $wdpc_container.parents('.product-sort:first');
            if (wdpc_position_product === 'displayProductCountdown' && $parent.length) {
                $wdpc_container.detach().appendTo($parent);
            } else if (wdpc_position_list === 'over_img') {
                var $img = $wdpc_container.parents('.product-sort:first').find('.highlighted-informations');
                $img = ($img.length ? $img : $wdpc_container.parents('.ajax_block_product:first').find('.highlighted-informations'));
                if ($img.length) {
                    $wdpc_container.detach();
                    $img.after($wdpc_container);
                    $wdpc_container.parent().addClass('wdpc-parent');
                }
            }
        }
        if (typeof wdpc_callbackBeforeDisplay === 'function') {
            wdpc_callbackBeforeDisplay($wdpc, $wdpc_container);
        }

        var tpl = wdpc_countdown_tpl;
        var labels = wdpc_labels,
            template = _.template(tpl);
        var currDate = '00:00:00:00';
        var nextDate = '00:00:00:00';

        // Build the layout
        var initData = wdpc_strfobj(currDate);
        $wdpc_main.find('.wdpc-time').remove();
        labels.forEach(function(label, i) {
            $wdpc_main.append(template({
                curr: initData[label],
                next: initData[label],
                label: label,
                label_lang: wdpc_labels_lang[label]
            }));
        });
        // Start the countdown
        $wdpc_main.wdpccountdown(to, function(event) {
            var now = + new Date();
            var from = $wdpc.data('from');

            if (to < now && wdpc_hide_after_end) {
                $wdpc.hide(400);
            } else if (from) {
                from = dateStringToTimestamp(from);
                if (now < from) {
                    $wdpc.hide();
                } else {
                    $wdpc.show(300);
                }
            }

            var data;
            var newDate = event.strftime('%D:%H:%M:%S');

            if (newDate !== nextDate) {
                currDate = nextDate;
                nextDate = newDate;
                // Setup the data
                data = {
                    'curr': wdpc_strfobj(currDate),
                    'next': wdpc_strfobj(nextDate)
                };
                // Apply the new values to each node that changed
                wdpc_diff(data.curr, data.next).forEach(function(label) {
                    var selector = '.%s'.replace(/%s/, label),
                        $node = $wdpc_main.find(selector);
                    // Update the node
                    $node.removeClass('flip hidden');
                    $node.find('.wdpc-curr').text(data.curr[label]);
                    $node.find('.wdpc-next').text(data.next[label]);
                    // Wait for a repaint to then flip
                    _.delay(function($node) {
                        $node.addClass('flip');
                    }, 50, $node);
                });
            }
        });
    });
}
if (typeof initCountdown === 'undefined') {
    var initCountdown = wdpc_initCountdown;
}

// Parse countdown string to an object
function wdpc_strfobj(str) {
    var pieces = str.split(':');
    var obj = {};
    wdpc_labels.forEach(function(label, i) {
        obj[label] = pieces[i]
    });
    return obj;
}

// Return the time components that diffs
function wdpc_diff(obj1, obj2) {
    var diff = [];
    wdpc_labels.forEach(function(key) {
        if (obj1[key] !== obj2[key]) {
            diff.push(key);
        }
    });
    return diff;
}

function dateStringToTimestamp(dateString) {
    var dateTimeParts = dateString.split(' '),
        timeParts = dateTimeParts[1].split(':'),
        dateParts = dateTimeParts[0].split('-'),
        date;

    date = new Date(dateParts[0], parseInt(dateParts[1], 10) - 1, dateParts[2], timeParts[0], timeParts[1]);

    return date.getTime();
}

function wdpc_refreshProductTimers() {
    var id_pa = $('#idCombination').val();
    $('.wdpc-combi-wrp').hide().addClass('wdpc-cw-hide');
    if (id_pa) {
        $('.wdpc-cw-' + id_pa).removeClass('wdpc-cw-hide').fadeIn(100);
    } else {
        $('.wdpc-combi-wrp:first').removeClass('wdpc-cw-hide').fadeIn(100);
    }
}

var wdpc_countdown_tpl = '' +
    '<div class="wdpc-time <%= label %> <%= label == wdpc_highlight ? \'wdpc-highlight\' : \'\' %>">' +
        '<span class="wdpc-count wdpc-curr wdpc-top"><%= curr %></span>' +
        '<span class="wdpc-count wdpc-next wdpc-top"><%= next %></span>' +
        '<span class="wdpc-count wdpc-next wdpc-bottom"><%= next %></span>' +
        '<span class="wdpc-count wdpc-curr wdpc-bottom"><%= curr %></span>' +
        '<span class="wdpc-label"><%= label_lang %></span>' +
    '</div>';