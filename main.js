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

        const linkElement = itemSelector[i].querySelector(
          ".s-title-instructions-style > h2 a"
        );
        const link = linkElement ? linkElement.getAttribute("href") : "";

        const linkCompleto = `https://www.amazon.com.br${link}`;

        //aqui você pode alterar pro valor máximo que quer filtrar os produtos
        if (price <= 70) {
          produtosLocais.push({
            title: title,
            price: price,
            stars: stars,
            link: linkCompleto,
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

//aqui você altera pro produto que quer pesquisar
pesquisarAmazon("teclado")
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
  .catch((cropped) => {
    console.error("Erro ao pesquisar na Amazon:", error);
  });
