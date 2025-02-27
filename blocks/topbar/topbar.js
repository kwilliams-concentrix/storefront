export default async function decorate(block) {
  [...block.children].forEach((row) => {
    console.log(row);
  });

  const topBarImage = block.querySelector('img');
  const links = block.querySelectorAll('a');
  const paragraphs = block.querySelectorAll('p');
  const topBarMarkup = `
    <div class="topbar">
        <div class="top-main">
            <div class="contact">
                <div class="flag">
                    <a class="dark-header-link"><img alt="country-Logo-flag" class="country-flag" src="${topBarImage.src}"></a>
                </div>
                <div class="dark-header-link"><a href="${links[0].href}">${links[0].textContent}</a></div>
                <div class="dark-header-link"><a href="${links[1].href}">${links[1].textContent}</a></div>
            </div>
            <div class="shop-msg dark-header-link">
                ${paragraphs[paragraphs.length - 1].textContent}
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
