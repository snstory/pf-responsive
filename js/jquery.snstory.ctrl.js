; (function ($) {
   $.snstory = {
      imgPath: './image/',
   };

   $.fn.multiMenuProc = function (opt) {
      this.opt = $.extend({
         openCtrlButton: null,
         targetLayer: null,
         openClass: 'active',
         opener1_no: -1,
         opener2_no: -1,
         opener1: $(this).find('> ul > li > h2'),
         opener2: $(this).find('> ul > li > ul > li > h3'),
      }, opt || {});

      if (this.opt.openCtrlButton === null) return false;
      this.opt.openCtrlButton.addAction(this);
      this.opt.opener1.settings(this, 1);
      this.opt.opener2.settings(this, 2);
   }

   $.fn.addAction = function (_th) {
      $(this).click(function (e) {
         e.preventDefault();
         _btn = $(this);
         _th.opt.targetLayer.stop(0, 0).slideToggle(100, function () {
            const display = $(this).css('display');

            if (display === 'none') {
               _th.opt.opener1_no = -1;
               _th.opt.opener2_no = -1;
               _th.executeAct();
               $('body').css('overflow-y', 'visible');
               _th.css({ overflow: 'hidden' });
               _btn.css('backgroundImage', `url(${$.snstory.imgPath}icon_ham_01.svg)`);
            } else {
               $('body').css('overflow-y', 'hidden');
               _th.css({ overflowY: 'auto' });
               _btn.css('backgroundImage', `url(${$.snstory.imgPath}icon_ham_01_close.svg)`);
            }
         });
      });
   }

   $.fn.settings = function (_th, opener_no) {
      $.each(this, function (i, n) {
         $(n).click(function (e) {
            e.preventDefault();
            $(this).toggleClass(_th.opt.openClass);
            const hasClass = $(this).hasClass(_th.opt.openClass);

            if (hasClass) {
               if (opener_no === 1) {
                  _th.opt.opener1_no = i
               } else {
                  _th.opt.opener2_no = i
               }
            } else {
               if (opener_no === 1) {
                  _th.opt.opener1_no = -1
                  _th.opt.opener2_no = -1;
               } else {
                  _th.opt.opener2_no = -1
               }
            }

            _th.executeAct();
         });
      });
      return this;
   }

   $.fn.executeAct = function () {
      _th = this;
      $.each(this.opt.opener1, function (i, n) {
         if (i === _th.opt.opener1_no) {
            $(n).next(':first').stop(0, 0).slideDown(500);
            $(n).addClass(_th.opt.openClass);
         } else {
            $(n).next(':first').stop(0, 0).slideUp(500);
            $(n).removeClass(_th.opt.openClass);
         }
      });

      $.each(this.opt.opener2, function (i, n) {
         if (i === _th.opt.opener2_no) {
            $(n).next(':first').stop(0, 0).slideDown(500);
            $(n).addClass(_th.opt.openClass);
         } else {
            $(n).next(':first').stop(0, 0).slideUp(500);
            $(n).removeClass(_th.opt.openClass);
         }
      });
   }
})(jQuery);

(function ($) {
   $.fn.addHoverOutEvent = function (opt) {
      this.opt = $.extend({
         hoverClass: null,
         allClass: null,
         allOpenBtn: null,
         topButtons: null,
         allOpenBtnClass: 'on',
      }, opt || {});

      if (this.opt.hasClass === null) return false;
      if (this.opt.allClass === null) return false;
      if (this.opt.targetLayer === null) return false;
      if (this.opt.allOpenBtn === null) return false;
      if (this.opt.topButtons === null) return false;

      $(this.opt.allOpenBtn).allOpenBtnSetting(this);
      $(this).addHoverClassEvent(this.opt);
      $(this.opt.topButtons).addTopHoverEvent(this);
   }

   $.fn.addTopHoverEvent = function (_th) {
      $.each(this, function (i, n) {
         $(this).mouseenter(function () {
            let check = _th.hasClass(_th.opt.allClass);
            if (check) return false;

            check = _th.hasClass(_th.opt.hoverClass);
            if (check) return false;

            _th.addClass(_th.opt.hoverClass);
         });
      });
   }

   $.fn.allOpenBtnSetting = function (_th) {
      $(this).click(function (e) {
         e.preventDefault();
         const nowHasClass = _th.hasClass(_th.opt.hoverClass);
         const allClassCheck = _th.hasClass(_th.opt.allClass);
         if (nowHasClass) {
            _th.removeClass(_th.opt.hoverClass);
            _th.addClass(_th.opt.allClass);
            $(this).addClass(_th.opt.allOpenBtnClass);
         } else {
            if (allClassCheck) {
               $(this).removeClass(_th.opt.allOpenBtnClass);
               _th.removeClass(_th.opt.allClass);
            } else {
               $(this).addClass(_th.opt.allOpenBtnClass);
               _th.addClass(_th.opt.allClass);
            }
         }
      });
   }

   $.fn.addHoverClassEvent = function (opt) {
      this.mouseenter(function () {
         const nowHasClass = $(this).hasClass(opt.allClass);
         if (nowHasClass) return false;
         $(this).addClass(opt.hoverClass);
      }).mouseleave(function () {
         $(this).removeClass(opt.hoverClass);
      });
   }
})(jQuery);

