!function(t){Berserk.behaviors.cfa__page_init={attach:function(e,n){var a=t(".embed-responsive:not(.rendered)");a.length&&(a.addClass("rendered"),a.each(function(){var n=t(this),a=t(this).find(".overlay-image"),e=t(this).find(".icon__btn"),r='<iframe class="yt-iframe" src="'+t(this).data("embed")+'?rel=0&mute=1&autoplay=1" allowfullscreen></iframe>';e.on("click",function(e){a.css("display","none"),n.get(0).insertAdjacentHTML("beforeend",r),e.preventDefault()})}).addClass("rendered"))}}}(jQuery);