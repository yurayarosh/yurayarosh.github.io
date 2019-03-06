import 'intersection-observer';
import setTouchClassName from './setTouchClassName.js';
import setSlider from './components/setSlider.js';
import setPage from  './components/setPage.js';
import scrollTo from  './components/scrollTo.js';


$(function() {
  const overlay = document.querySelector('.overlay');
  overlay.parentNode.removeChild(overlay);

  setTouchClassName();
  setSlider();
  setPage();
  scrollTo();
});
