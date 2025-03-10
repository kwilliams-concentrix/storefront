import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  const footerLinks = footer.querySelector('ul');

  const footerCopyright = document.createElement('div');
  footerCopyright.classList.add('copyright');
  footerCopyright.append(footer.children[1].querySelector('p').textContent);

  const footerContent = document.createElement('div');
  footerContent.classList.add('footer-content');

  const contactCTA = `
  <div class="contact-cta">
    <div class="email-subscription-label">Keep Updated</div>
    <form class="email-subscription">
        <input type="email" name="email" required="" placeholder="Enter Your Email Address" class="cmp-VeniaTextInput__textInput__input cmp-VeniaField__field__input">
        <button type="button" onclick="submitEmailForm()" class="email-subscription-button btn-primary">
            <span class="cmp-VeniaButton__button__content">Submit</span>
        </button>
    </form>
    <a href="#" class="footer-help-chat">Need help? Let's Chat</a>
    </div>
  `;
  footerContent.innerHTML = contactCTA;

  const siteLinksContainer = document.createElement('div');
  siteLinksContainer.classList.add('site-links');

  [...footerLinks.children].forEach((category) => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('footer-category');

    const categoryTitle = document.createElement('div');
    categoryTitle.classList.add('footer-category-title');
    categoryTitle.textContent = category.firstChild.textContent.trim();
    categoryDiv.append(categoryTitle);

    const categoryLinks = document.createElement('div');
    categoryLinks.classList.add('footer-category-links');

    [...category.children].forEach((list) => {
      [...list.children].forEach((link) => {
        const linkDiv = document.createElement('div');
        const linkTag = document.createElement('a');
        linkTag.href = `/${link.textContent.trim()}`;
        linkTag.textContent = link.textContent.trim();
        linkDiv.appendChild(linkTag);
        categoryLinks.appendChild(linkDiv);
      });
    });

    categoryDiv.appendChild(categoryLinks);
    siteLinksContainer.appendChild(categoryDiv);
  });

  footerContent.appendChild(siteLinksContainer);
  block.prepend(footerContent);
  block.appendChild(footerCopyright);
}
