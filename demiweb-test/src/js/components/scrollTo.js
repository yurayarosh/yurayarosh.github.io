import { $HTMLBODY } from '../constants.js';

export default function scrollTo() {
  if (window.matchMedia('(max-width: 1023px)').matches) {
    const $scrollToBtn = $('.js-scroll-to');

    $scrollToBtn.on('click', function(e) {
      e.preventDefault();
      const id = $(this).attr('href').slice(1);
      const $target = $(`[data-anchor="${id}"]`);
      $HTMLBODY.animate({
        scrollTop: $target.offset().top
      }, 1000);
    });
  };
};
