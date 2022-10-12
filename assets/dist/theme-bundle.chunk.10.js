(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js":
/*!*******************************************************************!*\
  !*** ./assets/js/theme/halothemes/haloAddOptionForProductCard.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");


var fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");

/* harmony default export */ __webpack_exports__["default"] = (function (context, wrapper) {
  if (context.themeSettings.haloAddOptionForProduct == true) {
    var callProductOption = function callProductOption() {
      product_class.each(function (index, element) {
        var productId = $(element).data("product-id");
        list.push(productId.toString());
      });

      if (list.length > 0) {
        getProductOption(list).then(function (data) {
          renderOption(data);
          $.each(list, function (idx, item) {
            var arr = {},
                productId = list[idx];
            product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').each(function (index, element) {
              var txt = $(element).data('product-swatch-value');

              if (arr[txt]) {
                $(element).remove();
              } else {
                arr[txt] = true;
              }
            });

            if (product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').length > 4) {
              var countMoreOption = product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').length - 4,
                  productLink = product_wrapper.find('[data-product-id="' + productId + '"]').find('.card-link').attr('href');
              product_wrapper.find('.card-option-' + productId + ' .form-option-swatch').each(function (index, element) {
                if (index >= 4) {
                  $(element).remove();
                }
              });

              if (product_wrapper.find('.card-option-' + productId + ' .form-field .showmore').length < 1) {
                product_wrapper.find('.card-option-' + productId + ' .form-field:not(.form-field--size)').append('<a href="' + productLink + '" class="showmore">+' + countMoreOption + '</a>');
              }
            }
          });
        });
      }
    };

    var getProductOption = function getProductOption(list) {
      return fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          query: "\n                    query SeveralProductsByID {\n                      site {\n                        products(entityIds: [" + list + "], first: 50) {\n                          edges {\n                            node {\n                              entityId\n                              name\n                               productOptions(first: 50) {\n                                edges {\n                                  node {\n                                    entityId\n                                    displayName\n                                    isRequired\n                                    ... on MultipleChoiceOption {\n                                      displayStyle\n                                      values {\n                                        edges {\n                                          node {\n                                            entityId\n                                            label\n                                            isDefault\n                                            ... on SwatchOptionValue {\n                                              hexColors\n                                              imageUrl(width: 50)\n                                            }\n                                          }\n                                        }\n                                      }\n                                    }\n                                  }\n                                }\n                              }\n                            }\n                          }\n                        }\n                      }\n                    }\n                  "
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return res.data;
      });
    };

    var renderOption = function renderOption(data) {
      var aFilter = data.site.products.edges;
      $.each(aFilter, function (index, element) {
        var productId = aFilter[index].node.entityId,
            productFieldColor = product_wrapper.find('.card-option-' + productId + ' .form-field:not(.form-field--size)'),
            productFieldSize = product_wrapper.find('.card-option-' + productId + ' .form-field--size'),
            aFilter2 = aFilter[index].node.productOptions.edges;
        var aFilter3 = aFilter2.filter(function (item) {
          return item.node.displayStyle === 'Swatch';
        });
        var aFilter5 = aFilter2.filter(function (item) {
          return item.node.displayName === context.themeSettings.haloAddOptionForProduct2;
        });

        if (aFilter3.length > 0) {
          var aFilter4 = aFilter3[0].node.values.edges;
          $.each(aFilter4, function (idx, element) {
            var titleVar = aFilter4[idx].node.label,
                idVar = aFilter4[idx].node.entityId,
                lengthColorVar = aFilter4[idx].node.hexColors.length,
                color1 = aFilter4[idx].node.hexColors[0],
                color2 = aFilter4[idx].node.hexColors[1],
                color3 = aFilter4[idx].node.hexColors[2],
                img = aFilter4[idx].node.imageUrl;

            if (lengthColorVar == 2) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--color form-option-variant--color2" title="' + titleVar + '"><span style="background-color:' + color1 + '"></span><span style="background-color:' + color2 + '"></span></span></label>');
            } else if (lengthColorVar === 3) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--color form-option-variant--color2" title="' + titleVar + '"><span style="background-color:' + color1 + '"></span><span style="background-color:' + color2 + '"></span><span style="background-color:' + color3 + '"></span></span></label>');
            } else if (Boolean(color1)) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--color" title="' + titleVar + '" style="background-color: ' + color1 + '"></span></label>');
            } else if (Boolean(img)) {
              productFieldColor.append('<label class="form-option form-option-swatch" data-product-swatch-value="' + idVar + '"><span class="form-option-tooltip">' + titleVar + '</span><span class="form-option-variant form-option-variant--pattern" title="' + titleVar + '" style="background-image: url(' + img + ')"></span></label>');
            }
          });
        } else {
          productFieldColor.remove();
        }

        if (aFilter5.length > 0) {
          if (productFieldSize.length < 1) {
            product_wrapper.find('.card-option-' + productId + '').append('<div class="form-field form-field--size"><label class="form-option">' + context.themeSettings.haloAddOptionForProductText.toString() + '</label></div>');
          }
        }

        if (aFilter5.length == 0 && aFilter3.length == 0) {
          product_wrapper.find('.card-option-' + productId + '').remove();
        }
      });
    };

    var token = context.token,
        product_wrapper = $('#' + wrapper),
        product_class = product_wrapper.find('.card');
    var list = [];
    callProductOption();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/halothemes/parallax/jquery.parallax-scroll.min.js":
