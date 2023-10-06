import puppeteer from "puppeteer";
import fs from "fs";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.amazon.com.br/ref=nav_logo");

  await page.waitForSelector("#twotabsearchtextbox");
  await page.type("#twotabsearchtextbox", "Caneca", { delay: 100 });
  await page.click("#nav-search-submit-button");
  await page.waitForNavigation();

  const mugs = await page.evaluate(() => {
    const priceSelector = document.querySelectorAll(".a-price-whole");
    const mugSelector = document.querySelectorAll(
      "span[data-component-type='s-search-results'] [data-csa-c-type='item']"
    );
  });

  await browser.close();
})();
