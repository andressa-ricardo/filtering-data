import puppeteer from "puppeteer";
import fs from "fs";

let produtos = [];
async function pesquisarAmazon(termoDePesquisa) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.amazon.com.br/ref=nav_logo");

  await page.waitForSelector("#twotabsearchtextbox");
  await page.type("#twotabsearchtextbox", termoDePesquisa, { delay: 100 });
  await page.click("#nav-search-submit-button");
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

        if (price <= 40) {
          produtosLocais.push({
            título: title,
            preço: price,
            estrelas: stars,
          });
        }
      } catch {}
    }
    return produtosLocais;
  });

  await browser.close();

  produtos = resultados;

  return resultados;
}

pesquisarAmazon("blush")
  .then(() => {
    fs.writeFileSync(
      "produtos.json",
      JSON.stringify(
        {
          produtos: produtos,
        },
        null,
        2
      )
    );

    console.log("Resultados salvos em produtos.json", produtos);
  })
  .catch((error) => {
    console.error("Erro ao pesquisar na Amazon:", error);
  });