(function ($) {
   $.fn.normalTabMenu = function (opt) {
      const _th = this;
      this.opt = $.extend({
         menus: null,
         layers: null,
         tClass: 'on'
      }, opt || {});

      if (this.opt.menus === null) return false;
      if (this.opt.layers === null) return false;
      if (this.opt.menus.length != this.opt.layers.length) return false;

      $.each(this.opt.menus, function (i, n) {
         $(this).click(function (e) {
            e.preventDefault();
            $.tabControls(i, _th.opt.menus, _th.opt.layers, _th.opt.tClass);
         });
      });
   }

   $.tabControls = function (keyNo, menus, layers, tClass) {
      $.each(menus, function (i, n) {
         if (keyNo === i) {
            $(n).addClass(tClass);
            $(layers[i]).show(0);
         } else {
            $(n).removeClass(tClass);
            $(layers[i]).hide(0);
         }
      });
   }
})(jQuery);

(function ($) {
   $.fn.areaControl = function (opt) {
      const _th = this;

      this.opt = $.extend({
         ltBtn: null,
         gtBtn: null,
         className: 'on'
      }, opt || {});

      if (this.opt.ltBtn === null) return false;
      if (this.opt.gtBtn === null) return false;

      this.opt.ltBtn.click(function (e) {
         e.preventDefault();
         if (_th.hasClass(_th.opt.className)) return false;
         _th.addClass(_th.opt.className);
      });

      this.opt.gtBtn.click(function (e) {
         e.preventDefault();
         if (!_th.hasClass(_th.opt.className)) return false;
         _th.removeClass(_th.opt.className);
      });
   }
})(jQuery);

