var brk_added_libraries={},uniqueUrls={};function brk_lazyload(){$("[data-brk-library]:not(.lazyloaded):not(.lazyload)").addClass("lazyload")}function brs_add_libraries_lazy(e){var r=e.split(",");for(i in r)void 0===brk_added_libraries[r[i]]&&(brk_added_libraries[r[i]]=1,brs_add_libraries_enqueue(r[i]))}function g(e){if(void 0!==libraries[e].dependency)for(i in libraries[e].dependency)void 0===brk_added_libraries[libraries[e].dependency[i]]&&(brk_added_libraries[libraries[e].dependency[i]]=1,brs_add_libraries_enqueue(libraries[e].dependency[i]));if(void 0!==libraries[e].css)for(i in libraries[e].css)uniqueUrls[libraries[e].css[i]]||(uniqueUrls[libraries[e].css[i]]=!0,console.log("CSS added: "+libraries[e].css[i]),$("head").append('<link rel="stylesheet"  href="'+libraries[e].css[i]+'">'));if(void 0!==libraries[e].js)for(i in libraries[e].js)uniqueUrls[libraries[e].js[i]]||(uniqueUrls[libraries[e].js[i]]=!0,console.log("JS added: "+libraries[e].js[i]),$.cachedScript(libraries[e].js[i]).done(function(i,e){context=$("body"),Berserk.attachBehaviors(context,Berserk.settings)}))}window.lazySizesConfig=window.lazySizesConfig||{},window.lazySizesConfig.expand=1200,brk_lazyload(),$("body").bind("DOMNodeInserted",function(){}),addEventListener("lazybeforeunveil",function(i){var e=i.target.getAttribute("data-brk-library");e&&brs_add_libraries_lazy(e)});