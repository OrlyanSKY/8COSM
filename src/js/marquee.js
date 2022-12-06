const reviewsMarquee = document.querySelector('.js-reviews-marquee');
const acquaintanceMarquee = document.querySelector('.js-acquaintance-marquee');

createMarquee(reviewsMarquee);
createMarquee(acquaintanceMarquee, -1);
window.addEventListener('resize', () => {
  createMarquee(reviewsMarquee);
  createMarquee(acquaintanceMarquee, -1);
});

function createMarquee(elem, direction = 1) {
  const parentWidth = elem.parentNode.getBoundingClientRect().width;
  const marqueeElWidth = elem.getBoundingClientRect().width;
  const countOfShadows = Math.ceil(parentWidth / marqueeElWidth);
  let style = 'text-shadow: ';
  for (let i = 1; i <= countOfShadows; i += 1) {
    style += `${marqueeElWidth * i * direction}px 0 currentColor`;
    i !== countOfShadows ? (style += ', ') : (style += '');
  }

  elem.setAttribute('style', style);
}
