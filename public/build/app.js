!function t(e,o,n){function r(a,s){if(!o[a]){if(!e[a]){var d="function"==typeof require&&require;if(!s&&d)return d(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var f=o[a]={exports:{}};e[a][0].call(f.exports,function(t){var o=e[a][1][t];return r(o?o:t)},f,f.exports,t,e,o,n)}return o[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)r(n[a]);return r}({1:[function(t,e,o){(function(e){var o,n;n="undefined"!=typeof window?window.wp.hooks:"undefined"!=typeof e?e.wp.hooks:null,o="undefined"!=typeof window?window.jQuery:"undefined"!=typeof e?e.jQuery:null,window.PP_Modules={Portfolio_Interface:t("./portfolio/Portfolio_Interface"),Item_Data:t("./lazy/Item_Data"),Abstract_Lazy_Loader:t("./lazy/Abstract_Lazy_Loader")},o(document).ready(function(){var e;o("body").hasClass("PP_Portfolio")&&(e=new(t("./core/Photography_Portfolio")),e.ready())}),t("./portfolio/start"),t("./gallery/popup"),t("./lazy/start")}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./core/Photography_Portfolio":2,"./gallery/popup":4,"./lazy/Abstract_Lazy_Loader":5,"./lazy/Item_Data":6,"./lazy/start":8,"./portfolio/Portfolio_Interface":10,"./portfolio/start":12}],2:[function(t,e,o){(function(t){var o,n,r,i=function(t,e){return function(){return t.apply(e,arguments)}};o="undefined"!=typeof window?window.jQuery:"undefined"!=typeof t?t.jQuery:null,r="undefined"!=typeof window?window.wp.hooks:"undefined"!=typeof t?t.wp.hooks:null,n=function(){function t(){this.wait_for_load=i(this.wait_for_load,this),this.ready=i(this.ready,this),r.addAction("phort.core.ready",this.wait_for_load)}return t.prototype.ready=function(){r.applyFilters("phort.core.ready",!0)&&r.doAction("phort.core.ready")},t.prototype.wait_for_load=function(){return o(".PP_Wrapper").imagesLoaded(this.loaded)},t.prototype.loaded=function(){r.applyFilters("phort.core.loaded",!0)&&r.doAction("phort.core.loaded")},t}(),e.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(t,e,o){(function(t){var o,n;o="undefined"!=typeof window?window.wp.hooks:"undefined"!=typeof t?t.wp.hooks:null,n=function(){return{width:window.innerWidth||$window.width(),height:window.innerHeight||$window.height()}},e.exports=n()}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(t,e,o){(function(e){var o,n,r,i;o="undefined"!=typeof window?window.jQuery:"undefined"!=typeof e?e.jQuery:null,n="undefined"!=typeof window?window.wp.hooks:"undefined"!=typeof e?e.wp.hooks:null,r=t("../lazy/Item_Data"),i=function(t){var e,n,i,a;return n=o(t),e=n.closest(".PP_Gallery"),i=e.find(".PP_Gallery__item"),a=i.map(function(t,e){var n,i;return i=new r(o(e)),n="video"===i.get_type()?i.get_or_false("video_url"):i.get_url("full"),{src:n,thumb:i.get_url("thumb")}})},n.addAction("phort.core.ready",function(){return o(".PP_Gallery__item").on("click",function(t){var e;return t.preventDefault(),e=o(this),e.lightGallery({dynamic:!0,dynamicEl:i(this),index:o(".PP_Gallery__item").index(e),speed:350,preload:3,download:!1,videoMaxWidth:.8*o(window).width()})})})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lazy/Item_Data":6}],5:[function(t,e,o){(function(o){var n,r,i,a,s,d=function(t,e){return function(){return t.apply(e,arguments)}};n="undefined"!=typeof window?window.jQuery:"undefined"!=typeof o?o.jQuery:null,i="undefined"!=typeof window?window.wp.hooks:"undefined"!=typeof o?o.wp.hooks:null,a=t("./Item_Data"),s=t("../core/Window"),r=function(){function t(){this.autoload=d(this.autoload,this),this.add_item=d(this.add_item,this),this.setup_items=d(this.setup_items,this),this.Elements={item:"PP_Lazy_Image",placeholder:"PP_Lazy_Image__placeholder",link:"PP_JS_Lazy__link",image:"PP_JS_Lazy__image"},this.Items=[],this.Sensitivity=100,this.throttled_autoload=null,this.setup_items(),this.resize_all(),this.attach_events()}return t.prototype.resize=function(){},t.prototype.load=function(t){return this.load_image(t),t.$el.imagesLoaded(function(e){return function(){return e.cleanup_after_load(t)}}(this))},t.prototype.load_image=function(t){var e,o;return o=t.data.get_url("thumb"),e=t.data.get_url("full"),t.$el.prepend(this.get_item_html(o,e)).removeClass("Lazy-Image"),t.loaded=!0},t.prototype.cleanup_after_load=function(t){return t.$el.find("img").addClass("PP_JS__loaded").removeClass("PP_JS__loading"),t.$el.removeClass(this.Elements.item).find("."+this.Elements.placeholder).fadeOut(400,function(){return n(this).remove()})},t.prototype.get_item_html=function(t,e){return'\n<a class="'+this.Elements.link+'" href="'+e+'" rel="gallery">\n\t<img class="'+this.Elements.image+'" src="'+t+'" class="PP_JS__loading" />\n</a>'},t.prototype.setup_items=function(){this.Items=[],n("."+this.Elements.item).each(this.add_item)},t.prototype.add_item=function(t,e){var o;o=n(e),this.Items.push({el:e,$el:o,data:new a(o),loaded:!1})},t.prototype.resize_all=function(){var t,e,o,n,r;for(n=this.Items,r=[],t=0,o=n.length;t<o;t++)e=n[t],r.push(this.resize(e));return r},t.prototype.autoload=function(){var t,e,o,n,r,i;for(r=this.Items,i=[],o=t=0,n=r.length;t<n;o=++t)e=r[o],!e.loaded&&this.in_loose_view(e.el)?i.push(this.load(e)):i.push(void 0);return i},t.prototype.in_loose_view=function(t){var e;return null==t.getBoundingClientRect||(e=t.getBoundingClientRect(),(0!==e.height||0!==e.width)&&(e.top+e.height>=-this.Sensitivity&&e.bottom-e.height<=s.height+this.Sensitivity&&e.left+e.width>=-this.Sensitivity&&e.right-e.width<=s.width+this.Sensitivity))},t.prototype.remove_placeholder=function(t){return t.$el.find("."+this.Elements.placeholder+", noscript").remove()},t.prototype.destroy=function(){return this.detach_events()},t.prototype.attach_events=function(){return this.throttled_autoload=_.throttle(this.autoload,50),i.addAction("phort.portfolio.refresh",this.throttled_autoload,100)},t.prototype.detach_events=function(){return this.throttled_autoload=null,i.removeAction("phort.portfolio.refresh",this.throttled_autoload,100)},t}(),e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../core/Window":3,"./Item_Data":6}],6:[function(t,e,o){var n;n=function(){function t(t){var e;if(this.$el=t,e=t.data("item"),!e)throw new Error("Element doesn't contain `data-item` attribute");this.data=e}return t.prototype.get_data=function(t){var e;return e=this.data.images[t],!!e&&e},t.prototype.get_size=function(t){var e,o,n,r,i;return!!(o=this.get_data(t))&&(r=o.size,n=r.split("x"),i=n[0],e=n[1],i=parseInt(i),e=parseInt(e),[i,e])},t.prototype.get_url=function(t){var e;return e=this.get_data(t),!!e&&e.url},t.prototype.get_or_false=function(t){return!!this.data[t]&&this.data[t]},t.prototype.get_ratio=function(){return this.get_or_false("ratio")},t.prototype.get_type=function(){return this.get_or_false("type")},t}(),e.exports=n},{}],7:[function(t,e,o){(function(o){var n,r,i,a,s=function(t,e){function o(){this.constructor=t}for(var n in e)d.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},d={}.hasOwnProperty;n="undefined"!=typeof window?window.jQuery:"undefined"!=typeof o?o.jQuery:null,r=t("./Abstract_Lazy_Loader"),a=t("../core/Window"),i=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return s(e,t),e.prototype.resize_all=function(){return this.placeholder_width=n(".PP_Masonry__sizer").width(),e.__super__.resize_all.call(this)},e.prototype.resize=function(t){return t.$el.css({"min-height":Math.floor(this.placeholder_width/t.data.get_ratio())})},e.prototype.cleanup_after_load=function(t){return t.$el.css("min-height",""),e.__super__.cleanup_after_load.call(this,t)},e.prototype.attach_events=function(){return e.__super__.attach_events.call(this),n(window).on("scroll",this.throttled_autoload)},e.prototype.detach_events=function(){return n(window).off("scroll",this.throttled_autoload),e.__super__.detach_events.call(this)},e.prototype.destroy=function(){var t,o,n,r,i;for(i=this.Items,n=t=0,r=i.length;t<r;n=++t)o=i[n],o.$el.css("min-height","");return e.__super__.destroy.call(this)},e}(r),e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../core/Window":3,"./Abstract_Lazy_Loader":5}],8:[function(t,e,o){(function(t){var e,o,n,r,i;e="undefined"!=typeof window?window.jQuery:"undefined"!=typeof t?t.jQuery:null,o="undefined"!=typeof window?window.wp.hooks:"undefined"!=typeof t?t.wp.hooks:null,i=!1,r=function(){if(i)return i.destroy(),i=null},n=function(){var t;r(),t=o.applyFilters("phort.lazy.handler",!1),t&&(i=new t)},o.addAction("phort.portfolio.prepare",n,100),o.addAction("phort.portfolio.destroy",r)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(t,e,o){(function(t){var o,n;o="undefined"!=typeof window?window.wp.hooks:"undefined"!=typeof t?t.wp.hooks:null,n=function(){function t(){}return t.prototype.prepare=function(){o.doAction("phort.portfolio.prepare")},t.prototype.create=function(){o.doAction("phort.portfolio.create")},t.prototype.refresh=function(){o.doAction("phort.portfolio.refresh")},t.prototype.destroy=function(){o.doAction("phort.portfolio.destroy")},t}(),e.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(t,e,o){(function(t){var o,n,r=function(t,e){return function(){return t.apply(e,arguments)}};o="undefined"!=typeof window?window.wp.hooks:"undefined"!=typeof t?t.wp.hooks:null,n=function(){function t(t){this.purge_actions=r(this.purge_actions,this),this.setup_actions(),this.initialize(t)}return t.prototype.setup_actions=function(){return o.addAction("phort.portfolio.prepare",this.prepare,50),o.addAction("phort.portfolio.create",this.create,50),o.addAction("phort.portfolio.refresh",this.refresh,50),o.addAction("phort.portfolio.destroy",this.destroy,50),o.addAction("phort.portfolio.destroy",this.purge_actions,100)},t.prototype.purge_actions=function(){return o.removeAction("phort.portfolio.prepare",this.prepare,50),o.removeAction("phort.portfolio.create",this.create,50),o.removeAction("phort.portfolio.refresh",this.refresh,50),o.removeAction("phort.portfolio.destroy",this.destroy,50),o.removeAction("phort.portfolio.destroy",this.purge_actions,100)},t.prototype.initialize=function(){throw new Error("[Abstract] Any subclass of `Portfolio_Interface` must implement `initialize` method")},t.prototype.prepare=function(){throw new Error("[Abstract] Any subclass of `Portfolio_Interface` must implement `prepare` method")},t.prototype.create=function(){throw new Error("[Abstract] Any subclass of `Portfolio_Interface` must implement `create` method")},t.prototype.refresh=function(){throw new Error("[Abstract] Any subclass of `Portfolio_Interface` must implement `refresh` method")},t.prototype.destroy=function(){throw new Error("[Abstract] Any subclass of `Portfolio_Interface` must implement `destroy` method")},t}(),e.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],11:[function(t,e,o){(function(o){var n,r,i,a,s=function(t,e){return function(){return t.apply(e,arguments)}},d=function(t,e){function o(){this.constructor=t}for(var n in e)l.call(e,n)&&(t[n]=e[n]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},l={}.hasOwnProperty;n="undefined"!=typeof window?window.jQuery:"undefined"!=typeof o?o.jQuery:null,r="undefined"!=typeof window?window.wp.hooks:"undefined"!=typeof o?o.wp.hooks:null,i=t("./Portfolio_Interface"),a=function(t){function e(){this.refresh=s(this.refresh,this),this.destroy=s(this.destroy,this),this.create=s(this.create,this),this.prepare=s(this.prepare,this),this.Elements={container:"PP_Masonry",sizer:"PP_Masonry__sizer",item:"PP_Masonry__item"},e.__super__.constructor.call(this)}return d(e,t),e.prototype.initialize=function(){return this.$container=n("."+this.Elements.container)},e.prototype.prepare=function(){var t;if(0!==this.$container.length)return this.$container.addClass("PP_JS__loading_masonry"),this.maybe_create_sizer(),t=r.applyFilters("phort.masonry.settings",{itemSelector:"."+this.Elements.item,columnWidth:"."+this.Elements.sizer,gutter:0,initLayout:!1}),this.$container.masonry(t),this.$container.masonry("once","layoutComplete",function(t){return function(){return t.$container.removeClass("PP_JS__loading_masonry").addClass("PP_JS__loading_complete"),r.doAction("phort.portfolio.refresh")}}(this))},e.prototype.create=function(){this.$container.masonry()},e.prototype.destroy=function(){this.maybe_remove_sizer(),this.$container.length>0&&this.$container.masonry("destroy")},e.prototype.refresh=function(){return this.$container.masonry("layout")},e.prototype.maybe_create_sizer=function(){this.sizer_doesnt_exist()&&this.create_sizer()},e.prototype.maybe_remove_sizer=function(){1===this.$container.length&&this.$container.find("."+this.Elements.sizer).remove()},e.prototype.sizer_doesnt_exist=function(){return 0===this.$container.find("."+this.Elements.sizer).length},e.prototype.create_sizer=function(){this.$container.append('<div class="'+this.Elements.sizer+'"></div>')},e}(i),e.exports=a}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./Portfolio_Interface":10}],12:[function(t,e,o){(function(e){var o,n,r,i,a,s,d;n="undefined"!=typeof window?window.wp.hooks:"undefined"!=typeof e?e.wp.hooks:null,i=t("./Portfolio_Event_Manager"),o="undefined"!=typeof window?window.jQuery:"undefined"!=typeof e?e.jQuery:null,r=new i,a=function(){return 0!==o(".PP_Masonry").length},d=function(){var e;return!!a()&&new(e=t("./Portfolio_Masonry"))},s=function(e){return a()?t("lazy/Lazy_Masonry"):e},n.addAction("phort.core.ready",r.prepare,50),n.addAction("phort.core.loaded",r.create,50),n.addAction("phort.core.ready",d),n.addFilter("phort.lazy.handler",s)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./Portfolio_Event_Manager":9,"./Portfolio_Masonry":11,"lazy/Lazy_Masonry":7}]},{},[1]);