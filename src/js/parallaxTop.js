import { jarallax } from 'jarallax';
import * as img_mob from '../images/top_mob.svg';
import * as img_tablet from '../images/top_tablet.svg';
import * as img_laptop from '../images/top_laptop.svg';

let parallaxImg = null;

jarallax(document.querySelectorAll('.bg_top'), {
  speed: 0.2,
  imgSize: '100vw 100%',
  imgSrc: parallaxImg,
});

window.addEventListener('resize', event => {
  const width = event.currentTarget.innerWidth;

  if (width < 744) {
    if (parallaxImg === img_mob) return;

    jarallax(document.querySelectorAll('.bg_top'), 'destroy');
    parallaxImg = img_mob;
    jarallax(document.querySelectorAll('.bg_top'), {
      speed: 0.2,
      imgSize: '100vw 100%',
      imgSrc: parallaxImg,
    });
    return;
  }

  if (width < 1600 && width >= 744) {
    if (parallaxImg === img_tablet) return;

    jarallax(document.querySelectorAll('.bg_top'), 'destroy');
    parallaxImg = img_tablet;
    jarallax(document.querySelectorAll('.bg_top'), {
      speed: 0.2,
      imgSize: '100vw 100%',
      imgSrc: parallaxImg,
    });
    return;
  }

  if (width >= 1600 && parallaxImg !== img_laptop) {
    jarallax(document.querySelectorAll('.bg_top'), 'destroy');
    parallaxImg = img_laptop;
    jarallax(document.querySelectorAll('.bg_top'), {
      speed: 0.2,
      imgSize: '100vw 100%',
      imgSrc: parallaxImg,
    });
    return;
  }
});
