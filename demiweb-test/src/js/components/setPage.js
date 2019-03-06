import fullpage from 'fullpage.js';
import { TimelineLite } from 'gsap';
import Splitter from 'split-html-to-chars';

const heroHeading = '.hero .letter';
const $heroTitle = '.hero .hero__title';
const $heroLion = $('.hero .section-bg');
const $heroList = $('.hero .hero__list');
const $heroScroll = $('.hero .scroll-down');

const $members = $('.s-team .member');

const priorityHeading = '.s-priority .js-splitme .letter';
const $prioritySubttl = $('.s-priority .subttl');
const priorityItems = '.s-priority .priority-item';

const aboutHeading = '.s-about .js-splitme .letter';
const $aboutHeadingLabel = '.s-about .js-splitme small';
const $aboutImg = $('.s-about .section-img');
const $aboutQuote = $('.s-about .blockquote');
const $aboutText = $('.s-about .section__text');

const guaranteeItems = '.s-guarantee .guarantee-item';
const $guaranteeImg = $('.s-guarantee .section-bg');

// const testimonialsHeading = '.s-testimonials .js-splitme .letter';
// const $testimonialsText = $('.s-testimonials .section__text');
// const $testimonialsImg = $('.s-testimonials .slide__img');

const $testimonialsSlider = $('.s-testimonials .slider');

const featuresHeading = '.s-features .js-splitme .letter';
const $featuresSubttl = $('.s-features .subttl');
const featuresItems = '.s-features .feature';
const $featuresImg = $('.s-features .section-bg');

const questionsHeading = '.s-questions .js-splitme .letter';
const $questionsSubttl = $('.s-questions .subttl');
const questionsCols = '.s-questions .questions__col';


class PageAnimator {
  constructor(sections) {
    this.sections = sections;

    this.hasBeenAnimated = {};   
  };

