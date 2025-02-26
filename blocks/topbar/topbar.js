export default async function decorate(block) {
  [...block.children].forEach((row) => {
    console.log(row);
  });

  const topBarImage = block.querySelector('img');

  const topBarMarkup = `
    <div class="topbar">
        <div class="top-main">
            <div class="contact">
                <div class="flag">
                    <a class="dark-header-link"><img alt="country-Logo-flag" class="country-flag" src="${topBarImage.src}"></a>
                </div>
                <div class="dark-header-link"><a href="https://www.concentrix.com/adobe-summit-2025/">Contact</a></div>
                <div class="dark-header-link"><a>Support</a></div>
            </div>
            <div class="shop-msg dark-header-link">
                <a>Free shipping on orders over $50</a>
            </div>
            <div class="shop-links">
                <div class="dark-header-link"><a></a></div>
                <div class="dark-header-link"><a></a>
                </div>
            </div>
        </div>
    </div>
    `;

  block.innerHTML = topBarMarkup;
}