(function ($) {
   $.fn.sideMenuCtrl = function (opt) {
      this.val = {
         reduceHg: 0,
         enlargeHg: 0
      };
      this.opt = $.extend({
         limit: {
            min: 20,
            max: 180
         },
         duration: 500,
         checkClass: 'on',
         reduceTxt: '펼치기',
         reduceClass: 'reduction',
         enlargeTxt: '닫기',
         enlargeClass: 'enlargement',
         bowlHeight: $('html').height() + 'px',
         bowlLayer: null,
         bowlflexble: null,
         flexbleLayer: null,
         flexbleItems: null,
         flexbleCtrlBtn: null,
         gotoTopBtn: null,
         hideCount: 3,
         hideGap: 5
      }, opt || {});

      if (this.opt.bowlLayer === null) return false;
      if (this.opt.bowlflexble === null) return false;
      if (this.opt.flexbleLayer === null) return false;
      if (this.opt.flexbleCtrlBtn === null) return false;
      if (this.opt.gotoTopBtn === null) return false;

      // 박스레이어 축소높이 지정
      this.opt.flexbleItems.showHideSetting(this);
      // 박스레이어 확대높이 지정
      this.opt.bowlLayer.height(this.opt.bowlHeight);
      // 펼침 최대높이 저장
      this.val.enlargeHg = this.opt.flexbleLayer.height();
      // 높이 초기화 및 보이기
      this.opt.flexbleLayer.height(this.val.reduceHg);
      this.css({ visibility: 'visible' });
      // 목록박스 컨트롤 이벤트 지정
      this.opt.flexbleCtrlBtn.sideMenuFlexJsCtrl(this);
      this.opt.gotoTopBtn.click(function (e) {
         e.preventDefault();
         $('html').scrollTop(0);
      });
   }

   $.fn.showHideSetting = function (_th) {
      _th.val.reduceHg += _th.opt.hideGap;
      $.each(this, function (i, n) {
         if (i < _th.opt.hideCount) {
            _th.val.reduceHg += $(n).height();
         } else {
            $(n).css({ visibility: 'hidden' });
         }
      });
      return this;
   }

   $.fn.visibleCtrl = function (showHide, _th) {
      $.each(this, function (i, n) {
         if (i >= _th.opt.hideCount) {
            $(n).css({ visibility: showHide ? 'visible' : 'hidden' });
         }
      });
      return this;
   }

   $.fn.sideMenuFlexControl = function (_th) {
      this.click(function (e) {
         e.preventDefault();
         const rebool = _th.opt.flexbleLayer.hasClass(_th.opt.reduceClass);
         if (rebool) {
            $(this).text(_th.opt.enlargeTxt);
            _th.opt.flexbleLayer
               .removeClass(_th.opt.reduceClass)
               .addClass(_th.opt.enlargeClass);
         } else {
            $(this).text(_th.opt.reduceTxt);
            _th.opt.flexbleLayer
               .removeClass(_th.opt.enlargeClass)
               .addClass(_th.opt.reduceClass);
         }
      });
      return this;
   }

   $.fn.sideMenuFlexJsCtrl = function (_th) {
      // 숨김 갯수가 전체를 초과할 경우 버튼 숨김 및 이벤트취소
      if (_th.opt.hideCount >= _th.opt.flexbleItems.length) {
         this.hide();
         return this;
      }
      this.click(function (e) {
         e.preventDefault();
         if (_th.opt.flexbleLayer.hasClass(_th.opt.checkClass)) {
            $(this).text(_th.opt.reduceTxt);
            _th.opt.bowlflexble.stop(0, 0)
               .animate({ top: _th.opt.limit.max }, _th.opt.duration);
            _th.opt.flexbleLayer
               .removeClass(_th.opt.checkClass)
               .stop(0, 0).animate({
                  height: _th.val.reduceHg
               }, _th.opt.duration, () => {
                  $(_th.opt.flexbleItems).visibleCtrl(false, _th);
               });
         } else {
            $(this).text(_th.opt.enlargeTxt);
            $(_th.opt.flexbleItems).visibleCtrl(true, _th);
            _th.opt.bowlflexble.stop(0, 0)
               .animate({ top: _th.opt.limit.min }, _th.opt.duration);
            _th.opt.flexbleLayer
               .addClass(_th.opt.checkClass)
               .stop(0, 0).animate({
                  height: _th.val.enlargeHg
               }, _th.opt.duration);
         }
      });
      return this;
   }
})(jQuery);

(function ($) {
   $.fn.fontSizeCtrl = function (opt) {
      const opts = $.extend({
         decreaseBtn: null,
         originalBtn: null,
         increaseBtn: null,
         maximum: 26,
         minimum: 16,
         original: null
      }, opt || {});

      if (opts.decreaseBtn === null || opts.increaseBtn === null || opts.originalBtn === null) return false;

      opts.original = parseInt($('html').css('fontSize').replace('px', ''));
      opts.decreaseBtn.click(function (e) {
         e.preventDefault();
         $(this).fontSizeReset(2, opts);
      });
      opts.originalBtn.click(function (e) {
         e.preventDefault();
         $(this).fontSizeReset(false, opts);
      });
      opts.increaseBtn.click(function (e) {
         e.preventDefault();
         $(this).fontSizeReset(1, opts);
      });
   }

   $.fn.fontSizeReset = function (type, opts) {
      let fontSizeVal = parseInt($('html').css('fontSize').replace('px', ''));
      if (type === 2) {
         fontSizeVal += 2;
      } else if (type === 1) {
         fontSizeVal -= 2;
      } else {
         fontSizeVal = opts.original;
      }
      fontSizeVal >= opts.maximum ? fontSizeVal = opts.maximum : fontSizeVal;
      fontSizeVal <= opts.minimum ? fontSizeVal = opts.minimum : fontSizeVal;
      console.log(fontSizeVal);
      $('html').css({ fontSize: fontSizeVal });
      return this;
   }
})(jQuery);