  init() {
    this._setElements();

    if (window.matchMedia('(min-width: 1024px)').matches) {
      this.pagescroll = new fullpage(this.sections, {
        anchors: ['hero', 'team'],
        afterLoad: this._animateFullpageSections.bind(this),
      });
    } else {
      $(this.sections).find('.section').each((i, section) => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateSection(i);
            };
          });
        }, {
          threshold: [0.25]
        });
        observer.observe(section);
      });      
    };
  };


  get tl() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      return new TimelineLite({ onComplete: (e) => {
        if (Object.keys(this.hasBeenAnimated).length > 0) {
          fullpage_api.setAllowScrolling(true);
        };
      } });
    } else {
      return new TimelineLite();
    }    
  };

  animateHero() {
    this.tl
      .to($heroTitle, 0.3, { opacity: 1 }, '+=0.4') 
      .staggerTo(heroHeading, 0.1, { y: 0, opacity: 1 },0.04)      
      .to($heroLion, 0.5, { x: '0%', opacity: 1 }, '-=1')
      .to($heroList, 0.5, { y: 0, opacity: 1 }, '-=1.2')
      .to($heroScroll, 0.5, { y: 0, opacity: 1, onComplete: () => this.hasBeenAnimated.hero = true }, '-=0.8');
  };

  animateTeam() {
    this.tl.staggerTo($members, 1, { x: 0, y: 0, opacity: 1 }, 0.1);
    this.hasBeenAnimated.team = true;
  };

  animatePriority() {
    this.tl
      .staggerTo(priorityHeading, 0.1, { y: 0, opacity: 1 }, 0.04)
      .to($prioritySubttl, 1, { y: 0, opacity: 1}, '-=0.5')
      .staggerTo(priorityItems, 0.5, { x: 0, y: 0, opacity: 1, onComplete: () => this.hasBeenAnimated.priority = true }, 0.04);
  };

  animateAbout() {
    this.tl
      .staggerTo(aboutHeading, 0.1, { y: 0, opacity: 1 }, 0.04)
      .to($aboutHeadingLabel, 0.5, { opacity: 1 }, '-=0.4')
      .to($aboutQuote, 0.5, { y: 0, opacity: 1 }, '-=0.5')
      .to($aboutText, 0.5, { y: 0, opacity: 1 }, '-=0.3')
      .to($aboutImg, 0.5, { x: '0%', opacity: 1, onComplete: () => this.hasBeenAnimated.about = true }, '-=0.4');
  };

  animateGuarantee() {
    this.tl
      .to($guaranteeImg, 0.5, { y: '0%', opacity: 1 })
      .staggerTo(guaranteeItems, 0.3, { y: 0, opacity: 1, onComplete: () => this.hasBeenAnimated.guarantee = true }, 0.04);
  };

  animateTestimonials() {
    this.tl
      .to($testimonialsSlider, 1, { opacity: 1, onComplete: () => this.hasBeenAnimated.testimonials = true });
  };

  animateFeatures() {
    this.tl
      .staggerTo(featuresHeading, 0.1, { y: 0, opacity: 1 }, 0.02)
      .staggerTo(featuresItems, 0.1, { y: 0, x: 0, opacity: 1 }, 0.04)
      .to($featuresSubttl, 1, { y: 0, opacity: 1, onComplete: () => this.hasBeenAnimated.features = true }, '-=0.8');
    // .to($featuresImg, 1, { x: '0%', opacity: 1 }, '-=1');
  };

  animateQuestions() {
    this.tl
      .staggerTo(questionsHeading, 0.1, { y: 0, opacity: 1 }, 0.02)
      .staggerTo(questionsCols, 0.3, { y: 0, x: 0, opacity: 1 }, 0.04)
      .to($questionsSubttl, 1, { y: 0, opacity: 1, onComplete: () => this.hasBeenAnimated.questions = true });
  };

  animateSection(index) {
    if (index === 0) {
      this.animateHero();
    };
    if (index === 1) {
      this.animateTeam();
    };
    if (index === 2) {
      this.animatePriority();
    };
    if (index === 3) {
      this.animateAbout();
    };
    if (index === 4) {
      this.animateGuarantee();
    };
    if (index === 5) {
      this.animateTestimonials();
    };
    if (index === 6) {
      this.animateFeatures();
    };
    if (index === 7) {
      this.animateQuestions();
    };
  };

  _setElements() {
    const headings = [].slice.call(document.querySelectorAll('.js-splitme'));
    headings.forEach((heading) => {
      heading.outerHTML = Splitter(heading.outerHTML, '<span class="letter">$</span>');
    });

    this.tl
      .set(heroHeading, { y: 20, opacity: 0 })
      .set($heroTitle, { opacity: 0 })
      .set($heroLion, { x: '100%', opacity: 0 })
      .set($heroList, { y: 30, opacity: 0 })
      .set($heroScroll, { y: 30, opacity: 0 })
      .set($members, { x: 100, y: 100, opacity: 0 })
      .set(priorityHeading, { y: 20, opacity: 0 })
      .set($prioritySubttl, { y: 30, opacity: 0 })
      .set(priorityItems, { x: 30, y: 30, opacity: 0 })
      .set(aboutHeading, { y: 30, opacity: 0 })
      .set($aboutHeadingLabel, { opacity: 0 })
      .set($aboutImg, { x: '100%', opacity: 0 })
      .set($aboutQuote, { y: 30, opacity: 0 })
      .set($aboutText, { y: 30, opacity: 0 })
      .set(guaranteeItems, { y: 30, opacity: 0 })
      .set($guaranteeImg, { y: '100%', opacity: 0 })
      // .set(testimonialsHeading, { y: 30, opacity: 0 })
      // .set($testimonialsText, { y: 30, opacity: 0 })
      // .set($testimonialsImg, { y: 30, opacity: 0 })
      .set($testimonialsSlider, { opacity: 0 })
      .set(featuresHeading, { y: 30, opacity: 0 })
      .set($featuresSubttl, { y: 30, opacity: 0 })
      .set(featuresItems, { y: -30, x: -30, opacity: 0 })
      .set($featuresImg, { x: '100%', opacity: 0 })
      .set(questionsHeading, { y: 30, opacity: 0 })
      .set($questionsSubttl, { y: 30, opacity: 0 })
      .set(questionsCols, { y: 30, x: 30, opacity: 0 });
  };

  _animateBlocks() {
    this.animateHero();
    this.animateTeam();
    this.animatePriority();
    this.animateAbout();
    this.animateGuarantee();
    this.animateTestimonials();
    this.animateFeatures();
    this.animateQuestions();
  };

  _animateFullpageSections(origin, destination, direction) {
    if (!destination) return;

    fullpage_api.setAllowScrolling(false);

    if (destination.index === 0) {
      if (this.hasBeenAnimated.hero) {
        fullpage_api.setAllowScrolling(true);
      } else {
        this.animateHero();
      };      
    };
    if (destination.index === 1) {
      if (this.hasBeenAnimated.team) {
        fullpage_api.setAllowScrolling(true);
      } else {
        this.animateTeam();
      };      
    };
    if (destination.index === 2) {
      if (this.hasBeenAnimated.priority) {
        fullpage_api.setAllowScrolling(true);
      } else {
        this.animatePriority();
      };      
    };
    if (destination.index === 3) {
      if (this.hasBeenAnimated.about) {
        fullpage_api.setAllowScrolling(true);
      } else {
        this.animateAbout();
      };      
    };
    if (destination.index === 4) {
      if (this.hasBeenAnimated.guarantee) {
        fullpage_api.setAllowScrolling(true);
      } else {
        this.animateGuarantee();
      };      
    };
    if (destination.index === 5) {
      if (this.hasBeenAnimated.testimonials) {
        fullpage_api.setAllowScrolling(true);
      } else {
        this.animateTestimonials();
      };      
    };
    if (destination.index === 6) {
      if (this.hasBeenAnimated.features) {
        fullpage_api.setAllowScrolling(true);
      } else {
        this.animateFeatures();
      };      
    };
    if (destination.index === 7) {
      if (this.hasBeenAnimated.questions) {
        fullpage_api.setAllowScrolling(true);
      } else {
        this.animateQuestions();
      };      
    };
  };
};

export default function setFullpage() {
  const animator = new PageAnimator('.js-sections');
  animator.init();
};
