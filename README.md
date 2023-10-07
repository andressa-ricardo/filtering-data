
## 💻 Aplicação com o Puppeteer!


Criação de um bot que entra no site da amazon, pesquisa pelo produto que lhe for passado, e filtra todas os produtos da primeira página em produtos menores ou iguais ao valor escolhido. Filtrando eles, os mesmas são pegos e adicionados dentro de um arquivo json, com seus respectivos títulos, preços, quantidade de estrelas do produto e do link.</h2>


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

## 📖 Bibliotecas utilizadas: 

- puppeteer
- fs

<hr/>

## ⌨️ Como utilizar:

- `git clone https://github.com/andressa-ricardo/getting-date`
- ` npm install `
- altere pro produto que você quer pesquisar, e pro valor máximo que você quer o produto(no código, tem um comentário marcando onde alterar o preço e o produto)
- ` node index.js `

<hr/>

## ✏️ Autor:

- Linkedin: [Andressa Ricardo](https://www.linkedin.com/in/andressa-ricardo/)
- Github: [andressa-ricardo](https://github.com/andressa-ricardo)
- Youtube: [Andressa Ricardo](https://www.youtube.com/channel/UClWchUw2pxmTfQt3xpVN9yw)
