!function(c){Berserk.behaviors.promo_init={attach:function(r,o){c(".brk-promo-crcl:not(.rendered)").addClass("rendered").each(function(){var r=c(this).find(".brk-promo-crcl__circle"),o=c(this).find(".brk-promo-crcl__cards-container"),n=c(this).find(".brk-promo-crcl__content"),a=c(this).find(".brk-promo-crcl__bg");c(this).waypoint({handler:function(){r.addClass("brk-promo-crcl__circle_animdated"),o.addClass("brk-promo-crcl__cards-container_animated"),n.addClass("brk-promo-crcl__content_animated"),a.addClass("brk-promo-crcl__bg_animated")},offset:"50%"})}),c(".brk-promo-orbit:not(.rendered)").addClass("rendered").each(function(){var r=c(this);c(this).waypoint({handler:function(){r.addClass("brk-promo-orbit_animated")},offset:"50%"})})}}}(jQuery);