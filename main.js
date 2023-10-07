import puppeteer from "puppeteer";
import fs from "fs";

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

    const produtos = [];

    for (let i = 0; i < itemSelector.length; i++) {
      try {
        const price = parseInt(
          itemSelector[i]
            .querySelector(".a-price-whole")
            .textContent.replace(/\D/g, "")
        );
        if (price <= 40) {
          produtos.push({
            title: itemSelector[i].querySelector(
              ".s-title-instructions-style > h2 span"
            ).textContent,
            price: price,
          });
        }
      } catch {}
    }
    return produtos;
  });

  //   await browser.close();

  return resultados;
}

pesquisarAmazon("batom")
  .then((resultados) => {
    console.log(resultados);
  })
  .catch((error) => {
    console.error("Erro ao pesquisar na Amazon:", error);
  });
