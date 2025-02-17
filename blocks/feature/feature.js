export default async function decorate(block) {
  const feature = document.querySelector('.feature');
  const featureImage = block.querySelector('picture');
  const featureTitle = block.querySelector('h2');
  const featureSubtitle = block.querySelector('h3');
  const featureLink = block.querySelector('a');

  const textContainer = `
    <div class="text-container">
        <div class="text-title">${featureTitle.textContent}</div>
        <div class="text-description">${featureSubtitle.textContent}</div>
        <div class="cta-container">
            <a class='btn-primary' href='${featureLink.href}'>${featureLink.textContent}</a>
        </div>
    </div>`;

  feature.innerHTML = '';
  feature.appendChild(featureImage);
  feature.innerHTML += textContainer;
}
