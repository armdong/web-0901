(function(window, $, undefined) {
  $(function() {
    // 轮播图
    fnInitMainSlider();

    // 地图
    fnInitMap();
  });

  function fnInitMainSlider() {
    var $oMainSlider = $('#mainSlider'),
      $oSlideWrapper = $oMainSlider.find('.slider-wrapper'),
      $oSwiperWrapper = $oMainSlider.find('.swiper-wrapper'),
      $oMainSwiper = $oMainSlider.find('.swiper-container'),
      $aSwiperSlide = $oMainSlider.find('.swiper-slide'),
      _swiper = null,
      count = $aSwiperSlide.length;

    var viewWidth = $(window).width(),
      viewHeight = $(window).height(),
      iHeaderH = 40;

    // reset banner height
    (function() {
      $oMainSlider.css({
        height: viewHeight - iHeaderH + 'px',
      });

      $oSlideWrapper.css({
        height: viewHeight - iHeaderH + 'px',
      });

      $oSwiperWrapper.css({
        height: viewHeight - iHeaderH + 'px',
      });

      $oMainSwiper.css({
        height: viewHeight - iHeaderH + 'px',
      });

      // foreach slide
      $.each($aSwiperSlide, function(idx, slide) {
        var imgSrc = $(slide).attr('data-img');
        $(slide).css({
          'background-image': 'url(' + imgSrc + ')',
        });
      });
    })();

    if (count > 1) {
      _swiper = $oMainSwiper.swiper({
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        speed: 1000,
        height: viewHeight - iHeaderH,
      });

      // slide prev
      $oMainSlider.on('click', '.prev-slide', function(e) {
        e.preventDefault();
        _swiper.swipePrev();
      });

      // slide next
      $oMainSlider.on('click', '.next-slide', function(e) {
        e.preventDefault();
        _swiper.swipeNext();
      });

      $oMainSlider.hover(
        function() {
          _swiper.stopAutoplay();
        },
        function() {
          _swiper.startAutoplay();
        }
      );
    } else {
      _swiper = $oMainSwiper.swiper({ autoplay: false });
      $oMainSlider.find('.prev-slide').hide();
      $oMainSlider.find('.next-slide').hide();
    }
  }

  function fnInitMap() {
    var chart = echarts.init(
      document.getElementById('mapContainer'),
      'customed'
    );
    chart.setOption({
      series: [
        {
          type: 'map',
          map: 'quanzhou',
          zoom: 1.2,
          label: {
            normal: {
              show: false,
              color: '#fff',
              position: ['50%', '50%'],
            },
            emphasis: {
              show: true,
              color: '#fff',
              position: ['50%', '50%'],
            },
          },
        },
      ],
    });
  }
})(window, jQuery);
