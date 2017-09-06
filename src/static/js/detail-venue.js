(function(window, $, undefined) {
  $(function() {
    // 立即订购点击事件
    handle4BuyClick();
  });

  function handle4BuyClick() {
    var $btn = $('#btnBuy'),
      $container = $btn.find('.qrcode-container'),
      $btnClose = $container.find('.btn-close');

    $btn.on('click', function(e) {
      var isMaskExists = $('.mask-qrcode').length > 0;
      if (isMaskExists) {
        $('.mask-qrcode').show();
      } else {
        $('body').append('<div class="mask-qrcode"></div>').show();
      }

      $container.fadeIn();
    });

    $btnClose.on('click', function(e) {
      $container.fadeOut();
      $('.mask-qrcode').remove();

      // 阻止事件冒泡
      return false;
    });
  }
})(window, jQuery);
