(function(window, $, undefined) {
  $(function() {
    // 轮播图
    fnInitMainSlider();

    // 地图
    fnInitMap();
  });

  function fnInitMainSlider() {
    var $oMainSlider = $('#mainSlider'),
      $oMainSwiper = $oMainSlider.find('.swiper-container'),
      _swiper = null,
      count = $oMainSlider.find('.swiper-slide').length;

    if (count > 1) {
      _swiper = $oMainSwiper.swiper({
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        speed: 1000,
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
              show: true,
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
