import slick from 'slick-carousel';

export default function setSlider(argument) {
  const $slider = $('.js-slider');

  $slider.each((i, slider) => {
    const $prev = $(slider).closest('.slider__wrap').find('.js-prev');
    const $next = $(slider).closest('.slider__wrap').find('.js-next');


    $(slider).slick({
      prevArrow: $prev,
      nextArrow: $next,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            prevArrow: false,
            nextArrow: false,
            dots: true
          }
        }
      ]
    });
  });
}
