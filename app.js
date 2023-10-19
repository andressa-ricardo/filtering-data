import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import { pesquisarAmazon } from "./main.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post("/produto", async (req, res) => {
  const { product, lowPrice, highPrice } = req.body;
  try {
    const resultados = await pesquisarAmazon(product, lowPrice, highPrice);
    res.json({ produtos: resultados });
    fs.writeFileSync(
      "produtos.json",
      JSON.stringify(
        {
          produtos: resultados,
        },
        null,
        2
      )
    );
    console.log("Resultados salvos em produtos.json", resultados);
  } catch (error) {
    console.error("Erro ao pesquisar na Amazon:", error);
    res.status(500).json({ error: "Erro ao pesquisar na Amazon" });
  }
});

app.listen(PORT, () => {
  console.log("servidor rodando");
});
