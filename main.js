import puppeteer from "puppeteer";

export async function pesquisarAmazon(termoDePesquisa, lowPrice, highPrice) {
  let produtos = [];

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto("https://www.amazon.com.br/ref=nav_logo");

  await page.waitForSelector("#twotabsearchtextbox");
  await page.type("#twotabsearchtextbox", termoDePesquisa, { delay: 100 });
  await page.click("#nav-search-submit-button");
  if (lowPrice || highPrice) {
    await page.waitForSelector("#low-price");
    await page.type("#low-price", lowPrice, { delay: 100 });
    await page.type("#high-price", highPrice, { delay: 100 });
    await page.click("#high-price + span");
  }
  await page.waitForNavigation();

  const resultados = await page.evaluate(() => {
    const itemSelector = document.querySelectorAll(
      "span[data-component-type='s-search-results'] [data-csa-c-type='item']"
    );

    const produtosLocais = [];

    for (let i = 0; i < itemSelector.length; i++) {
      try {
        const price = parseInt(
          itemSelector[i]
            .querySelector(".a-price-whole")
            .textContent.replace(/\D/g, "")
        );

        const title = itemSelector[i].querySelector(
          ".s-title-instructions-style > h2 span"
        ).textContent;

        const starsElement = itemSelector[i].querySelector(".a-icon-alt");
        const stars = starsElement
          ? starsElement.textContent
          : "Não contém a quantidade de estrelas";

        const linkElement = itemSelector[i].querySelector(
          ".s-title-instructions-style > h2 a"
        );
        const link = linkElement ? linkElement.getAttribute("href") : "";

        const linkCompleto = `https://www.amazon.com.br${link}`;

        produtosLocais.push({
          title: title,
          price: price,
          stars: stars,
          link: linkCompleto,
        });
      } catch {}
    }
    return produtosLocais;
  });

  await browser.close()

  produtos = resultados;

  return resultados;
}
