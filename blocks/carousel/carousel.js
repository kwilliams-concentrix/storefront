export default function decorate(block) {
  const carousel = document.createElement('div');
  [...block.children].forEach((row) => {
    // carousel item
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');

    // card image
    const img = row.querySelector('img');
    const cardImg = document.createElement('div');
    cardImg.classList.add('carousel-item-image');
    cardImg.style = `background-image: url(${img.src})`;
    carouselItem.append(cardImg);

    // card text
    const textContent = document.createElement('div');
    textContent.classList.add('carousel-item-body');

    // card title
    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('carousel-item-title');
    cardTitle.innerHTML = row.querySelector('h3').innerHTML;

    // card link
    const cardLink = document.createElement('a');
    cardLink.classList.add('carousel-item-link');
    cardLink.href = row.querySelector('a').href;
    cardLink.innerHTML = row.querySelector('a').textContent;

    // append elements
    textContent.append(cardTitle);
    textContent.append(cardLink);
    carouselItem.append(textContent);
    carousel.append(carouselItem);
  });

  block.textContent = '';
  block.append(carousel);

  const carouselWrapper = document.querySelector('.carousel-wrapper');
  const slideDistance = 410;

  // previous button
  const prev = document.createElement('button');
  prev.classList.add('prev');
  prev.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" stroke="#fff" /><path d="M0 0h24v24H0z" fill="none"/></svg>';
  prev.addEventListener('click', () => {
    document.querySelector('.carousel').scrollBy({ left: (-1) * slideDistance, behavior: 'smooth' });
  });
  carouselWrapper.append(prev);

  // next button
  const next = document.createElement('button');
  next.classList.add('next');
  next.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" stroke="#fff" /><path d="M0 0h24v24H0z" fill="none"/></svg>';
  next.addEventListener('click', () => {
    document.querySelector('.carousel').scrollBy({ left: slideDistance, behavior: 'smooth' });
  });
  carouselWrapper.append(next);
}
