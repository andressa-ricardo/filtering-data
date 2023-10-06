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

  await browser.close();
})();
