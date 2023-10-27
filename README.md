
## 💻 Application with Puppeteer


Creation of a bot that enters the Amazon website, searches for the product given to it, and filters all products on the first page into products smaller than or equal to the chosen value. By filtering them, they are taken and added to a json file, with their respective titles, prices, number of stars for the product and link.</h2>


```
{
  "produtos": [
    {
      "title": "Headset Gamer Mancer Aura, RGB, Drivers 50mm, Preto, MCR-AUR-RGB01",
      "price": 132,
      "stars": "4,7 de 5 estrelas",
      "link": "https://www.amazon.com.br/Headset-Gamer-Mancer-Drivers-MCR-AUR-RGB01/dp/B0BM29PK6J/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=11X5FIFWTESH0&keywords=headset&qid=1697744835&refinements=p_36%3A10000-15000&rnid=17270949011&sprefix=headse%2Caps%2C248&sr=8-5&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9"
    },
    {
      "title": "Headphone Fone de Ouvido Havit HV-H2232d, Gamer, Iluminação RGB, com Microfone, Falante de 50mm, Conector 3.5mm, HAVIT, HV-H2232d",
      "price": 108,
      "stars": "4,6 de 5 estrelas",
      "link": "https://www.amazon.com.br/Headphone-HV-H2232d-Ilumina%C3%A7%C3%A3o-Microfone-Conector/dp/B07N78G8GB/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=11X5FIFWTESH0&keywords=headset&qid=1697744835&refinements=p_36%3A10000-15000&rnid=17270949011&sprefix=headse%2Caps%2C248&sr=8-6&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9"
    },
    {
      "title": "Headset Gamer XZONE, Com Suporte - GHS-01",
      "price": 152,
      "stars": "4,5 de 5 estrelas",
      "link": "https://www.amazon.com.br/Headset-Gamer-com-Suporte-GHS-01/dp/B081BG7CCN/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=11X5FIFWTESH0&keywords=headset&qid=1697744835&refinements=p_36%3A10000-15000&rnid=17270949011&sprefix=headse%2Caps%2C248&sr=8-7&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d"
    },
  ]
}

```

<hr/>

## 📖 Libraries used: 

- puppeteer
- fs

<hr/>

## ⌨️ How to use:

- `git clone https://github.com/andressa-ricardo/getting-date`
- ` npm install `
- ` node index.js `
-  after this, you can install the extension `rest client`(opcional for make requests in vscode):
![](https://i.imgur.com/SzylsFS.png)
to make requests in the file `test.http`. just change the product, low price and hight price that you want.
- click in `Send Request` to make request
 ![](https://i.imgur.com/T98cT4X.png)


<hr/>

## ✏️ Author:

- Linkedin: [Andressa Ricardo](https://www.linkedin.com/in/andressa-ricardo/)
- Github: [andressa-ricardo](https://github.com/andressa-ricardo)
- Youtube: [Andressa Ricardo](https://www.youtube.com/channel/UClWchUw2pxmTfQt3xpVN9yw)
