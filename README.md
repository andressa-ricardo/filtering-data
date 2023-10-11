
## 💻 Application with Puppeteer


Creation of a bot that enters the Amazon website, searches for the product given to it, and filters all products on the first page into products smaller than or equal to the chosen value. By filtering them, they are taken and added to a json file, with their respective titles, prices, number of stars for the product and link..</h2>


```
{
  "produtos": [
    {
      "title": "Teclado com fio USB Logitech K120, Resistente à Respingos, Barra de Espaço Curva, Compatível com PC e Notebook, Layout ABNT2",
      "price": 64,
      "stars": "4,8 de 5 estrelas",
      "link": "https://www.amazon.com.br/Silenciosas-Resistente-Respingos-Logitech-Teclados/dp/B074WL3ZHZ/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=teclado&qid=1696703345&sr=8-6"
    },
    {
      "title": "Teclado Multilaser Slim Standard Usb Preto Tc065",
      "price": 29,
      "stars": "4,3 de 5 estrelas",
      "link": "https://www.amazon.com.br/Multilaser-TC065-Teclado-Standard-Preto/dp/B017KR5A4Q/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=teclado&qid=1696703345&sr=8-7"
    },
    {
      "title": "Teclado Multilaser Slim Preto Laser Usb - TC193",
      "price": 23,
      "stars": "4,5 de 5 estrelas",
      "link": "https://www.amazon.com.br/Multilaser-TC193-Teclado-Laser-Preto/dp/B075VFWDD4/ref=sr_1_8?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=teclado&qid=1696703345&sr=8-8"
    }
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
- change it to the product you want to search for, and the maximum value you want for the product (in the code, there is a comment marking where to change the price and product)
- ` node index.js `

<hr/>

## ✏️ Author:

- Linkedin: [Andressa Ricardo](https://www.linkedin.com/in/andressa-ricardo/)
- Github: [andressa-ricardo](https://github.com/andressa-ricardo)
- Youtube: [Andressa Ricardo](https://www.youtube.com/channel/UClWchUw2pxmTfQt3xpVN9yw)
