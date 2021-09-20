/*
-----------------------------
 - scripts.js
-----------------------------
*/
(function($) {
  /* - ページトップボタン
  /* ---------------------------------*/
  function pagetopButton() {
    var $pagetop      = $('.pagetop-button');
    var positionValue = $(window).scrollTop();
    var showPosition  = 300;
    var easing        = 'swing';
    var speed         = 1200;
    var pagetopVisible;
    if (positionValue > showPosition) {
      $pagetop.fadeIn();
    }
    $(window).scroll(function() {
      positionValue = $(window).scrollTop();
      pagetopVisible = $pagetop.is(':visible');
      if (positionValue > showPosition) {
        if (!pagetopVisible) {
          $pagetop.fadeIn();
        }
      } else {
        if (pagetopVisible) {
          $pagetop.fadeOut();
        }
      }
    });
    $pagetop.on('click', function(event) {
      $('html,body').animate({scrollTop:0}, speed, easing);
      event.preventDefault;
    });
  }
  /* 実行
  /* ---------------------------------*/
  document.addEventListener('DOMContentLoaded', function() {
    //target=blankに noopener noreferrer を付与します
    $('a[target="_blank"]').attr('rel', 'noopener noreferrer');
    pagetopButton();
  });


  /* - ハンバーガーナビ
  /* ---------------------------------*/
  $('.p-hamburger').on('click', function () {
    $('body').toggleClass('is-drawerActive');
    $('.p-hamburger_text').toggleClass('is-active');
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true);
    } else {
      $(this).attr('aria-expanded', false);
    }
  });

  /* - スマホメニュー閉じるボタンの処理 -ハンバーガーナビと連動-
  /* ---------------------------------------------------------*/
  var $triggerBtn = $('.js-close_trigger');
  $triggerBtn.on('click', function (event) {
    $('.p-hamburger').trigger('click');
  });

  /*　スマホ　アコーディオンメニュー
  /* ---------------------------------*/
  $(window).on('load resize', function () {
    var winW = $(window).width();
    var devW = 767;
    var $spDropdownMenu = $('.js-dropdownmenu_open_trigger');
    if (winW <= devW) {
      $spDropdownMenu.on('click', function () {
        if ($(this).next('.globalnav_dropdownmenu_sp').hasClass('is-active')) {
          $('.globalnav_dropdownmenu_sp').removeClass('is-active');
        } else {
          $('.globalnav_dropdownmenu_sp').addClass('is-active');
        }
        return false;
      });
    }
  });
}(jQuery));