/*!***************************************************************************!*\
  !*** ./assets/js/theme/halothemes/parallax/jquery.parallax-scroll.min.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  ParallaxScroll.init();
});
var ParallaxScroll = {
  showLogs: !1,
  round: 1e3,
  init: function init() {
    return this._log("init"), this._inited ? (this._log("Already Inited"), void (this._inited = !0)) : (this._requestAnimationFrame = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a, b) {
        window.setTimeout(a, 1e3 / 60);
      };
    }(), void this._onScroll(!0));
  },
  _inited: !1,
  _properties: ["x", "y", "z", "rotateX", "rotateY", "rotateZ", "scaleX", "scaleY", "scaleZ", "scale"],
  _requestAnimationFrame: null,
  _log: function _log(a) {
    this.showLogs && console.log("Parallax Scroll / " + a);
  },
  _onScroll: function _onScroll(a) {
    var b = $(document).scrollTop(),
        c = $(window).height();
    this._log("onScroll " + b), $("[data-parallax]").each($.proxy(function (d, e) {
      var f = $(e),
          g = [],
          h = !1,
          i = f.data("style");
      void 0 == i && (i = f.attr("style") || "", f.data("style", i));
      var k,
          j = [f.data("parallax")];

      for (k = 2; f.data("parallax" + k); k++) {
        j.push(f.data("parallax-" + k));
      }

      var l = j.length;

      for (k = 0; k < l; k++) {
        var m = j[k],
            n = m["from-scroll"];
        void 0 == n && (n = Math.max(0, $(e).offset().top - c)), n = 0 | n;
        var o = m.distance,
            p = m["to-scroll"];
        void 0 == o && void 0 == p && (o = c), o = Math.max(0 | o, 1);
        var q = m.easing,
            r = m["easing-return"];

        if (void 0 != q && $.easing && $.easing[q] || (q = null), void 0 != r && $.easing && $.easing[r] || (r = q), q) {
          var s = m.duration;
          void 0 == s && (s = o), s = Math.max(0 | s, 1);
          var t = m["duration-return"];
          void 0 == t && (t = s), o = 1;
          var u = f.data("current-time");
          void 0 == u && (u = 0);
        }

        void 0 == p && (p = n + o), p = 0 | p;
        var v = m.smoothness;
        void 0 == v && (v = 30), v = 0 | v, (a || 0 == v) && (v = 1), v = 0 | v;
        var w = b;
        w = Math.max(w, n), w = Math.min(w, p), q && (void 0 == f.data("sens") && f.data("sens", "back"), w > n && ("back" == f.data("sens") ? (u = 1, f.data("sens", "go")) : u++), w < p && ("go" == f.data("sens") ? (u = 1, f.data("sens", "back")) : u++), a && (u = s), f.data("current-time", u)), this._properties.map($.proxy(function (a) {
          var b = 0,
              c = m[a];

          if (void 0 != c) {
            "scale" == a || "scaleX" == a || "scaleY" == a || "scaleZ" == a ? b = 1 : c = 0 | c;
            var d = f.data("_" + a);
            void 0 == d && (d = b);
            var e = (c - b) * ((w - n) / (p - n)) + b,
                i = d + (e - d) / v;

            if (q && u > 0 && u <= s) {
              var j = b;
              "back" == f.data("sens") && (j = c, c = -c, q = r, s = t), i = $.easing[q](null, u, j, c, s);
            }

            i = Math.ceil(i * this.round) / this.round, i == d && e == c && (i = c), g[a] || (g[a] = 0), g[a] += i, d != g[a] && (f.data("_" + a, g[a]), h = !0);
          }
        }, this));
      }

      if (h) {
        if (void 0 != g.z) {
          var x = m.perspective;
          void 0 == x && (x = 800);
          var y = f.parent();
          y.data("style") || y.data("style", y.attr("style") || ""), y.attr("style", "perspective:" + x + "px; -webkit-perspective:" + x + "px; " + y.data("style"));
        }

        void 0 == g.scaleX && (g.scaleX = 1), void 0 == g.scaleY && (g.scaleY = 1), void 0 == g.scaleZ && (g.scaleZ = 1), void 0 != g.scale && (g.scaleX *= g.scale, g.scaleY *= g.scale, g.scaleZ *= g.scale);
        var z = "translate3d(" + (g.x ? g.x : 0) + "px, " + (g.y ? g.y : 0) + "px, " + (g.z ? g.z : 0) + "px)",
            A = "rotateX(" + (g.rotateX ? g.rotateX : 0) + "deg) rotateY(" + (g.rotateY ? g.rotateY : 0) + "deg) rotateZ(" + (g.rotateZ ? g.rotateZ : 0) + "deg)",
            B = "scaleX(" + g.scaleX + ") scaleY(" + g.scaleY + ") scaleZ(" + g.scaleZ + ")",
            C = z + " " + A + " " + B + ";";
        this._log(C), f.attr("style", "transform:" + C + " -webkit-transform:" + C + " " + i);
      }
    }, this)), window.requestAnimationFrame ? window.requestAnimationFrame($.proxy(this._onScroll, this, !1)) : this._requestAnimationFrame($.proxy(this._onScroll, this, !1));
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./halothemes/jquery.fancybox.min */ "./assets/js/theme/halothemes/jquery.fancybox.min.js");
/* harmony import */ var _halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_halothemes_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProductCard */ "./assets/js/theme/halothemes/haloAddOptionForProductCard.js");
/* harmony import */ var _halothemes_parallax_jquery_parallax_scroll_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./halothemes/parallax/jquery.parallax-scroll.min */ "./assets/js/theme/halothemes/parallax/jquery.parallax-scroll.min.js");
/* harmony import */ var _halothemes_parallax_jquery_parallax_scroll_min__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_halothemes_parallax_jquery_parallax_scroll_min__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _halothemes_haloVideo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloVideo */ "./assets/js/theme/halothemes/haloVideo.js");
/* harmony import */ var _halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloNotifyMe */ "./assets/js/theme/halothemes/haloNotifyMe.js");
/* harmony import */ var _bigcommerce_stencil_utils_src_hooks_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bigcommerce/stencil-utils/src/hooks/product */ "./node_modules/@bigcommerce/stencil-utils/src/hooks/product.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var Home = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Home, _PageManager);

  function Home(context) {
    return _PageManager.call(this, context) || this;
  }

  var _proto = Home.prototype;

  _proto.onReady = function onReady() {
    this.countDownHeroCarousel();
    this.customPaging();
    this.loadProductByCategory();
    this.loadProductTabByCategory();
    this.loadProductByCategoryWithBanner();
    this.fancyboxVideoBanner();
    this.faqsToggle();
    this.recentBlogSlider();
    this.homeSpecialProduct();
    this.homeParallaxBanner();
    this.loadOptionForProductCard();
    this.customerReviewCarousel();
    this.homeProductRecommended();
    this.reviewCarousel();
  };

  _proto.countDownHeroCarousel = function countDownHeroCarousel() {
    $('.heroCarousel-countdown').each(function (index, element) {
      $(element).parents('.slick-slide').addClass('has-count-down');
      var countDown = $(element).data('carousel-countdown'),
          countDownDate = new Date(countDown).getTime(),
          seft = $(element);
      var countdownfunction = setInterval(function () {
        var now = new Date().getTime(),
            distance = countDownDate - now;

        if (distance < 0) {
          clearInterval(countdownfunction);
          seft.html('');
        } else {
          var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
              hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
              minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
              seconds = Math.floor(distance % (1000 * 60) / 1000);
          var strCountDown = "<span class='num'>" + days + "<span>DAYS</span></span><span class='num'>" + hours + "<span>HOURS</span></span><span class='num'>" + minutes + "<span>MINS</span></span><span class='num'>" + seconds + "<span>SECS</span></span>";
          seft.html(strCountDown);
        }
      }, 1000);
    });
  };

  _proto.customPaging = function customPaging() {
    var heroCustom = $('.heroCarousel-custom');
    var heroCustomSlide = $('.heroCarousel-custom .slick-dots li');
    heroCustom.slick({
      dots: true,
      arrows: false,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: heroCustom.data('autoplay'),
      infinite: true,
      asNavFor: ".heroCarousel"
    }); //ADA

    $('.heroCarousel-custom .slick-dots li').each(function (i) {
      var slide = $(this).find('button').text();
      $(this).find('button').text('0' + slide).addClass('slick-dots-item');
    });
    heroCustom.on('afterChange', function (event, slider, i) {
      var pos = $(slider.$slides[i]).find('div[data-position]').data('position');

      if (pos === 'right') {
        heroCustom.removeClass('heroCarousel-customLeft').addClass('heroCarousel-customRight');
      } else {
        heroCustom.removeClass('heroCarousel-customRight').addClass('heroCarousel-customLeft');
      }
    });

    if ($('.heroCarousel-slide--first .heroCarousel-content-wrapper .heroCarousel-content--right').length) {
      heroCustom.removeClass('heroCarousel-customLeft').addClass('heroCarousel-customRight');
    }
  };

  _proto.loadProductByCategory = function loadProductByCategory() {
    var context = this.context;
    var options = {
      template: 'products/carousel-2'
    };

    if ($('.halo-block[data-category-id]').length > 0) {
      var header_height = $('.header').height();
      $(window).on('scroll load', function () {
        var scroll = $(window).scrollTop(),
            setFlag = false;

        if (scroll > header_height) {
          setFlag = true;
        }

        if (setFlag) {
          $('.halo-block[data-category-id]').each(function (index, element) {
            var wrap = $(element).find('.productCarousel'),
                catId = $(element).data('data-category'),
                catUrl = $(element).data('category-url'),
                blockId = $(element).attr('id');

            if (!$('#product-by-cate-' + catId + ' .productCarousel .productCarousel-slide').length) {
              loadCategory(catId, catUrl, options, wrap, blockId);
            }
          });
          setFlag = false;
        }
      });
    }

    function loadCategory(id, url, option, wrap, blockId) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.getPage(url, option, function (err, response) {
        if (!wrap.find('.productCarousel-slide').length) {
          wrap.html(response);
          slickCarousel(wrap);
          wrap.parents('.halo-block[data-category-id]').find('.loadingOverlay').remove();
          Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, blockId);
        }
      });
    }

    function slickCarousel(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: parseInt(context.themeSettings.home_product_block_col)
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_col) - 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_col) - 2
          }
        }]
      });
    }
  };

  _proto.loadProductTabByCategory = function loadProductTabByCategory() {
    var context = this.context;
    var options = {
      template: 'products/carousel-3'
    };

    if ($('.productCarousel-tabs').length > 0) {
      if (!$('.productCarousel-tabs .tab-content.is-active .productCarousel .productCarousel-slide').length) {
        Array.from($('.tab-content.is-active')).forEach(function (item) {
          var $itemEle = $(item);
          var block = $itemEle,
              wrap = block.find('.productCarousel'),
              catId = block.data('tab-category-id'),
              catUrl = block.data('tab-category-url'),
              blockId = block.attr('id');

          if (catUrl.includes("http")) {
            if (location.host.includes("en.superhairpieces.fr")) {
              catUrl = catUrl.replace("//superhairpieces.fr", "//en.superhairpieces.fr");
            }
          }

          if (!$('.productCarousel-tabs .tab-content.is-active .productCarousel .productCarousel-slide').length) {
            block.find('.loadingOverlay').show();
            loadCategory(catId, catUrl, options, wrap, blockId);
          }
        });
      }
    } // if($('.productCarousel-tabs').length > 0){
    //     if(!$('.productCarousel-tabs .tab-content.is-active .productCarousel .productCarousel-slide').length){
    //         var block = $('.productCarousel-tabs .tab-content.is-active'),
    //             wrap = block.find('.productCarousel'),
    //             catId = block.data('tab-category-id'),
    //             catUrl = block.data('tab-category-url'),
    //             blockId = block.attr('id');
    //         if (catUrl.includes("http")) {
    //             if (location.host.includes("en.superhairpieces.fr")) {
    //                 catUrl = catUrl.replace("//superhairpieces.fr","//en.superhairpieces.fr");
    //             }
    //         }
    //         if(!$('.productCarousel-tabs .tab-content.is-active .productCarousel .productCarousel-slide').length){
    //             block.find('.loadingOverlay').show();
    //             loadCategory(catId, catUrl, options, wrap, blockId);
    //         }
    //     }
    //     $('.productCarousel-tabs [data-tab]').on('toggled', (event, tab) => {
    //         if(!$('.productCarousel-tabs .tab-content.is-active .productCarousel .productCarousel-slide').length){
    //             var block = $('.productCarousel-tabs .tab-content.is-active'),
    //                 wrap = block.find('.productCarousel'),
    //                 catId = block.data('tab-category-id'),
    //                 catUrl = block.data('tab-category-url'),
    //                 blockId = block.attr('id');
    //             if (catUrl.includes("http")) {
    //                 if (location.host.includes("en.superhairpieces.fr")) {
    //                     catUrl = catUrl.replace("//superhairpieces.fr","//en.superhairpieces.fr");
    //                 }
    //             }
    //             if(!$(event.currentTarget).find('.productCarousel').hasClass('slick-initialized')){
    //                 block.find('.loadingOverlay').show();
    //                 loadCategory(catId, catUrl, options, wrap, blockId);
    //             }
    //         }
    //     });
    // }


    function reviewShow(x) {
      var limit = document.querySelectorAll('.reviewCard1');
      var review2 = [];
      Promise.all([fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json").then(function (r) {
        return r.json();
      }).then(function (r) {
        review2.push.apply(review2, r);
      }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=500").then(function (r) {
        return r.json();
      }).then(function (r) {
        review2.push.apply(review2, r);
      }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=1000").then(function (r) {
        return r.json();
      }).then(function (r) {
        review2.push.apply(review2, r);
      }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=1500").then(function (r) {
        return r.json();
      }).then(function (r) {
        review2.push.apply(review2, r);
      })]).then(function (r) {
        limit.forEach(function (item1) {
          $(item1.nextElementSibling).empty();
          var review3 = [];
          var vidu = review2.filter(function (item) {
            return item['Product SKU'] === item1.innerHTML;
          });
          vidu.forEach(function (goku) {
            review3.push(goku['Review rate']);
          });
          var reviewAvg = Math.round(review3.reduce(function (a, b) {
            return a + b;
          }, 0) / review3.length * 10) / 10;
          $(item1.nextElementSibling).append("\n                    <style>    .checked {\n                        color: rgb(255, 210, 0);\n                \n                }\n                .fa-star-o {\n                    color: rgb(255, 210, 0);\n            \n                }\n                @media (min-width: 768px) {\n                    .productReview2 {\n                        display: flex;\n                    }\n                }\n                @media (min-width: 1025px) {\n                    .productReview2 {\n                        display: unset;\n                    }\n                }\n                @media (min-width: 1400px) {\n                    .productReview2 {\n                        display: flex;\n                    }\n                }\n                </style>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                    \n                    <span>\n                    <span class=\"fa fa-star" + (0.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                    <span class=\"fa fa-star" + (1.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                    <span class=\"fa fa-star" + (2.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                    <span class=\"fa fa-star" + (3.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                    <span class=\"fa fa-star" + (4.5 <= reviewAvg ? ' checked' : ' fa-star-o') + ("\"></span>      \n                </span>\n                <div style=padding-left:5px;>\n                    " + review3.length + " Commentaires\n                </div>")); // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
        });
      }).catch(function (err) {
        console.log(err);
      });
    }

    function reviewShow(x) {
      var limit = document.querySelectorAll('.reviewCard1');
      var review2 = [];
      Promise.all([fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json").then(function (r) {
        return r.json();
      }).then(function (r) {
        review2.push.apply(review2, r);
      }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=500").then(function (r) {
        return r.json();
      }).then(function (r) {
        review2.push.apply(review2, r);
      }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=1000").then(function (r) {
        return r.json();
      }).then(function (r) {
        review2.push.apply(review2, r);
      }), fetch("https://www.teamdesk.net/secure/api/v2/56554/BEA2566590EF4D14AA8D35AD0E2CEA77/Review/select.json?skip=1500").then(function (r) {
        return r.json();
      }).then(function (r) {
        review2.push.apply(review2, r);
      })]).then(function (r) {
        limit.forEach(function (item1) {
          $(item1.nextElementSibling).empty();
          var review3 = [];
          var vidu = review2.filter(function (item) {
            return item['Product SKU'] === item1.innerHTML;
          });
          vidu.forEach(function (goku) {
            review3.push(goku['Review rate']);
          });
          var reviewAvg = Math.round(review3.reduce(function (a, b) {
            return a + b;
          }, 0) / review3.length * 10) / 10;
          $(item1.nextElementSibling).append("\n                    <style>    .checked {\n                        color: rgb(255, 210, 0);\n                \n                }\n                .fa-star-o {\n                    color: rgb(255, 210, 0);\n            \n                }\n                @media (min-width: 768px) {\n                    .productReview2 {\n                        display: flex;\n                    }\n                }\n                @media (min-width: 1025px) {\n                    .productReview2 {\n                        display: unset;\n                    }\n                }\n                @media (min-width: 1400px) {\n                    .productReview2 {\n                        display: flex;\n                    }\n                }\n                </style>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n                    \n                    <span>\n                    <span class=\"fa fa-star" + (0.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                    <span class=\"fa fa-star" + (1.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                    <span class=\"fa fa-star" + (2.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                    <span class=\"fa fa-star" + (3.5 <= reviewAvg ? ' checked' : ' fa-star-o') + "\"></span>\n                    <span class=\"fa fa-star" + (4.5 <= reviewAvg ? ' checked' : ' fa-star-o') + ("\"></span>      \n                </span>\n                <div style=padding-left:5px;>\n                    " + review3.length + " Commentaires\n                </div>")); // $(item1.nextElementSibling).append(`<div>${reviewAvg}</div>`)
        });
      }).catch(function (err) {
        console.log(err);
      });
    }

    function loadCategory(id, url, option, wrap, blockId) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.getPage(url, option, function (err, response) {
        if (!wrap.find('.productCarousel-slide').length) {
          wrap.html(response);
          slickCarousel(wrap);
          wrap.parents('.tab-content').find('.loadingOverlay').remove();
          Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, blockId);
          reviewShow();
        }
      });
    }

    function slickCarousel(wrap) {
      wrap.slick({
        dots: false,
        arrows: true,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-tab1 slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-tab2 slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: parseInt(context.themeSettings.home_product_block_tab_col)
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_tab_col) - 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_tab_col) - 2
          }
        }]
      });
    }
  };

  _proto.loadProductByCategoryWithBanner = function loadProductByCategoryWithBanner() {
    var context = this.context;
    var options = {
      template: 'products/carousel-4'
    };

    if ($('.halo-block[data-category-with-banner-id]').length > 0) {
      var header_height = $('.header').height();
      var $tabSorting = $('.tab-sorting .tab-title');
      $(window).on('scroll load', function () {
        var scroll = $(window).scrollTop(),
            setFlag = false;

        if (scroll > header_height) {
          setFlag = true;
        }

        if (setFlag) {
          $('.halo-block[data-category-with-banner-id]').each(function (index, element) {
            if ($('.home-layout-2').length && !$(element).hasClass('home2-flash-deals')) {
              var wrap = $(element).find('.tabContent-new .productCarousel');
            } else {
              var wrap = $(element).find('.productCarousel');
            }

            var catId = $(element).data('category-with-banner-id'),
                catUrl = $(element).data('category-with-banner-url'),
                blockId = $(element).attr('id');

            if (!$('#product-with-banner-' + catId + ' .productCarousel .productCarousel-slide').length) {
              loadCategory(catId, catUrl, options, wrap, blockId);
            }
          });
          setFlag = false;
        }
      });
      $tabSorting.on('click', function (e) {
        e.preventDefault();
        var $target = $(e.currentTarget);
        var dataTab = $target.data('tab');
        var $thisBlock = $target.closest('.halo-block-product');
        var wrap = $thisBlock.find('.tabContent-' + dataTab + ' .productCarousel'),
            catId = $target.data('cate-id'),
            catUrl = $target.data('cate-url'),
            blockId = $thisBlock.find('.tabContent-' + dataTab).attr('id');

        if (dataTab == 'viewall') {
          window.location.href = $target.attr('href');
          return;
        }

        $thisBlock.find('.tab-sorting').removeClass('is-active');
        $target.parent().addClass('is-active');
        $thisBlock.find('.tab-content').removeClass('is-active');
        $thisBlock.find('.tabContent-' + dataTab).addClass('is-active');
        console.log('aff');

        if (!$target.hasClass('is-loaded')) {
          $target.addClass('is-loaded');
          loadCategory(catId, catUrl, options, wrap, blockId);
        } else {
          $thisBlock.find('.tabContent-' + dataTab + ' .productCarousel').slick('refresh');
        }
      });

      if ($('.countDowntimer').length) {
        var countDownDate = new Date($('.countDowntimer').attr('data-count-down')).getTime();
        var countdownfunction = setInterval(function () {
          var now = new Date().getTime();
          var distance = countDownDate - now;

          if (distance < 0) {
            clearInterval(countdownfunction);
            $(".countDowntimer").html('');
          } else {
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(distance % (1000 * 60) / 1000);
            var strCountDown = "<div class='clock-item'><span class='num'>" + days + "</span><span class='text'>d</span></div><div class='clock-item'><span class='num'>" + hours + ":</span></div><div class='clock-item'><span class='num'>" + minutes + ":</span></div><div class='clock-item'><span class='num'>" + seconds + "</span></div>";
            $(".countDowntimer").html(strCountDown);
          }
        }, 1000);
      }
    }

    function loadCategory(id, url, option, wrap, blockId) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.getPage(url, option, function (err, response) {
        if (!wrap.find('.productCarousel-slide').length) {
          wrap.html(response);

          if (wrap.parents('.halo-block[data-category-with-banner-id]').hasClass('halo-block-product-banners')) {
            if ($('.home-layout-2').length) {
              if (wrap.parents('.halo-block[data-category-with-banner-id]').hasClass('home2-flash-deals')) {
                labelFlashDeals(wrap);
                slickCarousel4(wrap);
              } else {
                slickCarousel3(wrap);
              }
            } else {
              slickCarousel(wrap);
            }
          } else if (wrap.parents('.halo-block[data-category-with-banner-id]').hasClass('halo-block-product-banners2')) {
            slickCarousel2(wrap);
          }

          wrap.parents('.halo-block[data-category-with-banner-id]').find('.loadingOverlay').remove();
          Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, blockId);
        }
      });
    }

    function slickCarousel(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }]
      });
    }

    function slickCarousel2(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: parseInt(context.themeSettings.home_product_block_with_banner_col)
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_with_banner_col) - 1
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: parseInt(context.themeSettings.home_product_block_with_banner_col) - 2
          }
        }]
      });
    }

    function slickCarousel3(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1199,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 767,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }]
      });
    }

    function slickCarousel4(wrap) {
      wrap.slick({
        dots: true,
        arrows: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<svg class='slick-next slick-arrow slick-arrow-large' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
        prevArrow: "<svg class='slick-prev slick-arrow slick-arrow-large' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
        responsive: [{
          breakpoint: 1199,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 992,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 767,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }]
      });
    }

    function labelFlashDeals(wrap) {
      var $itemSide = wrap.find('.productCarousel-slide');
      $itemSide.each(function (index, element) {
        var $thisLabel = $(element).find('.sale-badge');

        if ($thisLabel.length) {
          var label = $thisLabel.find('.text').data('sale');
          $(element).find('.card-price').addClass('has-labelSale').append('<div class="card-label-sale"><span>-' + label + '</span></div>');
          $thisLabel.remove();
        }
      });
    }
  };

  _proto.fancyboxVideoBanner = function fancyboxVideoBanner() {
    if ($(".video-block-image[data-fancybox]").length > 0) {
      $(".video-block-image[data-fancybox]").fancybox({
        'autoDimensions': false,
        'padding': 0,
        'width': 970,
        'height': 600,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none'
      });
    }

    if ($(".button-popup-video[data-fancybox]").length > 0) {
      $(".button-popup-video[data-fancybox]").fancybox({
        'autoDimensions': false,
        'padding': 0,
        'width': 970,
        'height': 600,
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none'
      });
    }
  };

  _proto.faqsToggle = function faqsToggle() {
    $('.halo-short-faqs .card .title').on('click', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      $('.halo-short-faqs .card .title').not($target).removeClass('collapsed');

      if ($target.hasClass('collapsed')) {
        $target.removeClass('collapsed');
      } else {
        $target.addClass('collapsed');
      }

      $('.halo-short-faqs .card').each(function (index, element) {
        if ($(element).find('.title').hasClass('collapsed')) {
          $(element).find('.collapse').slideDown("slow");
        } else {
          $(element).find('.collapse').slideUp("slow");
        }
      });
    });
  };

  _proto.recentBlogSlider = function recentBlogSlider() {
    if ($(window).width() <= 1024) {
      if ($('.halo-recent-post').length) {
        if ($('.halo-recent-post').hasClass('slick-slider')) {
          $('.halo-recent-post').slick('unslick');
        }
      }
    } else {
      if ($('.halo-recent-post').length) {
        if (!$('.halo-recent-post').hasClass('slick-slider')) {
          $('.halo-recent-post').slick();
        }
      }
    }

    $(window).resize(function () {
      if ($(window).width() <= 1024) {
        if ($('.halo-recent-post').length) {
          if ($('.halo-recent-post').hasClass('slick-slider')) {
            $('.halo-recent-post').slick('unslick');
          }
        }
      } else {
        if ($('.halo-recent-post').length) {
          if (!$('.halo-recent-post').hasClass('slick-slider')) {
            $('.halo-recent-post').slick();
          }
        }
      }
    });
  };

  _proto.homeSpecialProduct = function homeSpecialProduct() {
    var context = this.context;

    if (context.themeSettings.home_product_block_special == true) {
      var productId = $('[data-special-product-id]').data('special-product-id'),
          setFlag = false;
      var options = {
        template: 'halothemes/products/halo-special-product-tmp'
      };
      $(window).on('scroll load', function () {
        var scroll = $(window).scrollTop(),
            header_height = $('.header').height();

        if (scroll > header_height) {
          setFlag = true;
        }

        if (setFlag) {
          if (!$('.halo-spacial-product .productView').length) {
            var viewingProduct = function viewingProduct(wrapper) {
              if (wrapper.length > 0) {
                var viewerText = context.themeSettings.product_viewingProduct_text,
                    numbersViewer_text = context.themeSettings.product_viewingProduct_viewer,
                    numbersViewerList = JSON.parse("[" + numbersViewer_text + "]");
                setInterval(function () {
                  var numbersViewerItem = Math.floor(Math.random() * numbersViewerList.length);
                  wrapper.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-eye"/></svg>' + numbersViewerList[numbersViewerItem] + " " + viewerText);
                  wrapper.removeClass('u-hiddenVisually');
                }, 10000);
              }
            };

            var countDownProduct = function countDownProduct(wrapper) {
              if (wrapper.length > 0) {
                var countDown = wrapper.data('countdown'),
                    countDownDate = new Date(countDown).getTime(),
                    seft = wrapper;
                var countdownfunction = setInterval(function () {
                  var now = new Date().getTime(),
                      distance = countDownDate - now;

                  if (distance < 0) {
                    clearInterval(countdownfunction);
                    seft.remove();
                  } else {
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
                        hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
                        minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
                        seconds = Math.floor(distance % (1000 * 60) / 1000),
                        strCountDown = '<svg class="icon" aria-hidden="true"><use xlink:href="#icon-bell"/></svg><span class="text"><span>Limited time offer, end in:</span></span> <span class="num">' + days + 'd :</span> <span class="num">' + hours + 'h :</span> <span class="num">' + minutes + 'm :</span> <span class="num">' + seconds + 's</span>';
                    seft.html(strCountDown);
                  }
                }, 1000);
              }
            };

            var soldProduct = function soldProduct(wrapper) {
              if (wrapper.length > 0) {
                var numbersProduct_text = context.themeSettings.product_soldProduct_products,
                    numbersHours_text = context.themeSettings.product_soldProduct_hours,
                    soldProductText = context.themeSettings.product_soldProduct_text,
                    soldProductText2 = context.themeSettings.product_soldProduct_hours_text;
                var numbersProductList = JSON.parse("[" + numbersProduct_text + "]"),
                    numbersProductItem = Math.floor(Math.random() * numbersProductList.length),
                    numbersHoursList = JSON.parse("[" + numbersHours_text + "]"),
                    numbersHoursItem = Math.floor(Math.random() * numbersHoursList.length);
                wrapper.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-fire"/></svg><span>' + numbersProductList[numbersProductItem] + " " + soldProductText + " " + numbersHoursList[numbersHoursItem] + " " + soldProductText2 + '</span>');
                wrapper.removeClass('u-hiddenVisually').show();
              }
            };

            var initThumbnailsHeight = function initThumbnailsHeight($scope) {
              var el = $($scope);
              var $carousel_nav = el.find('.productView-nav'),
                  $carousel_for = el.find('.productView-for');

              if ($carousel_for.find('.slick-arrow').length > 0) {
                $carousel_for.parent().addClass('arrows-visible');
              } else {
                $carousel_for.parent().addClass('arrows-disable');
              }
            };

            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.product.getById(productId, options, function (err, response) {
              setFlag = false;
              var scope = '.halo-spacial-product';

              if (!$(scope).find('.productView').length) {
                $(scope).html(response);
                soldProduct($(scope).find('.productView-soldProduct'));
                viewingProduct($(scope).find('.productView-ViewingProduct'));
                countDownProduct($(scope).find('.productView-countDown'));
                $(scope).find('[data-slick]').slick();
                $(scope).find('.productView-for').get(0).slick.setPosition();
                initThumbnailsHeight(scope);
                Object(_halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_10__["default"])($(scope), context);
                Object(_halothemes_haloVideo__WEBPACK_IMPORTED_MODULE_9__["default"])($(scope).find('[data-slick]'));
                $(scope).on('click', '.dropdown-menu-button', function (event) {
                  var $target = $(event.currentTarget);

                  if ($target.hasClass('is-open')) {
                    $target.removeClass('is-open').attr('aria-expanded', false);
                    $target.siblings('.dropdown-menu').removeClass('is-open').attr('aria-hidden', true);
                  } else {
                    $target.addClass('is-open').attr('aria-expanded', true);
                    $target.siblings('.dropdown-menu').addClass('is-open').attr('aria-hidden', false);
                  }

                  event.stopPropagation();
                });
                $(document).on('click', function (event) {
                  if ($(scope).find('.dropdown-menu-button').hasClass('is-open')) {
                    if ($(event.target).closest('.dropdown-menu-button').length === 0 && $(event.target).closest('.dropdown-menu').length === 0) {
                      $(scope).find('.dropdown-menu-button').removeClass('is-open').attr('aria-expanded', false);
                      $(scope).find('.dropdown-menu-button').siblings('.dropdown-menu').removeClass('is-open').attr('aria-hidden', true);
                    }
                  }
                });
                var productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_7__["default"]($(scope), context);
                productDetails.setProductVariant();
                return productDetails;
              }
            });
          }

          setFlag = false;
        }
      });
    }
  };

  _proto.homeParallaxBanner = function homeParallaxBanner() {
    if ($('#halo_parralax_banners').length > 0) {
      var wrap = $('#halo_parralax_banners'),
          image = wrap.find('[data-image]').data('image');
      wrap.find('[data-image]').css('background-image', 'url(' + image + ')');
    }
  };

  _proto.loadOptionForProductCard = function loadOptionForProductCard() {
    var context = this.context;

    if ($('.productCarousel').length > 0) {
      $('.productCarousel').each(function (index, element) {
        var $prodWrapId = $(element).attr('id');
        Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, $prodWrapId);
      });
    }

    if ($('.halo-block .productGrid').length > 0) {
      $('.halo-block .productGrid').each(function (index, element) {
        var $prodWrapId = $(element).attr('id');
        Object(_halothemes_haloAddOptionForProductCard__WEBPACK_IMPORTED_MODULE_5__["default"])(context, $prodWrapId);
      });
    }
  } // Banner parallax 2
  ;

  _proto.customerReviewCarousel = function customerReviewCarousel() {
    if ($('#halo_parralax_banners .halo-row').length) {
      if (!$('#halo_parralax_banners .halo-row').hasClass('slick-slider')) {
        $('#halo_parralax_banners .halo-row').slick({
          dots: true,
          arrows: false,
          infinite: false,
          mobileFirst: true,
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "<svg class='slick-next slick-arrow' aria-label='Next Slide'><use xlink:href=#slick-arrow-next></use></svg>",
          prevArrow: "<svg class='slick-prev slick-arrow' aria-label='Previous Slide'><use xlink:href=#slick-arrow-prev></use></svg>",
          responsive: [{
            breakpoint: 1024,
            settings: {
              arrows: true
            }
          }]
        });
      }
    }
  };

  _proto.reviewCarousel = function reviewCarousel() {
    var productIds = $("[function=list-product]").data("ids").toString().split(",").map(function (item) {
      console.log(item);
      return parseInt(item, 10);
    });
    var stoken = $("[name=store-token]").val();
    console.log(stoken); // console.log(productIds)

    productIds.forEach(function (item) {
      fetch("https://shp-webserver.glitch.me/get-teamdesk", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "table": "Review",
          "options": "?filter=[Product SKU]= '" + item + "'"
        })
      }).then(function (r) {
        console.log(r);
      }).catch(function (err) {
        console.log(err);
      });
    });
    var review2 = [];
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + stoken
      },
      body: JSON.stringify({
        query: "\n                query productsBySku {\n                    site {\n                        product  (sku: " + productIds + ") {    \n                            edges {\n                                node {\n                                    sku                    \n                                    name\n                                    addToCartUrl\n                                    path\n                                    id\n                                    entityId\n                                    inventory {\n                                        isInStock\n                                    }\n                                    prices {\n                                        price {\n                                            value\n                                            currencyCode\n                                        }\n                                        salePrice {\n                                            ...MoneyFields\n                                        }\n                                    }\n\n                                    \n                                    brand {\n                                        \n                                        name\n                                      }\n                                    defaultImage {\n                                        url (width: 200)\n                                    }                                    \n                                    productOptions {\n                                        \n                                        ...OptionFields\n                                    }         \n                                }\n                            }\n                            \n                                       \n                        }\n                    }\n                }\n                fragment MoneyFields on Money {\n                    value\n                    currencyCode\n                }\n                fragment OptionFields on ProductOptionConnection {\n                    edges {\n                        node {\n                            entityId\n                            displayName\n                                                                                \n                            ... on MultipleChoiceOption {\n                                values {\n                                    edges {\n                                        node {\n                                            entityId\n                                            label                                                                    \n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }"
      })
    }).then(function (r) {
      return r.json();
    }).then(function (r) {
      if (r.data) {
        // console.log(r.data)
        var content = "";
        var i = -1;

        for (var _iterator = _createForOfIteratorHelperLoose(r.data.site.products.edges), _step; !(_step = _iterator()).done;) {
          var _product = _step.value;
          // i++
          // console.log(i)
          // console.log(product)
          content += "\n                    <div>\n                    <div>\n                        <div>\n                            <img src=" + _product.node.defaultImage.url + ">\n                        </div>\n                        <div>\n                            <div>\n                                <div>Reviews</div>\n                                <div>" + _product.node.name + "</div>\n                                <div>" + _product.node.prices.price.value + _product.node.prices.price.currencyCode + "</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                ";
        }

        $("#r-test1").html(content);
        $('#r-test1').slick({
          "dots": false,
          "arrows": false,
          "infinite": false,
          "slidesToShow": 1,
          "slidesToScroll": 1
        });
      }
    }); // $('.r-testblock .slick-track .slick-slide').each((item, slider) => {
    //     const review2 = []
    //     const aList = slider.children[0].value
    // })

    $('.arr1 .slick-prev').on('click', function () {
      $('#r-test1').slick("slickPrev");
    });
    $('.arr1 .slick-next').on('click', function () {
      $('#r-test1').slick("slickNext");
    });
  };

  _proto.homeProductRecommended = function homeProductRecommended() {
    var $homePGF = $('.home2-block-recommended');
    var $homePGF_grid = $homePGF.find('.productGrid');
    var homePGF_itemLength = $homePGF_grid.find('.product').length;
    var $homePGF_btnBlock = $('.homePGF_btn');
    var $homePGF_btn = $('.homePGF_btn a');
    var dataColumn = $homePGF_grid.data('columns');
    var tt_productShow;

    if ($homePGF.length && homePGF_itemLength > 0) {
      var fWidth = window.innerWidth;

      if (fWidth > 1279 && homePGF_itemLength > 10) {
        $homePGF_btnBlock.addClass('is-show');
      } else if (fWidth <= 1279 && fWidth > 991 && homePGF_itemLength > 8) {
        $homePGF_btnBlock.addClass('is-show');
      } else if (fWidth <= 991 && fWidth > 767 && homePGF_itemLength > 6) {
        $homePGF_btnBlock.addClass('is-show');
      } else if (fWidth <= 767 && homePGF_itemLength > 4) {
        $homePGF_btnBlock.addClass('is-show');
      }

      $homePGF_btn.on('click', function (e) {
        e.preventDefault();
        var wWidth = window.innerWidth;

        if (wWidth > 1279) {
          tt_productShow = 10;
        } else if (wWidth <= 1279 && wWidth > 991) {
          tt_productShow = 8;
        } else if (wWidth <= 991 && wWidth > 767) {
          tt_productShow = 6;
        } else {
          tt_productShow = 4;
        }

        if ($homePGF_grid.find('.product:hidden').length > 0) {
          $homePGF_grid.find('.product:hidden:lt(' + tt_productShow + ')').css('display', 'inline-block');

          if ($homePGF_grid.find('.product:hidden').length == 0) {
            $homePGF_btn.text('No More Products').attr('disabled', '').addClass('disable');
          }
        }
      });
    }
  };

  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvcGFyYWxsYXgvanF1ZXJ5LnBhcmFsbGF4LXNjcm9sbC5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2hvbWUuanMiXSwibmFtZXMiOlsiZmV0Y2giLCJyZXF1aXJlIiwiY29udGV4dCIsIndyYXBwZXIiLCJ0aGVtZVNldHRpbmdzIiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QiLCJjYWxsUHJvZHVjdE9wdGlvbiIsInByb2R1Y3RfY2xhc3MiLCJlYWNoIiwiaW5kZXgiLCJlbGVtZW50IiwicHJvZHVjdElkIiwiJCIsImRhdGEiLCJsaXN0IiwicHVzaCIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZ2V0UHJvZHVjdE9wdGlvbiIsInRoZW4iLCJyZW5kZXJPcHRpb24iLCJpZHgiLCJpdGVtIiwiYXJyIiwicHJvZHVjdF93cmFwcGVyIiwiZmluZCIsInR4dCIsInJlbW92ZSIsImNvdW50TW9yZU9wdGlvbiIsInByb2R1Y3RMaW5rIiwiYXR0ciIsImFwcGVuZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJyZXMiLCJqc29uIiwiYUZpbHRlciIsInNpdGUiLCJwcm9kdWN0cyIsImVkZ2VzIiwibm9kZSIsImVudGl0eUlkIiwicHJvZHVjdEZpZWxkQ29sb3IiLCJwcm9kdWN0RmllbGRTaXplIiwiYUZpbHRlcjIiLCJwcm9kdWN0T3B0aW9ucyIsImFGaWx0ZXIzIiwiZmlsdGVyIiwiZGlzcGxheVN0eWxlIiwiYUZpbHRlcjUiLCJkaXNwbGF5TmFtZSIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0MiIsImFGaWx0ZXI0IiwidmFsdWVzIiwidGl0bGVWYXIiLCJsYWJlbCIsImlkVmFyIiwibGVuZ3RoQ29sb3JWYXIiLCJoZXhDb2xvcnMiLCJjb2xvcjEiLCJjb2xvcjIiLCJjb2xvcjMiLCJpbWciLCJpbWFnZVVybCIsIkJvb2xlYW4iLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdFRleHQiLCJQYXJhbGxheFNjcm9sbCIsImluaXQiLCJzaG93TG9ncyIsInJvdW5kIiwiX2xvZyIsIl9pbml0ZWQiLCJfcmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYSIsImIiLCJzZXRUaW1lb3V0IiwiX29uU2Nyb2xsIiwiX3Byb3BlcnRpZXMiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJzY3JvbGxUb3AiLCJjIiwiaGVpZ2h0IiwicHJveHkiLCJkIiwiZSIsImYiLCJnIiwiaCIsImkiLCJrIiwiaiIsImwiLCJtIiwibiIsIk1hdGgiLCJtYXgiLCJvZmZzZXQiLCJ0b3AiLCJvIiwiZGlzdGFuY2UiLCJwIiwicSIsImVhc2luZyIsInIiLCJzIiwiZHVyYXRpb24iLCJ0IiwidSIsInYiLCJzbW9vdGhuZXNzIiwidyIsIm1pbiIsIm1hcCIsImNlaWwiLCJ6IiwieCIsInBlcnNwZWN0aXZlIiwieSIsInBhcmVudCIsInNjYWxlWCIsInNjYWxlWSIsInNjYWxlWiIsInNjYWxlIiwiQSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsIkIiLCJDIiwiSG9tZSIsIm9uUmVhZHkiLCJjb3VudERvd25IZXJvQ2Fyb3VzZWwiLCJjdXN0b21QYWdpbmciLCJsb2FkUHJvZHVjdEJ5Q2F0ZWdvcnkiLCJsb2FkUHJvZHVjdFRhYkJ5Q2F0ZWdvcnkiLCJsb2FkUHJvZHVjdEJ5Q2F0ZWdvcnlXaXRoQmFubmVyIiwiZmFuY3lib3hWaWRlb0Jhbm5lciIsImZhcXNUb2dnbGUiLCJyZWNlbnRCbG9nU2xpZGVyIiwiaG9tZVNwZWNpYWxQcm9kdWN0IiwiaG9tZVBhcmFsbGF4QmFubmVyIiwibG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkIiwiY3VzdG9tZXJSZXZpZXdDYXJvdXNlbCIsImhvbWVQcm9kdWN0UmVjb21tZW5kZWQiLCJyZXZpZXdDYXJvdXNlbCIsInBhcmVudHMiLCJhZGRDbGFzcyIsImNvdW50RG93biIsImNvdW50RG93bkRhdGUiLCJEYXRlIiwiZ2V0VGltZSIsInNlZnQiLCJjb3VudGRvd25mdW5jdGlvbiIsInNldEludGVydmFsIiwibm93IiwiY2xlYXJJbnRlcnZhbCIsImh0bWwiLCJkYXlzIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwic3RyQ291bnREb3duIiwiaGVyb0N1c3RvbSIsImhlcm9DdXN0b21TbGlkZSIsInNsaWNrIiwiZG90cyIsImFycm93cyIsIm1vYmlsZUZpcnN0Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJpbmZpbml0ZSIsImFzTmF2Rm9yIiwic2xpZGUiLCJ0ZXh0Iiwib24iLCJldmVudCIsInNsaWRlciIsInBvcyIsIiRzbGlkZXMiLCJyZW1vdmVDbGFzcyIsIm9wdGlvbnMiLCJ0ZW1wbGF0ZSIsImhlYWRlcl9oZWlnaHQiLCJzY3JvbGwiLCJzZXRGbGFnIiwid3JhcCIsImNhdElkIiwiY2F0VXJsIiwiYmxvY2tJZCIsImxvYWRDYXRlZ29yeSIsImlkIiwidXJsIiwib3B0aW9uIiwidXRpbHMiLCJhcGkiLCJnZXRQYWdlIiwiZXJyIiwicmVzcG9uc2UiLCJzbGlja0Nhcm91c2VsIiwiaGFsb0FkZE9wdGlvbiIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJwYXJzZUludCIsImhvbWVfcHJvZHVjdF9ibG9ja19jb2wiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwiJGl0ZW1FbGUiLCJibG9jayIsImluY2x1ZGVzIiwibG9jYXRpb24iLCJob3N0IiwicmVwbGFjZSIsInNob3ciLCJyZXZpZXdTaG93IiwibGltaXQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmV2aWV3MiIsIlByb21pc2UiLCJhbGwiLCJpdGVtMSIsIm5leHRFbGVtZW50U2libGluZyIsImVtcHR5IiwicmV2aWV3MyIsInZpZHUiLCJpbm5lckhUTUwiLCJnb2t1IiwicmV2aWV3QXZnIiwicmVkdWNlIiwiY2F0Y2giLCJob21lX3Byb2R1Y3RfYmxvY2tfdGFiX2NvbCIsIiR0YWJTb3J0aW5nIiwiaGFzQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YVRhYiIsIiR0aGlzQmxvY2siLCJjbG9zZXN0IiwiaHJlZiIsImxhYmVsRmxhc2hEZWFscyIsInNsaWNrQ2Fyb3VzZWw0Iiwic2xpY2tDYXJvdXNlbDMiLCJzbGlja0Nhcm91c2VsMiIsImhvbWVfcHJvZHVjdF9ibG9ja193aXRoX2Jhbm5lcl9jb2wiLCIkaXRlbVNpZGUiLCIkdGhpc0xhYmVsIiwiZmFuY3lib3giLCJub3QiLCJzbGlkZURvd24iLCJzbGlkZVVwIiwid2lkdGgiLCJyZXNpemUiLCJob21lX3Byb2R1Y3RfYmxvY2tfc3BlY2lhbCIsInZpZXdpbmdQcm9kdWN0Iiwidmlld2VyVGV4dCIsInByb2R1Y3Rfdmlld2luZ1Byb2R1Y3RfdGV4dCIsIm51bWJlcnNWaWV3ZXJfdGV4dCIsInByb2R1Y3Rfdmlld2luZ1Byb2R1Y3Rfdmlld2VyIiwibnVtYmVyc1ZpZXdlckxpc3QiLCJwYXJzZSIsIm51bWJlcnNWaWV3ZXJJdGVtIiwicmFuZG9tIiwiY291bnREb3duUHJvZHVjdCIsInNvbGRQcm9kdWN0IiwibnVtYmVyc1Byb2R1Y3RfdGV4dCIsInByb2R1Y3Rfc29sZFByb2R1Y3RfcHJvZHVjdHMiLCJudW1iZXJzSG91cnNfdGV4dCIsInByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnMiLCJzb2xkUHJvZHVjdFRleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X3RleHQiLCJzb2xkUHJvZHVjdFRleHQyIiwicHJvZHVjdF9zb2xkUHJvZHVjdF9ob3Vyc190ZXh0IiwibnVtYmVyc1Byb2R1Y3RMaXN0IiwibnVtYmVyc1Byb2R1Y3RJdGVtIiwibnVtYmVyc0hvdXJzTGlzdCIsIm51bWJlcnNIb3Vyc0l0ZW0iLCJpbml0VGh1bWJuYWlsc0hlaWdodCIsIiRzY29wZSIsImVsIiwiJGNhcm91c2VsX25hdiIsIiRjYXJvdXNlbF9mb3IiLCJwcm9kdWN0IiwiZ2V0QnlJZCIsInNjb3BlIiwiZ2V0Iiwic2V0UG9zaXRpb24iLCJoYWxvTm90aWZ5TWUiLCJoYWxvWW91dHViZUNhcm91c2VsIiwic2libGluZ3MiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJwcm9kdWN0RGV0YWlscyIsIlByb2R1Y3REZXRhaWxzIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJpbWFnZSIsImNzcyIsIiRwcm9kV3JhcElkIiwiYWRhcHRpdmVIZWlnaHQiLCJwcm9kdWN0SWRzIiwic3BsaXQiLCJzdG9rZW4iLCJ2YWwiLCJjb250ZW50IiwiZGVmYXVsdEltYWdlIiwibmFtZSIsInByaWNlcyIsInByaWNlIiwidmFsdWUiLCJjdXJyZW5jeUNvZGUiLCIkaG9tZVBHRiIsIiRob21lUEdGX2dyaWQiLCJob21lUEdGX2l0ZW1MZW5ndGgiLCIkaG9tZVBHRl9idG5CbG9jayIsIiRob21lUEdGX2J0biIsImRhdGFDb2x1bW4iLCJ0dF9wcm9kdWN0U2hvdyIsImZXaWR0aCIsImlubmVyV2lkdGgiLCJ3V2lkdGgiLCJQYWdlTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsd0RBQUQsQ0FBckI7O0FBRWUseUVBQVNDLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCO0VBQ3RDLElBQUlELE9BQU8sQ0FBQ0UsYUFBUixDQUFzQkMsdUJBQXRCLElBQWlELElBQXJELEVBQTJEO0lB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LENBQW1CLGlCQUFuQixFQUFzQ1IsTUFBdEMsSUFBZ0QsQ0FBcEQsRUFBdUQ7WUFDbkQ0VCxZQUFZLENBQUNoSixJQUFiLENBQWtCLGtCQUFsQixFQUFzQy9KLElBQXRDLENBQTJDLFVBQTNDLEVBQXVELEVBQXZELEVBQTJEaUksUUFBM0QsQ0FBb0UsU0FBcEU7VUFDSDtRQUNKO01BQ0osQ0F4QkQ7SUF5Qkg7RUFDSixDOzs7RUFqdEM2Qm9MLHFEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5jb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCwgd3JhcHBlcikge1xuICAgIGlmIChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QgPT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGNvbnRleHQudG9rZW4sXG4gICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIgPSAkKCcjJyt3cmFwcGVyKSxcbiAgICAgICAgICAgIHByb2R1Y3RfY2xhc3MgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQnKTtcbiAgICAgICAgdmFyICBsaXN0ID0gW107XG5cbiAgICAgICAgZnVuY3Rpb24gY2FsbFByb2R1Y3RPcHRpb24oKSB7XG4gICAgICAgICAgICBwcm9kdWN0X2NsYXNzLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoZWxlbWVudCkuZGF0YShcInByb2R1Y3QtaWRcIik7XG5cbiAgICAgICAgICAgICAgICBsaXN0LnB1c2gocHJvZHVjdElkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmKGxpc3QubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgZ2V0UHJvZHVjdE9wdGlvbihsaXN0KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb24oZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGxpc3QsIChpZHgsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQgPSBsaXN0W2lkeF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHh0ID0gJChlbGVtZW50KS5kYXRhKCdwcm9kdWN0LXN3YXRjaC12YWx1ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyclt0eHRdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJbdHh0XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykubGVuZ3RoID4gNCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50TW9yZU9wdGlvbiAgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tb3B0aW9uLXN3YXRjaCcpLmxlbmd0aCAtIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RMaW5rID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJ1tkYXRhLXByb2R1Y3QtaWQ9XCInK3Byb2R1Y3RJZCsnXCJdJykuZmluZCgnLmNhcmQtbGluaycpLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1vcHRpb24tc3dhdGNoJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPj0gNCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQgLnNob3dtb3JlJykubGVuZ3RoIDwgMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJyAuZm9ybS1maWVsZDpub3QoLmZvcm0tZmllbGQtLXNpemUpJykuYXBwZW5kKCc8YSBocmVmPVwiJytwcm9kdWN0TGluaysnXCIgY2xhc3M9XCJzaG93bW9yZVwiPisnK2NvdW50TW9yZU9wdGlvbisnPC9hPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFByb2R1Y3RPcHRpb24obGlzdCl7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goJy9ncmFwaHFsJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSBTZXZlcmFsUHJvZHVjdHNCeUlEIHtcbiAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzKGVudGl0eUlkczogW2ArbGlzdCtgXSwgZmlyc3Q6IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE9wdGlvbnMoZmlyc3Q6IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIE11bHRpcGxlQ2hvaWNlT3B0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gU3dhdGNoT3B0aW9uVmFsdWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhleENvbG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsKHdpZHRoOiA1MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYH0pLFxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihyZXMgPT4gcmVzLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyT3B0aW9uKGRhdGEpe1xuICAgICAgICAgICAgdmFyIGFGaWx0ZXIgPSBkYXRhLnNpdGUucHJvZHVjdHMuZWRnZXM7XG5cbiAgICAgICAgICAgICQuZWFjaChhRmlsdGVyLCAoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gYUZpbHRlcltpbmRleF0ubm9kZS5lbnRpdHlJZCxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IgPSBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycgLmZvcm0tZmllbGQ6bm90KC5mb3JtLWZpZWxkLS1zaXplKScpLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRTaXplID0gcHJvZHVjdF93cmFwcGVyLmZpbmQoJy5jYXJkLW9wdGlvbi0nK3Byb2R1Y3RJZCsnIC5mb3JtLWZpZWxkLS1zaXplJyksXG4gICAgICAgICAgICAgICAgICAgIGFGaWx0ZXIyID0gYUZpbHRlcltpbmRleF0ubm9kZS5wcm9kdWN0T3B0aW9ucy5lZGdlcztcblxuICAgICAgICAgICAgICAgIHZhciBhRmlsdGVyMyA9IGFGaWx0ZXIyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5ub2RlLmRpc3BsYXlTdHlsZSA9PT0gJ1N3YXRjaCc7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjUgPSBhRmlsdGVyMi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubm9kZS5kaXNwbGF5TmFtZSA9PT0gY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0MjtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmKGFGaWx0ZXIzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgYUZpbHRlcjQgPSBhRmlsdGVyM1swXS5ub2RlLnZhbHVlcy5lZGdlcztcblxuICAgICAgICAgICAgICAgICAgICAkLmVhY2goYUZpbHRlcjQsIChpZHgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aXRsZVZhciA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFZhciA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5lbnRpdHlJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGhDb2xvclZhciA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yMSA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5oZXhDb2xvcnNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IyID0gYUZpbHRlcjRbaWR4XS5ub2RlLmhleENvbG9yc1sxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjMgPSBhRmlsdGVyNFtpZHhdLm5vZGUuaGV4Q29sb3JzWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyA9IGFGaWx0ZXI0W2lkeF0ubm9kZS5pbWFnZVVybDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobGVuZ3RoQ29sb3JWYXIgPT0gMil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEZpZWxkQ29sb3IuYXBwZW5kKCc8bGFiZWwgY2xhc3M9XCJmb3JtLW9wdGlvbiBmb3JtLW9wdGlvbi1zd2F0Y2hcIiBkYXRhLXByb2R1Y3Qtc3dhdGNoLXZhbHVlPVwiJytpZFZhcisnXCI+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi10b29sdGlwXCI+Jyt0aXRsZVZhcisnPC9zcGFuPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdmFyaWFudCBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvciBmb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjJcIiB0aXRsZT1cIicrdGl0bGVWYXIrJ1wiPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMSsnXCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2NvbG9yMisnXCI+PC9zcGFuPjwvc3Bhbj48L2xhYmVsPicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGxlbmd0aENvbG9yVmFyID09PSAzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yIGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMlwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCI+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IxKydcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IyKydcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrY29sb3IzKydcIj48L3NwYW4+PC9zcGFuPjwvbGFiZWw+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoQm9vbGVhbihjb2xvcjEpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5hcHBlbmQoJzxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uIGZvcm0tb3B0aW9uLXN3YXRjaFwiIGRhdGEtcHJvZHVjdC1zd2F0Y2gtdmFsdWU9XCInK2lkVmFyKydcIj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXRvb2x0aXBcIj4nK3RpdGxlVmFyKyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yXCIgdGl0bGU9XCInK3RpdGxlVmFyKydcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcrY29sb3IxKydcIj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihCb29sZWFuKGltZykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RGaWVsZENvbG9yLmFwcGVuZCgnPGxhYmVsIGNsYXNzPVwiZm9ybS1vcHRpb24gZm9ybS1vcHRpb24tc3dhdGNoXCIgZGF0YS1wcm9kdWN0LXN3YXRjaC12YWx1ZT1cIicraWRWYXIrJ1wiPjxzcGFuIGNsYXNzPVwiZm9ybS1vcHRpb24tdG9vbHRpcFwiPicrdGl0bGVWYXIrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tcGF0dGVyblwiIHRpdGxlPVwiJyt0aXRsZVZhcisnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJytpbWcrJylcIj48L3NwYW4+PC9sYWJlbD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RmllbGRDb2xvci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihhRmlsdGVyNS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdEZpZWxkU2l6ZS5sZW5ndGggPCAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rfd3JhcHBlci5maW5kKCcuY2FyZC1vcHRpb24tJytwcm9kdWN0SWQrJycpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2l6ZVwiPjxsYWJlbCBjbGFzcz1cImZvcm0tb3B0aW9uXCI+Jytjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb0FkZE9wdGlvbkZvclByb2R1Y3RUZXh0LnRvU3RyaW5nKCkrJzwvbGFiZWw+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZigoYUZpbHRlcjUubGVuZ3RoID09IDApICYmIChhRmlsdGVyMy5sZW5ndGggPT0gMCkpe1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X3dyYXBwZXIuZmluZCgnLmNhcmQtb3B0aW9uLScrcHJvZHVjdElkKycnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxQcm9kdWN0T3B0aW9uKCk7XG4gICAgfVxufVxuIiwiJChmdW5jdGlvbigpe1BhcmFsbGF4U2Nyb2xsLmluaXQoKX0pO3ZhciBQYXJhbGxheFNjcm9sbD17c2hvd0xvZ3M6ITEscm91bmQ6MWUzLGluaXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbG9nKFwiaW5pdFwiKSx0aGlzLl9pbml0ZWQ/KHRoaXMuX2xvZyhcIkFscmVhZHkgSW5pdGVkXCIpLHZvaWQodGhpcy5faW5pdGVkPSEwKSk6KHRoaXMuX3JlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbihhLGIpe3dpbmRvdy5zZXRUaW1lb3V0KGEsMWUzLzYwKX19KCksdm9pZCB0aGlzLl9vblNjcm9sbCghMCkpfSxfaW5pdGVkOiExLF9wcm9wZXJ0aWVzOltcInhcIixcInlcIixcInpcIixcInJvdGF0ZVhcIixcInJvdGF0ZVlcIixcInJvdGF0ZVpcIixcInNjYWxlWFwiLFwic2NhbGVZXCIsXCJzY2FsZVpcIixcInNjYWxlXCJdLF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWU6bnVsbCxfbG9nOmZ1bmN0aW9uKGEpe3RoaXMuc2hvd0xvZ3MmJmNvbnNvbGUubG9nKFwiUGFyYWxsYXggU2Nyb2xsIC8gXCIrYSl9LF9vblNjcm9sbDpmdW5jdGlvbihhKXt2YXIgYj0kKGRvY3VtZW50KS5zY3JvbGxUb3AoKSxjPSQod2luZG93KS5oZWlnaHQoKTt0aGlzLl9sb2coXCJvblNjcm9sbCBcIitiKSwkKFwiW2RhdGEtcGFyYWxsYXhdXCIpLmVhY2goJC5wcm94eShmdW5jdGlvbihkLGUpe3ZhciBmPSQoZSksZz1bXSxoPSExLGk9Zi5kYXRhKFwic3R5bGVcIik7dm9pZCAwPT1pJiYoaT1mLmF0dHIoXCJzdHlsZVwiKXx8XCJcIixmLmRhdGEoXCJzdHlsZVwiLGkpKTt2YXIgayxqPVtmLmRhdGEoXCJwYXJhbGxheFwiKV07Zm9yKGs9MjtmLmRhdGEoXCJwYXJhbGxheFwiK2spO2srKylqLnB1c2goZi5kYXRhKFwicGFyYWxsYXgtXCIraykpO3ZhciBsPWoubGVuZ3RoO2ZvcihrPTA7azxsO2srKyl7dmFyIG09altrXSxuPW1bXCJmcm9tLXNjcm9sbFwiXTt2b2lkIDA9PW4mJihuPU1hdGgubWF4KDAsJChlKS5vZmZzZXQoKS50b3AtYykpLG49MHxuO3ZhciBvPW0uZGlzdGFuY2UscD1tW1widG8tc2Nyb2xsXCJdO3ZvaWQgMD09byYmdm9pZCAwPT1wJiYobz1jKSxvPU1hdGgubWF4KDB8bywxKTt2YXIgcT1tLmVhc2luZyxyPW1bXCJlYXNpbmctcmV0dXJuXCJdO2lmKHZvaWQgMCE9cSYmJC5lYXNpbmcmJiQuZWFzaW5nW3FdfHwocT1udWxsKSx2b2lkIDAhPXImJiQuZWFzaW5nJiYkLmVhc2luZ1tyXXx8KHI9cSkscSl7dmFyIHM9bS5kdXJhdGlvbjt2b2lkIDA9PXMmJihzPW8pLHM9TWF0aC5tYXgoMHxzLDEpO3ZhciB0PW1bXCJkdXJhdGlvbi1yZXR1cm5cIl07dm9pZCAwPT10JiYodD1zKSxvPTE7dmFyIHU9Zi5kYXRhKFwiY3VycmVudC10aW1lXCIpO3ZvaWQgMD09dSYmKHU9MCl9dm9pZCAwPT1wJiYocD1uK28pLHA9MHxwO3ZhciB2PW0uc21vb3RobmVzczt2b2lkIDA9PXYmJih2PTMwKSx2PTB8diwoYXx8MD09dikmJih2PTEpLHY9MHx2O3ZhciB3PWI7dz1NYXRoLm1heCh3LG4pLHc9TWF0aC5taW4odyxwKSxxJiYodm9pZCAwPT1mLmRhdGEoXCJzZW5zXCIpJiZmLmRhdGEoXCJzZW5zXCIsXCJiYWNrXCIpLHc+biYmKFwiYmFja1wiPT1mLmRhdGEoXCJzZW5zXCIpPyh1PTEsZi5kYXRhKFwic2Vuc1wiLFwiZ29cIikpOnUrKyksdzxwJiYoXCJnb1wiPT1mLmRhdGEoXCJzZW5zXCIpPyh1PTEsZi5kYXRhKFwic2Vuc1wiLFwiYmFja1wiKSk6dSsrKSxhJiYodT1zKSxmLmRhdGEoXCJjdXJyZW50LXRpbWVcIix1KSksdGhpcy5fcHJvcGVydGllcy5tYXAoJC5wcm94eShmdW5jdGlvbihhKXt2YXIgYj0wLGM9bVthXTtpZih2b2lkIDAhPWMpe1wic2NhbGVcIj09YXx8XCJzY2FsZVhcIj09YXx8XCJzY2FsZVlcIj09YXx8XCJzY2FsZVpcIj09YT9iPTE6Yz0wfGM7dmFyIGQ9Zi5kYXRhKFwiX1wiK2EpO3ZvaWQgMD09ZCYmKGQ9Yik7dmFyIGU9KGMtYikqKCh3LW4pLyhwLW4pKStiLGk9ZCsoZS1kKS92O2lmKHEmJnU+MCYmdTw9cyl7dmFyIGo9YjtcImJhY2tcIj09Zi5kYXRhKFwic2Vuc1wiKSYmKGo9YyxjPS1jLHE9cixzPXQpLGk9JC5lYXNpbmdbcV0obnVsbCx1LGosYyxzKX1pPU1hdGguY2VpbChpKnRoaXMucm91bmQpL3RoaXMucm91bmQsaT09ZCYmZT09YyYmKGk9YyksZ1thXXx8KGdbYV09MCksZ1thXSs9aSxkIT1nW2FdJiYoZi5kYXRhKFwiX1wiK2EsZ1thXSksaD0hMCl9fSx0aGlzKSl9aWYoaCl7aWYodm9pZCAwIT1nLnope3ZhciB4PW0ucGVyc3BlY3RpdmU7dm9pZCAwPT14JiYoeD04MDApO3ZhciB5PWYucGFyZW50KCk7eS5kYXRhKFwic3R5bGVcIil8fHkuZGF0YShcInN0eWxlXCIseS5hdHRyKFwic3R5bGVcIil8fFwiXCIpLHkuYXR0cihcInN0eWxlXCIsXCJwZXJzcGVjdGl2ZTpcIit4K1wicHg7IC13ZWJraXQtcGVyc3BlY3RpdmU6XCIreCtcInB4OyBcIit5LmRhdGEoXCJzdHlsZVwiKSl9dm9pZCAwPT1nLnNjYWxlWCYmKGcuc2NhbGVYPTEpLHZvaWQgMD09Zy5zY2FsZVkmJihnLnNjYWxlWT0xKSx2b2lkIDA9PWcuc2NhbGVaJiYoZy5zY2FsZVo9MSksdm9pZCAwIT1nLnNjYWxlJiYoZy5zY2FsZVgqPWcuc2NhbGUsZy5zY2FsZVkqPWcuc2NhbGUsZy5zY2FsZVoqPWcuc2NhbGUpO3ZhciB6PVwidHJhbnNsYXRlM2QoXCIrKGcueD9nLng6MCkrXCJweCwgXCIrKGcueT9nLnk6MCkrXCJweCwgXCIrKGcuej9nLno6MCkrXCJweClcIixBPVwicm90YXRlWChcIisoZy5yb3RhdGVYP2cucm90YXRlWDowKStcImRlZykgcm90YXRlWShcIisoZy5yb3RhdGVZP2cucm90YXRlWTowKStcImRlZykgcm90YXRlWihcIisoZy5yb3RhdGVaP2cucm90YXRlWjowKStcImRlZylcIixCPVwic2NhbGVYKFwiK2cuc2NhbGVYK1wiKSBzY2FsZVkoXCIrZy5zY2FsZVkrXCIpIHNjYWxlWihcIitnLnNjYWxlWitcIilcIixDPXorXCIgXCIrQStcIiBcIitCK1wiO1wiO3RoaXMuX2xvZyhDKSxmLmF0dHIoXCJzdHlsZVwiLFwidHJhbnNmb3JtOlwiK0MrXCIgLXdlYmtpdC10cmFuc2Zvcm06XCIrQytcIiBcIitpKX19LHRoaXMpKSx3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lP3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoJC5wcm94eSh0aGlzLl9vblNjcm9sbCx0aGlzLCExKSk6dGhpcy5fcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCQucHJveHkodGhpcy5fb25TY3JvbGwsdGhpcywhMSkpfX07XG4iLCJpbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcclxuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5kcm9wZG93bic7XHJcbmltcG9ydCBmYW5jeWJveCBmcm9tICcuL2hhbG90aGVtZXMvanF1ZXJ5LmZhbmN5Ym94Lm1pbic7XHJcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBoYWxvQWRkT3B0aW9uIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdENhcmQnO1xyXG5pbXBvcnQgcGFyYWxsYXggZnJvbSAnLi9oYWxvdGhlbWVzL3BhcmFsbGF4L2pxdWVyeS5wYXJhbGxheC1zY3JvbGwubWluJztcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gJy4vY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XHJcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCwgbW9kYWxUeXBlcyB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcclxuaW1wb3J0IGhhbG9Zb3V0dWJlQ2Fyb3VzZWwgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9WaWRlbyc7XHJcbmltcG9ydCBoYWxvTm90aWZ5TWUgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Ob3RpZnlNZSc7XHJcbmltcG9ydCBwcm9kdWN0IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzL3NyYy9ob29rcy9wcm9kdWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICB0aGlzLmNvdW50RG93bkhlcm9DYXJvdXNlbCgpO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tUGFnaW5nKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdEJ5Q2F0ZWdvcnkoKTtcclxuICAgICAgICB0aGlzLmxvYWRQcm9kdWN0VGFiQnlDYXRlZ29yeSgpO1xyXG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3RCeUNhdGVnb3J5V2l0aEJhbm5lcigpO1xyXG4gICAgICAgIHRoaXMuZmFuY3lib3hWaWRlb0Jhbm5lcigpO1xyXG4gICAgICAgIHRoaXMuZmFxc1RvZ2dsZSgpO1xyXG4gICAgICAgIHRoaXMucmVjZW50QmxvZ1NsaWRlcigpO1xyXG4gICAgICAgIHRoaXMuaG9tZVNwZWNpYWxQcm9kdWN0KCk7XHJcbiAgICAgICAgdGhpcy5ob21lUGFyYWxsYXhCYW5uZXIoKTtcclxuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCgpO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tZXJSZXZpZXdDYXJvdXNlbCgpO1xyXG4gICAgICAgIHRoaXMuaG9tZVByb2R1Y3RSZWNvbW1lbmRlZCgpO1xyXG4gICAgICAgIHRoaXMucmV2aWV3Q2Fyb3VzZWwoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvdW50RG93bkhlcm9DYXJvdXNlbCgpIHtcclxuICAgICAgICAkKCcuaGVyb0Nhcm91c2VsLWNvdW50ZG93bicpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICQoZWxlbWVudCkucGFyZW50cygnLnNsaWNrLXNsaWRlJykuYWRkQ2xhc3MoJ2hhcy1jb3VudC1kb3duJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY291bnREb3duID0gJChlbGVtZW50KS5kYXRhKCdjYXJvdXNlbC1jb3VudGRvd24nKSxcclxuICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShjb3VudERvd24pLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIHNlZnQgPSAkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvdW50ZG93bmZ1bmN0aW9uID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duZnVuY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlZnQuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0ckNvdW50RG93biA9IFwiPHNwYW4gY2xhc3M9J251bSc+XCIrZGF5cytcIjxzcGFuPkRBWVM8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPSdudW0nPlwiK2hvdXJzK1wiPHNwYW4+SE9VUlM8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPSdudW0nPlwiK21pbnV0ZXMrXCI8c3Bhbj5NSU5TPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz0nbnVtJz5cIitzZWNvbmRzK1wiPHNwYW4+U0VDUzwvc3Bhbj48L3NwYW4+XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlZnQuaHRtbChzdHJDb3VudERvd24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjdXN0b21QYWdpbmcoKXtcclxuICAgICAgICBjb25zdCBoZXJvQ3VzdG9tID0gJCgnLmhlcm9DYXJvdXNlbC1jdXN0b20nKTtcclxuICAgICAgICBjb25zdCBoZXJvQ3VzdG9tU2xpZGUgPSAkKCcuaGVyb0Nhcm91c2VsLWN1c3RvbSAuc2xpY2stZG90cyBsaScpO1xyXG4gICAgICAgIGhlcm9DdXN0b20uc2xpY2soe1xyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiBoZXJvQ3VzdG9tLmRhdGEoJ2F1dG9wbGF5JyksXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBhc05hdkZvcjogXCIuaGVyb0Nhcm91c2VsXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL0FEQVxyXG4gICAgICAgICQoJy5oZXJvQ2Fyb3VzZWwtY3VzdG9tIC5zbGljay1kb3RzIGxpJykuZWFjaChmdW5jdGlvbihpKXtcclxuICAgICAgICAgICAgdmFyIHNsaWRlID0gJCh0aGlzKS5maW5kKCdidXR0b24nKS50ZXh0KCk7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uJykudGV4dCgnMCcgKyBzbGlkZSkuYWRkQ2xhc3MoJ3NsaWNrLWRvdHMtaXRlbScpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGhlcm9DdXN0b20ub24oJ2FmdGVyQ2hhbmdlJywgKGV2ZW50LCBzbGlkZXIsIGkpID0+IHtcclxuICAgICAgICAgICAgdmFyIHBvcyA9ICQoc2xpZGVyLiRzbGlkZXNbaV0pLmZpbmQoJ2RpdltkYXRhLXBvc2l0aW9uXScpLmRhdGEoJ3Bvc2l0aW9uJyk7XHJcblxyXG4gICAgICAgICAgICBpZihwb3MgPT09ICdyaWdodCcpe1xyXG4gICAgICAgICAgICAgICAgaGVyb0N1c3RvbS5yZW1vdmVDbGFzcygnaGVyb0Nhcm91c2VsLWN1c3RvbUxlZnQnKS5hZGRDbGFzcygnaGVyb0Nhcm91c2VsLWN1c3RvbVJpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIGhlcm9DdXN0b20ucmVtb3ZlQ2xhc3MoJ2hlcm9DYXJvdXNlbC1jdXN0b21SaWdodCcpLmFkZENsYXNzKCdoZXJvQ2Fyb3VzZWwtY3VzdG9tTGVmdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCQoJy5oZXJvQ2Fyb3VzZWwtc2xpZGUtLWZpcnN0IC5oZXJvQ2Fyb3VzZWwtY29udGVudC13cmFwcGVyIC5oZXJvQ2Fyb3VzZWwtY29udGVudC0tcmlnaHQnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaGVyb0N1c3RvbS5yZW1vdmVDbGFzcygnaGVyb0Nhcm91c2VsLWN1c3RvbUxlZnQnKS5hZGRDbGFzcygnaGVyb0Nhcm91c2VsLWN1c3RvbVJpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQcm9kdWN0QnlDYXRlZ29yeSgpe1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAncHJvZHVjdHMvY2Fyb3VzZWwtMidcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZigkKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LWlkXScpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB2YXIgIGhlYWRlcl9oZWlnaHQgPSAkKCcuaGVhZGVyJykuaGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCBsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID4gaGVhZGVyX2hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNldEZsYWcpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWJsb2NrW2RhdGEtY2F0ZWdvcnktaWRdJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdyYXAgPSAkKGVsZW1lbnQpLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdElkID0gJChlbGVtZW50KS5kYXRhKCdkYXRhLWNhdGVnb3J5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSAkKGVsZW1lbnQpLmRhdGEoJ2NhdGVnb3J5LXVybCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZCA9ICQoZWxlbWVudCkuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEkKCcjcHJvZHVjdC1ieS1jYXRlLScrY2F0SWQrJyAucHJvZHVjdENhcm91c2VsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZENhdGVnb3J5KGNhdElkLCBjYXRVcmwsIG9wdGlvbnMsIHdyYXAsIGJsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBsb2FkQ2F0ZWdvcnkoaWQsIHVybCwgb3B0aW9uLCB3cmFwLCBibG9ja0lkKXtcclxuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCBvcHRpb24sIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighd3JhcC5maW5kKCcucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWwod3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LWlkXScpLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsIGJsb2NrSWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbCh3cmFwKXtcclxuICAgICAgICAgICAgd3JhcC5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfY29sKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja19jb2wpIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja19jb2wpIC0gMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkUHJvZHVjdFRhYkJ5Q2F0ZWdvcnkoKXtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ3Byb2R1Y3RzL2Nhcm91c2VsLTMnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZigkKCcucHJvZHVjdENhcm91c2VsLXRhYnMnKS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgaWYoISQoJy5wcm9kdWN0Q2Fyb3VzZWwtdGFicyAudGFiLWNvbnRlbnQuaXMtYWN0aXZlIC5wcm9kdWN0Q2Fyb3VzZWwgLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKCQoJy50YWItY29udGVudC5pcy1hY3RpdmUnKSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCAkaXRlbUVsZSA9ICQoaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmxvY2sgPSAkaXRlbUVsZSxcclxuICAgICAgICAgICAgICAgICAgICB3cmFwID0gYmxvY2suZmluZCgnLnByb2R1Y3RDYXJvdXNlbCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdElkID0gYmxvY2suZGF0YSgndGFiLWNhdGVnb3J5LWlkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0VXJsID0gYmxvY2suZGF0YSgndGFiLWNhdGVnb3J5LXVybCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrSWQgPSBibG9jay5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYXRVcmwuaW5jbHVkZXMoXCJodHRwXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLmhvc3QuaW5jbHVkZXMoXCJlbi5zdXBlcmhhaXJwaWVjZXMuZnJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0VXJsID0gY2F0VXJsLnJlcGxhY2UoXCIvL3N1cGVyaGFpcnBpZWNlcy5mclwiLFwiLy9lbi5zdXBlcmhhaXJwaWVjZXMuZnJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoISQoJy5wcm9kdWN0Q2Fyb3VzZWwtdGFicyAudGFiLWNvbnRlbnQuaXMtYWN0aXZlIC5wcm9kdWN0Q2Fyb3VzZWwgLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suZmluZCgnLmxvYWRpbmdPdmVybGF5Jykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRDYXRlZ29yeShjYXRJZCwgY2F0VXJsLCBvcHRpb25zLCB3cmFwLCBibG9ja0lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYoJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzJykubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgLy8gICAgIGlmKCEkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZSAucHJvZHVjdENhcm91c2VsIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpe1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIGJsb2NrID0gJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzIC50YWItY29udGVudC5pcy1hY3RpdmUnKSxcclxuICAgICAgICAvLyAgICAgICAgICAgICB3cmFwID0gYmxvY2suZmluZCgnLnByb2R1Y3RDYXJvdXNlbCcpLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNhdElkID0gYmxvY2suZGF0YSgndGFiLWNhdGVnb3J5LWlkJyksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2F0VXJsID0gYmxvY2suZGF0YSgndGFiLWNhdGVnb3J5LXVybCcpLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJsb2NrSWQgPSBibG9jay5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIGlmIChjYXRVcmwuaW5jbHVkZXMoXCJodHRwXCIpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGxvY2F0aW9uLmhvc3QuaW5jbHVkZXMoXCJlbi5zdXBlcmhhaXJwaWVjZXMuZnJcIikpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2F0VXJsID0gY2F0VXJsLnJlcGxhY2UoXCIvL3N1cGVyaGFpcnBpZWNlcy5mclwiLFwiLy9lbi5zdXBlcmhhaXJwaWVjZXMuZnJcIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgaWYoISQoJy5wcm9kdWN0Q2Fyb3VzZWwtdGFicyAudGFiLWNvbnRlbnQuaXMtYWN0aXZlIC5wcm9kdWN0Q2Fyb3VzZWwgLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYmxvY2suZmluZCgnLmxvYWRpbmdPdmVybGF5Jykuc2hvdygpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxvYWRDYXRlZ29yeShjYXRJZCwgY2F0VXJsLCBvcHRpb25zLCB3cmFwLCBibG9ja0lkKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzIFtkYXRhLXRhYl0nKS5vbigndG9nZ2xlZCcsIChldmVudCwgdGFiKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZighJCgnLnByb2R1Y3RDYXJvdXNlbC10YWJzIC50YWItY29udGVudC5pcy1hY3RpdmUgLnByb2R1Y3RDYXJvdXNlbCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICB2YXIgYmxvY2sgPSAkKCcucHJvZHVjdENhcm91c2VsLXRhYnMgLnRhYi1jb250ZW50LmlzLWFjdGl2ZScpLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB3cmFwID0gYmxvY2suZmluZCgnLnByb2R1Y3RDYXJvdXNlbCcpLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjYXRJZCA9IGJsb2NrLmRhdGEoJ3RhYi1jYXRlZ29yeS1pZCcpLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjYXRVcmwgPSBibG9jay5kYXRhKCd0YWItY2F0ZWdvcnktdXJsJyksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGJsb2NrSWQgPSBibG9jay5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoY2F0VXJsLmluY2x1ZGVzKFwiaHR0cFwiKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24uaG9zdC5pbmNsdWRlcyhcImVuLnN1cGVyaGFpcnBpZWNlcy5mclwiKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2F0VXJsID0gY2F0VXJsLnJlcGxhY2UoXCIvL3N1cGVyaGFpcnBpZWNlcy5mclwiLFwiLy9lbi5zdXBlcmhhaXJwaWVjZXMuZnJcIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKCEkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwnKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGJsb2NrLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLnNob3coKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgbG9hZENhdGVnb3J5KGNhdElkLCBjYXRVcmwsIG9wdGlvbnMsIHdyYXAsIGJsb2NrSWQpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJldmlld1Nob3coeCkge1xyXG4gICAgICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmV2aWV3Q2FyZDEnKTtcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgcmV2aWV3MiA9IFtdXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcclxuICAgICAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9NTAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcclxuICAgICAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cudGVhbWRlc2submV0L3NlY3VyZS9hcGkvdjIvNTY1NTQvQkVBMjU2NjU5MEVGNEQxNEFBOEQzNUFEMEUyQ0VBNzcvUmV2aWV3L3NlbGVjdC5qc29uP3NraXA9MTAwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXHJcbiAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTE1MDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxyXG4gICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcclxuICAgICAgICAgICAgICAgIGxpbWl0LmZvckVhY2goKGl0ZW0xKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmVtcHR5KClcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXZpZXczID0gW11cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWR1ID0gcmV2aWV3Mi5maWx0ZXIoaXRlbSA9PiBpdGVtWydQcm9kdWN0IFNLVSddID09PSBpdGVtMS5pbm5lckhUTUwpXHJcbiAgICAgICAgICAgICAgICAgICAgdmlkdS5mb3JFYWNoKChnb2t1KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzMucHVzaChnb2t1WydSZXZpZXcgcmF0ZSddKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV2aWV3QXZnID0gTWF0aC5yb3VuZCgocmV2aWV3My5yZWR1Y2UoKGEsYiApID0+IGErIGIsIDApL3JldmlldzMubGVuZ3RoKSAqIDEwKS8xMFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuYXBwZW5kKGBcclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGU+ICAgIC5jaGVja2VkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIxMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mYS1zdGFyLW8ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMTAsIDApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0UmV2aWV3MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0UmV2aWV3MiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdFJldmlldzIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygwLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygxLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygyLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKygzLjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJgKyg0LjUgPD0gcmV2aWV3QXZnPyAnIGNoZWNrZWQnOiAnIGZhLXN0YXItbycpICsgYFwiPjwvc3Bhbj4gICAgICBcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9cGFkZGluZy1sZWZ0OjVweDs+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtyZXZpZXczLmxlbmd0aH0gQ29tbWVudGFpcmVzXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5hcHBlbmQoYDxkaXY+JHtyZXZpZXdBdmd9PC9kaXY+YClcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiByZXZpZXdTaG93KHgpIHtcclxuICAgICAgICAgICAgdmFyIGxpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJldmlld0NhcmQxJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgbGV0IHJldmlldzIgPSBbXVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvblwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXHJcbiAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTUwMFwiKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ocj0+e1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3Mi5wdXNoKC4uLnIpfSksXHJcbiAgICAgICAgICAgICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnRlYW1kZXNrLm5ldC9zZWN1cmUvYXBpL3YyLzU2NTU0L0JFQTI1NjY1OTBFRjREMTRBQThEMzVBRDBFMkNFQTc3L1Jldmlldy9zZWxlY3QuanNvbj9za2lwPTEwMDBcIikudGhlbihyID0+IHIuanNvbigpKS50aGVuKHI9PntcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldmlldzIucHVzaCguLi5yKX0pLFxyXG4gICAgICAgICAgICAgICAgZmV0Y2goXCJodHRwczovL3d3dy50ZWFtZGVzay5uZXQvc2VjdXJlL2FwaS92Mi81NjU1NC9CRUEyNTY2NTkwRUY0RDE0QUE4RDM1QUQwRTJDRUE3Ny9SZXZpZXcvc2VsZWN0Lmpzb24/c2tpcD0xNTAwXCIpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihyPT57XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXZpZXcyLnB1c2goLi4ucil9KSxcclxuICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaW1pdC5mb3JFYWNoKChpdGVtMSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoaXRlbTEubmV4dEVsZW1lbnRTaWJsaW5nKS5lbXB0eSgpXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmV2aWV3MyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlkdSA9IHJldmlldzIuZmlsdGVyKGl0ZW0gPT4gaXRlbVsnUHJvZHVjdCBTS1UnXSA9PT0gaXRlbTEuaW5uZXJIVE1MKVxyXG4gICAgICAgICAgICAgICAgICAgIHZpZHUuZm9yRWFjaCgoZ29rdSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXZpZXczLnB1c2goZ29rdVsnUmV2aWV3IHJhdGUnXSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldmlld0F2ZyA9IE1hdGgucm91bmQoKHJldmlldzMucmVkdWNlKChhLGIgKSA9PiBhKyBiLCAwKS9yZXZpZXczLmxlbmd0aCkgKiAxMCkvMTBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChpdGVtMS5uZXh0RWxlbWVudFNpYmxpbmcpLmFwcGVuZChgXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlPiAgICAuY2hlY2tlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMTAsIDApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZmEtc3Rhci1vIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjEwLCAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdFJldmlldzIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdFJldmlldzIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RSZXZpZXcyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMC41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMS41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMi41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoMy41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyYCsoNC41IDw9IHJldmlld0F2Zz8gJyBjaGVja2VkJzogJyBmYS1zdGFyLW8nKSArIGBcIj48L3NwYW4+ICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXBhZGRpbmctbGVmdDo1cHg7PlxyXG4gICAgICAgICAgICAgICAgICAgICR7cmV2aWV3My5sZW5ndGh9IENvbW1lbnRhaXJlc1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+YClcclxuICAgICAgICAgICAgICAgICAgICAvLyAkKGl0ZW0xLm5leHRFbGVtZW50U2libGluZykuYXBwZW5kKGA8ZGl2PiR7cmV2aWV3QXZnfTwvZGl2PmApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gbG9hZENhdGVnb3J5KGlkLCB1cmwsIG9wdGlvbiwgd3JhcCwgYmxvY2tJZCl7XHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgb3B0aW9uLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIXdyYXAuZmluZCgnLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsKHdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXAucGFyZW50cygnLnRhYi1jb250ZW50JykuZmluZCgnLmxvYWRpbmdPdmVybGF5JykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb24oY29udGV4dCwgYmxvY2tJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV2aWV3U2hvdygpXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsKHdyYXApe1xyXG4gICAgICAgICAgICB3cmFwLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay10YWIxIHNsaWNrLW5leHQgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J05leHQgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctbmV4dD48L3VzZT48L3N2Zz5cIiwgXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stdGFiMiBzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfdGFiX2NvbClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfdGFiX2NvbCkgLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaG9tZV9wcm9kdWN0X2Jsb2NrX3RhYl9jb2wpIC0gMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkUHJvZHVjdEJ5Q2F0ZWdvcnlXaXRoQmFubmVyKCl7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICdwcm9kdWN0cy9jYXJvdXNlbC00J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmKCQoJy5oYWxvLWJsb2NrW2RhdGEtY2F0ZWdvcnktd2l0aC1iYW5uZXItaWRdJykubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHZhciAgaGVhZGVyX2hlaWdodCA9ICQoJy5oZWFkZXInKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgY29uc3QgJHRhYlNvcnRpbmcgPSAkKCcudGFiLXNvcnRpbmcgLnRhYi10aXRsZScpO1xyXG5cclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwgbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcclxuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbCA+IGhlYWRlcl9oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihzZXRGbGFnKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKCcuaG9tZS1sYXlvdXQtMicpLmxlbmd0aCAmJiAhJChlbGVtZW50KS5oYXNDbGFzcygnaG9tZTItZmxhc2gtZGVhbHMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdyYXAgPSAkKGVsZW1lbnQpLmZpbmQoJy50YWJDb250ZW50LW5ldyAucHJvZHVjdENhcm91c2VsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcCA9ICQoZWxlbWVudCkuZmluZCgnLnByb2R1Y3RDYXJvdXNlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2F0SWQgPSAkKGVsZW1lbnQpLmRhdGEoJ2NhdGVnb3J5LXdpdGgtYmFubmVyLWlkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSAkKGVsZW1lbnQpLmRhdGEoJ2NhdGVnb3J5LXdpdGgtYmFubmVyLXVybCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZCA9ICQoZWxlbWVudCkuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEkKCcjcHJvZHVjdC13aXRoLWJhbm5lci0nK2NhdElkKycgLnByb2R1Y3RDYXJvdXNlbCAucHJvZHVjdENhcm91c2VsLXNsaWRlJykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRDYXRlZ29yeShjYXRJZCwgY2F0VXJsLCBvcHRpb25zLCB3cmFwLCBibG9ja0lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHRhYlNvcnRpbmcub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhVGFiID0gJHRhcmdldC5kYXRhKCd0YWInKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzQmxvY2sgPSAkdGFyZ2V0LmNsb3Nlc3QoJy5oYWxvLWJsb2NrLXByb2R1Y3QnKTtcclxuICAgICAgICAgICAgICAgIHZhciB3cmFwID0gJHRoaXNCbG9jay5maW5kKCcudGFiQ29udGVudC0nK2RhdGFUYWIrJyAucHJvZHVjdENhcm91c2VsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0SWQgPSAkdGFyZ2V0LmRhdGEoJ2NhdGUtaWQnKSxcclxuICAgICAgICAgICAgICAgICAgICBjYXRVcmwgPSAkdGFyZ2V0LmRhdGEoJ2NhdGUtdXJsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tJZCA9ICR0aGlzQmxvY2suZmluZCgnLnRhYkNvbnRlbnQtJytkYXRhVGFiKS5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhVGFiID09ICd2aWV3YWxsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJHRhcmdldC5hdHRyKCdocmVmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYi1zb3J0aW5nJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJHRhcmdldC5wYXJlbnQoKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkdGhpc0Jsb2NrLmZpbmQoJy50YWItY29udGVudCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICR0aGlzQmxvY2suZmluZCgnLnRhYkNvbnRlbnQtJytkYXRhVGFiKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWZmJylcclxuICAgICAgICAgICAgICAgIGlmKCEkdGFyZ2V0Lmhhc0NsYXNzKCdpcy1sb2FkZWQnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5hZGRDbGFzcygnaXMtbG9hZGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZENhdGVnb3J5KGNhdElkLCBjYXRVcmwsIG9wdGlvbnMsIHdyYXAsIGJsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXNCbG9jay5maW5kKCcudGFiQ29udGVudC0nK2RhdGFUYWIrJyAucHJvZHVjdENhcm91c2VsJykuc2xpY2soJ3JlZnJlc2gnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJCgnLmNvdW50RG93bnRpbWVyJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKCAkKCcuY291bnREb3dudGltZXInKS5hdHRyKCdkYXRhLWNvdW50LWRvd24nKSkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjb3VudGRvd25mdW5jdGlvbiA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBjb3VudERvd25EYXRlIC0gbm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd25mdW5jdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIuY291bnREb3dudGltZXJcIikuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RyQ291bnREb3duID0gXCI8ZGl2IGNsYXNzPSdjbG9jay1pdGVtJz48c3BhbiBjbGFzcz0nbnVtJz5cIitkYXlzK1wiPC9zcGFuPjxzcGFuIGNsYXNzPSd0ZXh0Jz5kPC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9J2Nsb2NrLWl0ZW0nPjxzcGFuIGNsYXNzPSdudW0nPlwiK2hvdXJzK1wiOjwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPSdjbG9jay1pdGVtJz48c3BhbiBjbGFzcz0nbnVtJz5cIittaW51dGVzK1wiOjwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPSdjbG9jay1pdGVtJz48c3BhbiBjbGFzcz0nbnVtJz5cIitzZWNvbmRzK1wiPC9zcGFuPjwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmNvdW50RG93bnRpbWVyXCIpLmh0bWwoc3RyQ291bnREb3duKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbG9hZENhdGVnb3J5KGlkLCB1cmwsIG9wdGlvbiwgd3JhcCwgYmxvY2tJZCl7XHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgb3B0aW9uLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIXdyYXAuZmluZCgnLnByb2R1Y3RDYXJvdXNlbC1zbGlkZScpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5odG1sKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYod3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmhhc0NsYXNzKCdoYWxvLWJsb2NrLXByb2R1Y3QtYmFubmVycycpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy5ob21lLWxheW91dC0yJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod3JhcC5wYXJlbnRzKCcuaGFsby1ibG9ja1tkYXRhLWNhdGVnb3J5LXdpdGgtYmFubmVyLWlkXScpLmhhc0NsYXNzKCdob21lMi1mbGFzaC1kZWFscycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxGbGFzaERlYWxzKHdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWw0KHdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2tDYXJvdXNlbDMod3JhcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsKHdyYXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHdyYXAucGFyZW50cygnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5oYXNDbGFzcygnaGFsby1ibG9jay1wcm9kdWN0LWJhbm5lcnMyJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlja0Nhcm91c2VsMih3cmFwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXAucGFyZW50cygnLmhhbG8tYmxvY2tbZGF0YS1jYXRlZ29yeS13aXRoLWJhbm5lci1pZF0nKS5maW5kKCcubG9hZGluZ092ZXJsYXknKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbihjb250ZXh0LCBibG9ja0lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbCh3cmFwKXtcclxuICAgICAgICAgICAgd3JhcC5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsMih3cmFwKXtcclxuICAgICAgICAgICAgd3JhcC5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfd2l0aF9iYW5uZXJfY29sKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja193aXRoX2Jhbm5lcl9jb2wpIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhvbWVfcHJvZHVjdF9ibG9ja193aXRoX2Jhbm5lcl9jb2wpIC0gMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbDMod3JhcCl7XHJcbiAgICAgICAgICAgIHdyYXAuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiBcIjxzdmcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cgc2xpY2stYXJyb3ctbGFyZ2UnIGFyaWEtbGFiZWw9J05leHQgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctbmV4dD48L3VzZT48L3N2Zz5cIiwgXHJcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsNCh3cmFwKXtcclxuICAgICAgICAgICAgd3JhcC5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy1sYXJnZScgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogXCI8c3ZnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LWxhcmdlJyBhcmlhLWxhYmVsPSdQcmV2aW91cyBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1wcmV2PjwvdXNlPjwvc3ZnPlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBsYWJlbEZsYXNoRGVhbHMod3JhcCkge1xyXG4gICAgICAgICAgICBjb25zdCAkaXRlbVNpZGUgPSB3cmFwLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKTtcclxuXHJcbiAgICAgICAgICAgICRpdGVtU2lkZS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJHRoaXNMYWJlbCA9ICQoZWxlbWVudCkuZmluZCgnLnNhbGUtYmFkZ2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHRoaXNMYWJlbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9ICR0aGlzTGFiZWwuZmluZCgnLnRleHQnKS5kYXRhKCdzYWxlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZmluZCgnLmNhcmQtcHJpY2UnKS5hZGRDbGFzcygnaGFzLWxhYmVsU2FsZScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImNhcmQtbGFiZWwtc2FsZVwiPjxzcGFuPi0nK2xhYmVsKyc8L3NwYW4+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRoaXNMYWJlbC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZhbmN5Ym94VmlkZW9CYW5uZXIoKXtcclxuICAgICAgICBpZiAoJChcIi52aWRlby1ibG9jay1pbWFnZVtkYXRhLWZhbmN5Ym94XVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICQoXCIudmlkZW8tYmxvY2staW1hZ2VbZGF0YS1mYW5jeWJveF1cIikuZmFuY3lib3goe1xyXG4gICAgICAgICAgICAgICAgJ2F1dG9EaW1lbnNpb25zJzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAncGFkZGluZycgOiAwLFxyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJyA6IDk3MCxcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnIDogNjAwLFxyXG4gICAgICAgICAgICAgICAgJ2F1dG9TY2FsZScgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uSW4nIDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25PdXQnIDogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQoXCIuYnV0dG9uLXBvcHVwLXZpZGVvW2RhdGEtZmFuY3lib3hdXCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgJChcIi5idXR0b24tcG9wdXAtdmlkZW9bZGF0YS1mYW5jeWJveF1cIikuZmFuY3lib3goe1xyXG4gICAgICAgICAgICAgICAgJ2F1dG9EaW1lbnNpb25zJzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAncGFkZGluZycgOiAwLFxyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJyA6IDk3MCxcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnIDogNjAwLFxyXG4gICAgICAgICAgICAgICAgJ2F1dG9TY2FsZScgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uSW4nIDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zaXRpb25PdXQnIDogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYXFzVG9nZ2xlKCl7XHJcbiAgICAgICAgJCgnLmhhbG8tc2hvcnQtZmFxcyAuY2FyZCAudGl0bGUnKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICQoJy5oYWxvLXNob3J0LWZhcXMgLmNhcmQgLnRpdGxlJykubm90KCR0YXJnZXQpLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCR0YXJnZXQuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKXtcclxuICAgICAgICAgICAgICAgICR0YXJnZXQucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKCdjb2xsYXBzZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCgnLmhhbG8tc2hvcnQtZmFxcyAuY2FyZCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZigkKGVsZW1lbnQpLmZpbmQoJy50aXRsZScpLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuY29sbGFwc2UnKS5zbGlkZURvd24oXCJzbG93XCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZmluZCgnLmNvbGxhcHNlJykuc2xpZGVVcChcInNsb3dcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY2VudEJsb2dTbGlkZXIoKXtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNCkge1xyXG4gICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5oYXNDbGFzcygnc2xpY2stc2xpZGVyJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLXJlY2VudC1wb3N0Jykuc2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDEwMjQpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcuaGFsby1yZWNlbnQtcG9zdCcpLmhhc0NsYXNzKCdzbGljay1zbGlkZXInKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLXJlY2VudC1wb3N0Jykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQoJy5oYWxvLXJlY2VudC1wb3N0JykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhhbG8tcmVjZW50LXBvc3QnKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhvbWVTcGVjaWFsUHJvZHVjdCgpe1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcblxyXG4gICAgICAgIGlmKGNvbnRleHQudGhlbWVTZXR0aW5ncy5ob21lX3Byb2R1Y3RfYmxvY2tfc3BlY2lhbCA9PSB0cnVlKXtcclxuICAgICAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoJ1tkYXRhLXNwZWNpYWwtcHJvZHVjdC1pZF0nKS5kYXRhKCdzcGVjaWFsLXByb2R1Y3QtaWQnKSxcclxuICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPXtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnaGFsb3RoZW1lcy9wcm9kdWN0cy9oYWxvLXNwZWNpYWwtcHJvZHVjdC10bXAnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsIGxvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyX2hlaWdodCA9ICQoJy5oZWFkZXInKS5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID4gaGVhZGVyX2hlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNldEZsYWcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCEkKCcuaGFsby1zcGFjaWFsLXByb2R1Y3QgLnByb2R1Y3RWaWV3JykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwcm9kdWN0SWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjb3BlID0gJy5oYWxvLXNwYWNpYWwtcHJvZHVjdCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoISQoc2NvcGUpLmZpbmQoJy5wcm9kdWN0VmlldycpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSkuaHRtbChyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvbGRQcm9kdWN0KCQoc2NvcGUpLmZpbmQoJy5wcm9kdWN0Vmlldy1zb2xkUHJvZHVjdCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3aW5nUHJvZHVjdCgkKHNjb3BlKS5maW5kKCcucHJvZHVjdFZpZXctVmlld2luZ1Byb2R1Y3QnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnREb3duUHJvZHVjdCgkKHNjb3BlKS5maW5kKCcucHJvZHVjdFZpZXctY291bnREb3duJykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKS5maW5kKCdbZGF0YS1zbGlja10nKS5zbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2NvcGUpLmZpbmQoJy5wcm9kdWN0Vmlldy1mb3InKS5nZXQoMCkuc2xpY2suc2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFRodW1ibmFpbHNIZWlnaHQoc2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbG9Ob3RpZnlNZSgkKHNjb3BlKSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsb1lvdXR1YmVDYXJvdXNlbCgkKHNjb3BlKS5maW5kKCdbZGF0YS1zbGlja10nKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2NvcGUpLm9uKCdjbGljaycsICcuZHJvcGRvd24tbWVudS1idXR0b24nLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCR0YXJnZXQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCcuZHJvcGRvd24tbWVudScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtb3BlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCcuZHJvcGRvd24tbWVudScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHNjb3BlKS5maW5kKCcuZHJvcGRvd24tbWVudS1idXR0b24nKS5oYXNDbGFzcygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24tbWVudS1idXR0b24nKS5sZW5ndGggPT09IDApICYmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLmRyb3Bkb3duLW1lbnUnKS5sZW5ndGggPT09IDApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNjb3BlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmRyb3Bkb3duLW1lbnUtYnV0dG9uJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2NvcGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuZHJvcGRvd24tbWVudS1idXR0b24nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoJy5kcm9wZG93bi1tZW51JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3REZXRhaWxzID0gbmV3IFByb2R1Y3REZXRhaWxzKCQoc2NvcGUpLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdERldGFpbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdmlld2luZ1Byb2R1Y3Qod3JhcHBlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYod3JhcHBlci5sZW5ndGggPiAwKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZpZXdlclRleHQgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF92aWV3aW5nUHJvZHVjdF90ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzVmlld2VyX3RleHQgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF92aWV3aW5nUHJvZHVjdF92aWV3ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNWaWV3ZXJMaXN0ID0gIEpTT04ucGFyc2UoXCJbXCIgKyBudW1iZXJzVmlld2VyX3RleHQgKyBcIl1cIik7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnVtYmVyc1ZpZXdlckl0ZW0gPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKm51bWJlcnNWaWV3ZXJMaXN0Lmxlbmd0aCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5odG1sKCc8c3ZnIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWV5ZVwiLz48L3N2Zz4nICsgbnVtYmVyc1ZpZXdlckxpc3RbbnVtYmVyc1ZpZXdlckl0ZW1dICsgXCIgXCIgKyB2aWV3ZXJUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDAwKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjb3VudERvd25Qcm9kdWN0KHdyYXBwZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdyYXBwZXIubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50RG93biA9IHdyYXBwZXIuZGF0YSgnY291bnRkb3duJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShjb3VudERvd24pLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VmdCA9IHdyYXBwZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3VudGRvd25mdW5jdGlvbiA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGNvdW50ZG93bmZ1bmN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyQ291bnREb3duID0gJzxzdmcgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tYmVsbFwiLz48L3N2Zz48c3BhbiBjbGFzcz1cInRleHRcIj48c3Bhbj5MaW1pdGVkIHRpbWUgb2ZmZXIsIGVuZCBpbjo8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicrZGF5cysnZCA6PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicraG91cnMrJ2ggOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK21pbnV0ZXMrJ20gOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK3NlY29uZHMrJ3M8L3NwYW4+JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWZ0Lmh0bWwoc3RyQ291bnREb3duKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzb2xkUHJvZHVjdCh3cmFwcGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3cmFwcGVyLmxlbmd0aCA+IDApeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnVtYmVyc1Byb2R1Y3RfdGV4dCA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X3Byb2R1Y3RzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzSG91cnNfdGV4dCA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2xkUHJvZHVjdFRleHQgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF90ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2xkUHJvZHVjdFRleHQyID0gY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnNfdGV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlcnNQcm9kdWN0TGlzdCA9ICBKU09OLnBhcnNlKFwiW1wiICsgbnVtYmVyc1Byb2R1Y3RfdGV4dCArIFwiXVwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcnNQcm9kdWN0SXRlbSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbnVtYmVyc1Byb2R1Y3RMaXN0Lmxlbmd0aCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzSG91cnNMaXN0ID0gIEpTT04ucGFyc2UoXCJbXCIgKyBudW1iZXJzSG91cnNfdGV4dCArIFwiXVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc0hvdXJzSXRlbSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbnVtYmVyc0hvdXJzTGlzdC5sZW5ndGgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5odG1sKCc8c3ZnIGNsYXNzPVwiaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWZpcmVcIi8+PC9zdmc+PHNwYW4+JyArIG51bWJlcnNQcm9kdWN0TGlzdFtudW1iZXJzUHJvZHVjdEl0ZW1dICsgXCIgXCIgKyBzb2xkUHJvZHVjdFRleHQgKyBcIiBcIiArIG51bWJlcnNIb3Vyc0xpc3RbbnVtYmVyc0hvdXJzSXRlbV0gKyBcIiBcIiArIHNvbGRQcm9kdWN0VGV4dDIgKyAnPC9zcGFuPicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGluaXRUaHVtYm5haWxzSGVpZ2h0KCRzY29wZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKCRzY29wZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRjYXJvdXNlbF9uYXYgPSBlbC5maW5kKCcucHJvZHVjdFZpZXctbmF2JyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhcm91c2VsX2ZvciA9IGVsLmZpbmQoJy5wcm9kdWN0Vmlldy1mb3InKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGNhcm91c2VsX2Zvci5maW5kKCcuc2xpY2stYXJyb3cnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhcm91c2VsX2Zvci5wYXJlbnQoKS5hZGRDbGFzcygnYXJyb3dzLXZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNhcm91c2VsX2Zvci5wYXJlbnQoKS5hZGRDbGFzcygnYXJyb3dzLWRpc2FibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaG9tZVBhcmFsbGF4QmFubmVyKCl7XHJcbiAgICAgICAgaWYoJCgnI2hhbG9fcGFycmFsYXhfYmFubmVycycpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB2YXIgd3JhcCA9ICQoJyNoYWxvX3BhcnJhbGF4X2Jhbm5lcnMnKSxcclxuICAgICAgICAgICAgICAgIGltYWdlID0gd3JhcC5maW5kKCdbZGF0YS1pbWFnZV0nKS5kYXRhKCdpbWFnZScpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgd3JhcC5maW5kKCdbZGF0YS1pbWFnZV0nKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKCcraW1hZ2UrJyknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKCl7XHJcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICAgICAgaWYoJCgnLnByb2R1Y3RDYXJvdXNlbCcpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAkKCcucHJvZHVjdENhcm91c2VsJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciAkcHJvZFdyYXBJZCA9ICQoZWxlbWVudCkuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsICRwcm9kV3JhcElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZigkKCcuaGFsby1ibG9jayAucHJvZHVjdEdyaWQnKS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgJCgnLmhhbG8tYmxvY2sgLnByb2R1Y3RHcmlkJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciAkcHJvZFdyYXBJZCA9ICQoZWxlbWVudCkuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uKGNvbnRleHQsICRwcm9kV3JhcElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEJhbm5lciBwYXJhbGxheCAyXHJcbiAgICBjdXN0b21lclJldmlld0Nhcm91c2VsKCkge1xyXG4gICAgICAgIGlmICgkKCcjaGFsb19wYXJyYWxheF9iYW5uZXJzIC5oYWxvLXJvdycpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoISQoJyNoYWxvX3BhcnJhbGF4X2Jhbm5lcnMgLmhhbG8tcm93JykuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjaGFsb19wYXJyYWxheF9iYW5uZXJzIC5oYWxvLXJvdycpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdycgYXJpYS1sYWJlbD0nTmV4dCBTbGlkZSc+PHVzZSB4bGluazpocmVmPSNzbGljay1hcnJvdy1uZXh0PjwvdXNlPjwvc3ZnPlwiLCBcclxuICAgICAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IFwiPHN2ZyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdycgYXJpYS1sYWJlbD0nUHJldmlvdXMgU2xpZGUnPjx1c2UgeGxpbms6aHJlZj0jc2xpY2stYXJyb3ctcHJldj48L3VzZT48L3N2Zz5cIixcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXZpZXdDYXJvdXNlbCgpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdElkcyA9ICQoXCJbZnVuY3Rpb249bGlzdC1wcm9kdWN0XVwiKS5kYXRhKFwiaWRzXCIpLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGl0ZW0sIDEwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgc3Rva2VuID0gJChcIltuYW1lPXN0b3JlLXRva2VuXVwiKS52YWwoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdG9rZW4pXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZHVjdElkcylcclxuICAgICAgICBwcm9kdWN0SWRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vc2hwLXdlYnNlcnZlci5nbGl0Y2gubWUvZ2V0LXRlYW1kZXNrYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIFwidGFibGVcIjogXCJSZXZpZXdcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbnNcIjpgP2ZpbHRlcj1bUHJvZHVjdCBTS1VdPSAnJHtpdGVtfSdgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIC50aGVuKChyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHIpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgcmV2aWV3MiA9IFtdXHJcblxyXG4gICAgXHJcbiAgICAgICAgZmV0Y2goJy9ncmFwaHFsJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7c3Rva2VufWBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICBxdWVyeSBwcm9kdWN0c0J5U2t1IHtcclxuICAgICAgICAgICAgICAgICAgICBzaXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCAgKHNrdTogJHtwcm9kdWN0SWRzfSkgeyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2t1ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb0NhcnRVcmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJblN0b2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2FsZVByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJhbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsICh3aWR0aDogMjAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uT3B0aW9uRmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmcmFnbWVudCBNb25leUZpZWxkcyBvbiBNb25leSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZyYWdtZW50IE9wdGlvbkZpZWxkcyBvbiBQcm9kdWN0T3B0aW9uQ29ubmVjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIE11bHRpcGxlQ2hvaWNlT3B0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocj0+ci5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4ocj0+IHtcclxuICAgICAgICAgICAgaWYgKHIuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coci5kYXRhKVxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQ9XCJcIjtcclxuICAgICAgICAgICAgICAgIGxldCBpID0gLTFcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHByb2R1Y3Qgb2Ygci5kYXRhLnNpdGUucHJvZHVjdHMuZWRnZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpKytcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2R1Y3QpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JHtwcm9kdWN0Lm5vZGUuZGVmYXVsdEltYWdlLnVybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlJldmlld3M8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7cHJvZHVjdC5ub2RlLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke3Byb2R1Y3Qubm9kZS5wcmljZXMucHJpY2UudmFsdWV9JHtwcm9kdWN0Lm5vZGUucHJpY2VzLnByaWNlLmN1cnJlbmN5Q29kZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJChcIiNyLXRlc3QxXCIpLmh0bWwoY29udGVudClcclxuICAgICAgICAgICAgICAgICQoJyNyLXRlc3QxJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZG90c1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBcImFycm93c1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBcImluZmluaXRlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwic2xpZGVzVG9TaG93XCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzbGlkZXNUb1Njcm9sbFwiOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vICQoJy5yLXRlc3RibG9jayAuc2xpY2stdHJhY2sgLnNsaWNrLXNsaWRlJykuZWFjaCgoaXRlbSwgc2xpZGVyKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHJldmlldzIgPSBbXVxyXG4gICAgICAgIC8vICAgICBjb25zdCBhTGlzdCA9IHNsaWRlci5jaGlsZHJlblswXS52YWx1ZVxyXG5cclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgICQoJy5hcnIxIC5zbGljay1wcmV2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcjci10ZXN0MScpLnNsaWNrKFwic2xpY2tQcmV2XCIpO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICB9KTtcclxuICAgICQoJy5hcnIxIC5zbGljay1uZXh0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNyLXRlc3QxJykuc2xpY2soXCJzbGlja05leHRcIik7XHJcblxyXG4gICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaG9tZVByb2R1Y3RSZWNvbW1lbmRlZCgpIHtcclxuICAgICAgICBjb25zdCAkaG9tZVBHRiA9ICQoJy5ob21lMi1ibG9jay1yZWNvbW1lbmRlZCcpO1xyXG4gICAgICAgIGNvbnN0ICRob21lUEdGX2dyaWQgPSAkaG9tZVBHRi5maW5kKCcucHJvZHVjdEdyaWQnKTtcclxuICAgICAgICBjb25zdCBob21lUEdGX2l0ZW1MZW5ndGggPSAkaG9tZVBHRl9ncmlkLmZpbmQoJy5wcm9kdWN0JykubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0ICRob21lUEdGX2J0bkJsb2NrID0gJCgnLmhvbWVQR0ZfYnRuJyk7XHJcbiAgICAgICAgY29uc3QgJGhvbWVQR0ZfYnRuID0gJCgnLmhvbWVQR0ZfYnRuIGEnKTtcclxuICAgICAgICBjb25zdCBkYXRhQ29sdW1uID0gJGhvbWVQR0ZfZ3JpZC5kYXRhKCdjb2x1bW5zJyk7XHJcbiAgICAgICAgbGV0IHR0X3Byb2R1Y3RTaG93O1xyXG5cclxuICAgICAgICBpZiAoJGhvbWVQR0YubGVuZ3RoICYmIGhvbWVQR0ZfaXRlbUxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgICAgICAgICBpZiAoZldpZHRoID4gMTI3OSAmJiBob21lUEdGX2l0ZW1MZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgJGhvbWVQR0ZfYnRuQmxvY2suYWRkQ2xhc3MoJ2lzLXNob3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmV2lkdGggPD0gMTI3OSAmJiBmV2lkdGggPiA5OTEgJiYgaG9tZVBHRl9pdGVtTGVuZ3RoID4gOCkge1xyXG4gICAgICAgICAgICAgICAgJGhvbWVQR0ZfYnRuQmxvY2suYWRkQ2xhc3MoJ2lzLXNob3cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmV2lkdGggPD0gOTkxICYmIGZXaWR0aCA+IDc2NyAmJiBob21lUEdGX2l0ZW1MZW5ndGggPiA2KSB7XHJcbiAgICAgICAgICAgICAgICAkaG9tZVBHRl9idG5CbG9jay5hZGRDbGFzcygnaXMtc2hvdycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZXaWR0aCA8PSA3NjcgJiYgaG9tZVBHRl9pdGVtTGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICAgICAgJGhvbWVQR0ZfYnRuQmxvY2suYWRkQ2xhc3MoJ2lzLXNob3cnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGhvbWVQR0ZfYnRuLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod1dpZHRoID4gMTI3OSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHR0X3Byb2R1Y3RTaG93ID0gMTA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh3V2lkdGggPD0gMTI3OSAmJiB3V2lkdGggPiA5OTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0dF9wcm9kdWN0U2hvdyA9IDg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh3V2lkdGggPD0gOTkxICYmIHdXaWR0aCA+IDc2Nykge1xyXG4gICAgICAgICAgICAgICAgICAgIHR0X3Byb2R1Y3RTaG93ID0gNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHR0X3Byb2R1Y3RTaG93ID0gNDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGhvbWVQR0ZfZ3JpZC5maW5kKCcucHJvZHVjdDpoaWRkZW4nKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGhvbWVQR0ZfZ3JpZC5maW5kKCcucHJvZHVjdDpoaWRkZW46bHQoJyt0dF9wcm9kdWN0U2hvdysnKScpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRob21lUEdGX2dyaWQuZmluZCgnLnByb2R1Y3Q6aGlkZGVuJykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGhvbWVQR0ZfYnRuLnRleHQoJ05vIE1vcmUgUHJvZHVjdHMnKS5hdHRyKCdkaXNhYmxlZCcsICcnKS5hZGRDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=